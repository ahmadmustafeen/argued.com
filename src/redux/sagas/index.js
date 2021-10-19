import { takeLatest, all, take } from 'redux-saga/effects';
import { 
      FETCH_CATEGORY,
      FETCH_LATEST_VIDEO,
      FETCH_PUBLIC_PLANS,
      SIGN_IN,
      SIGN_UP,
      FETCH_FAQ ,
      FETCH_VIEWED_VIDEOS,
      LOADER_RESOURCES
    } from '../actionTypes';
import { fetchCategorySaga } from './FetchCategorySaga';
import { fetchLatestVideoSaga } from './FetchLatestVideoSaga';
import { signinSaga } from './SigninSaga';
import { signupSaga } from './SignupSaga';
import {fetchPublicPlanSaga} from './FetchPublicPlanSaga'
import { fetchFaqSaga } from './FetchFaqSaga';
import {fetchViewedVideoSaga} from './FetchViewedVideoSaga'
import {loadingResourcesSaga} from './LoadingResourcesSaga'


function* actionWatcher() {
  yield takeLatest(FETCH_CATEGORY, fetchCategorySaga)
  yield takeLatest(FETCH_LATEST_VIDEO, fetchLatestVideoSaga)
  yield takeLatest(SIGN_IN, signinSaga)
  yield takeLatest(SIGN_UP, signupSaga)
  yield takeLatest(FETCH_PUBLIC_PLANS, fetchPublicPlanSaga)
  yield takeLatest(FETCH_FAQ,fetchFaqSaga)
  yield takeLatest(FETCH_VIEWED_VIDEOS,fetchViewedVideoSaga)
  yield takeLatest(LOADER_RESOURCES,loadingResourcesSaga)

}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
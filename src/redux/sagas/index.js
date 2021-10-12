import { takeLatest, all, take } from 'redux-saga/effects';
import { FETCH_CATEGORY, FETCH_LATEST_VIDEO, FETCH_PUBLIC_PLANS, SIGN_IN, SIGN_UP,FETCH_FAQ } from '../actionTypes';
import { fetchCategorySaga } from './FetchCategorySaga';
import { fetchLatestVideoSaga } from './FetchLatestVideoSaga';
import { signinSaga } from './SigninSaga';
import { signupSaga } from './SignupSaga';
import {fetchPublicPlanSaga} from './FetchPublicPlanSaga'
import { fetchFaqSaga } from './FetchFaqSaga';


function* actionWatcher() {
  yield takeLatest(FETCH_CATEGORY, fetchCategorySaga)
  yield takeLatest(FETCH_LATEST_VIDEO, fetchLatestVideoSaga)
  yield takeLatest(SIGN_IN, signinSaga)
  yield takeLatest(SIGN_UP, signupSaga)
  yield takeLatest(FETCH_PUBLIC_PLANS, fetchPublicPlanSaga)
  yield takeLatest(FETCH_FAQ,fetchFaqSaga)

}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
import { takeLatest, all, take } from 'redux-saga/effects';
import { FETCH_CATEGORY, FETCH_LATEST_VIDEO, SIGN_IN, SIGN_UP } from '../actionTypes';
import { fetchCategorySaga } from './FetchCategorySaga';
import { fetchLatestVideoSaga } from './FetchLatestVideoSaga';
import { signinSaga } from './SigninSaga';
import { signupSaga } from './SignupSaga';


function* actionWatcher() {
  yield takeLatest(FETCH_CATEGORY, fetchCategorySaga)
  yield takeLatest(FETCH_LATEST_VIDEO, fetchLatestVideoSaga)
  yield takeLatest(SIGN_IN, signinSaga)
  yield takeLatest(SIGN_UP, signupSaga)

}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
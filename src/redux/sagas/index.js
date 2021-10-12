import { takeLatest, all, take } from 'redux-saga/effects';
import { FETCH_CATEGORY, FETCH_LATEST_VIDEO } from '../actionTypes';
import { fetchCategorySaga } from './FetchCategorySaga';
import { fetchLatestVideoSaga } from './FetchLatestVideoSaga';


function* actionWatcher() {
  yield takeLatest(FETCH_CATEGORY,fetchCategorySaga)
  yield takeLatest(FETCH_LATEST_VIDEO,fetchLatestVideoSaga)
 
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
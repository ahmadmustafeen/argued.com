import { takeLatest, all, take } from 'redux-saga/effects';
import { FETCH_CATEGORY } from '../actionTypes';
import { fetchCategorySaga } from './FetchCategorySaga';


function* actionWatcher() {
  yield takeLatest(FETCH_CATEGORY,fetchCategorySaga)
 
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
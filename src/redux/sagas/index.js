import { takeLatest, all, take } from 'redux-saga/effects';
import {
} from '../actionTypes';


function* actionWatcher() {
 
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
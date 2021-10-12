import { put, call } from 'redux-saga/effects';
import { API_ENDPOINTS } from '../../constants/Network';
import { RestClient } from '../../network/RestClient';
import { ActionWithoutPayload, ActionWithPayload } from '../actions';
import { FETCH_CATEGORY_SUCCESS, FETCH_LATEST_VIDEO_SUCCESS, FETCH_VIEWED_VIDEOS_SUCCESS, NETWORK_ERROR, SHOW_NETWORK_MODAL } from '../actionTypes';




export function* fetchViewedVideoSaga({ type, payload }) {

    try {
        //marked as started



        //starting
        const response = yield call(() =>
            RestClient.get(API_ENDPOINTS.fetch_recent_video),
        );
        console.log('response of recent video', response)
        if (response.problem === NETWORK_ERROR) {
            return yield put({ type: SHOW_NETWORK_MODAL });
        }
        const { status, data, message } = response;
        if (response.status === 200) {
            yield put(ActionWithPayload(FETCH_VIEWED_VIDEOS_SUCCESS, data?.data))
        }
        else {
            //error
        }
    } catch (error) {
        //error
    } finally {
        // marked as completed
    }
}
import { put, call } from 'redux-saga/effects';
import { API_ENDPOINTS } from '../../constants/Network';
import { RestClient } from '../../network/RestClient';
import { ActionWithoutPayload, ActionWithPayload } from '../actions';
import { FETCH_CATEGORY_SUCCESS, FETCH_LATEST_VIDEO_SUCCESS, NETWORK_ERROR, SHOW_NETWORK_MODAL } from '../actionTypes';




export function* fetchLatestVideoSaga({ type, payload }) {

    try {
        //marked as started



        RestClient.setHeader("mauthorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNjZjJhZmJmYmE4ZDhkYzQxZGY3N2EiLCJkYXRlIjoiMjAxOS0xMS0xNFQwNjoyMzoyNC4zMzRaIiwiaWF0IjoxNTczNzEyNjA0fQ.a-7JHymyrGym5Qrt5RtApZxwldNwg7W-GNl9Qfjb3_o")
        
        RestClient.setHeader("Authorization: ", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNjZjJhZmJmYmE4ZDhkYzQxZGY3N2EiLCJkYXRlIjoiMjAxOS0xMS0xNFQwNjoyMzoyNC4zMzRaIiwiaWF0IjoxNTczNzEyNjA0fQ.a-7JHymyrGym5Qrt5RtApZxwldNwg7W-GNl9Qfjb3_o")
        //starting
        const response = yield call(() =>
            RestClient.get(`${API_ENDPOINTS.fetch_latest_video}/lates?subCategory=${payload.id}`),
        );
        console.log('response of subCategory', response)
        if (response.problem === NETWORK_ERROR) {
            return yield put({ type: SHOW_NETWORK_MODAL });
        }
        const { status, data, message } = response;
        if (response.status === 200) {
            yield put(ActionWithPayload(FETCH_LATEST_VIDEO_SUCCESS, data?.data))
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
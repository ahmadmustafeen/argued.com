import { put, call } from 'redux-saga/effects';
import { API_ENDPOINTS,BASE_URL } from '../../constants/Network';
import { RestClient } from '../../network/RestClient';
import { ActionWithoutPayload, ActionWithPayload } from '../actions';
import { FETCH_CATEGORY_SUCCESS, FETCH_LATEST_VIDEO_SUCCESS, NETWORK_ERROR, SHOW_NETWORK_MODAL } from '../actionTypes';
import axios from 'axios'



export function* fetchLatestVideoSaga({ type, payload }) {

    try {
        //marked as started



        // RestClient.setHeader("mauthorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNjZjJhZmJmYmE4ZDhkYzQxZGY3N2EiLCJkYXRlIjoiMjAxOS0xMS0xNFQwNjoyMzoyNC4zMzRaIiwiaWF0IjoxNTczNzEyNjA0fQ.a-7JHymyrGym5Qrt5RtApZxwldNwg7W-GNl9Qfjb3_o")
        
        // RestClient.setHeader("Authorization: ", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGNjZjJhZmJmYmE4ZDhkYzQxZGY3N2EiLCJkYXRlIjoiMjAxOS0xMS0xNFQwNjoyMzoyNC4zMzRaIiwiaWF0IjoxNTczNzEyNjA0fQ.a-7JHymyrGym5Qrt5RtApZxwldNwg7W-GNl9Qfjb3_o")
        // //starting
        // const response = yield call(() =>
        //     RestClient.get(`${API_ENDPOINTS.fetch_latest_video}/lates?subCategory=${payload.id}`),
        // );

        const response = yield axios.get(`${BASE_URL}/${API_ENDPOINTS.fetch_latest_video}`,"",
        {
            headers: {
                'Accept':'*/*',
                'Access-Control-Allow-Origin':"*"
                // 'Accept-Encoding': 'gzip',
                // 'Content-Type':'application/json',
                // 'mauthorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGJlMzlhNTk5NjdhODBlMzZkNWUwNGUiLCJkYXRlIjoiMjAyMS0xMC0xOVQwOToxMDowMi44OTJaIiwiaWF0IjoxNjM0NjM0NjAyfQ.92Non_JWv8vytUUD4MF7rW0PEXiVqfFBab521_TUmIc`
                // ,'Authorization': `Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGJlMzlhNTk5NjdhODBlMzZkNWUwNGUiLCJkYXRlIjoiMjAyMS0xMC0xOVQwOToxMDowMi44OTJaIiwiaWF0IjoxNjM0NjM0NjAyfQ.92Non_JWv8vytUUD4MF7rW0PEXiVqfFBab521_TUmIc`
              }
        }
        )
        console.log('response of fetch latest video', response)
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
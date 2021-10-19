import { put, call } from 'redux-saga/effects';
import { API_ENDPOINTS,BASE_URL } from '../../constants/Network';
import { RestClient } from '../../network/RestClient';
import { ActionWithoutPayload, ActionWithPayload } from '../actions';
import { SIGN_IN_FAILURE, NETWORK_ERROR, SHOW_NETWORK_MODAL, SIGN_IN_SUCCESS } from '../actionTypes';
import { toast } from 'react-toastify'

import axios from 'axios'


export function* signinSaga({ type, payload }) {

    try {
        //marked as started


        const requestData = { username: payload.username, password: payload.password }
        //starting
        // const response = yield call(() =>
        //     RestClient.post(API_ENDPOINTS.signin, requestData),
        // );
        const response = yield  axios.post(`${BASE_URL}/${API_ENDPOINTS.signin}`,requestData,{
            headers: {
                'mauthorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGJlMzlhNTk5NjdhODBlMzZkNWUwNGUiLCJkYXRlIjoiMjAyMS0xMC0xOVQwODoxNDowMC40MDVaIiwiaWF0IjoxNjM0NjMxMjQwfQ.eKoJmUPx6PIRS2w71yZjtHqd5LlgVR_SPfLVImIBrC0`
              }
        })
        console.log('response of signin', response)
        if (response.problem === NETWORK_ERROR) {
            return yield put({ type: SHOW_NETWORK_MODAL });
        }
        const { status, data, message } = response;
        if (response.status === 200) {
            if (data.key === "user.login_failed") {
                yield put(ActionWithoutPayload(SIGN_IN_FAILURE))

                toast.warn("Incorrect username or password")
                return false
            }
            localStorage.setItem("@userProfileReducer", JSON.stringify(data?.data))
            yield put(ActionWithPayload(SIGN_IN_SUCCESS, data?.data))
            // RestClient.setHeader('Authorization', null);
            // RestClient.deleteHeader()
            RestClient.setHeaders({
                headers: {
                    'mauthorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGJlMzlhNTk5NjdhODBlMzZkNWUwNGUiLCJkYXRlIjoiMjAyMS0xMC0xOVQwODoxNDowMC40MDVaIiwiaWF0IjoxNjM0NjMxMjQwfQ.eKoJmUPx6PIRS2w71yZjtHqd5LlgVR_SPfLVImIBrC0`
                }
            })
            // RestClient.setHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            // RestClient.setHeader('Accept', 'application/json');
            // RestClient.setHeader('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGJlMzlhNTk5NjdhODBlMzZkNWUwNGUiLCJkYXRlIjoiMjAyMS0xMC0xOVQwODoxNDowMC40MDVaIiwiaWF0IjoxNjM0NjMxMjQwfQ.eKoJmUPx6PIRS2w71yZjtHqd5LlgVR_SPfLVImIBrC0`);
            toast.success("Signin Success")
            payload.history.push("/")
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
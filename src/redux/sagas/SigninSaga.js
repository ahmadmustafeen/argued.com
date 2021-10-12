import { put, call } from 'redux-saga/effects';
import { API_ENDPOINTS } from '../../constants/Network';
import { RestClient } from '../../network/RestClient';
import { ActionWithoutPayload, ActionWithPayload } from '../actions';
import { FETCH_CATEGORY_SUCCESS, NETWORK_ERROR, SHOW_NETWORK_MODAL, SIGN_IN_SUCCESS } from '../actionTypes';




export function* signinSaga({ type, payload }) {

    try {
        //marked as started


        const requestData = {username:"parth",password:"Admin123"}
        //starting
        const response = yield call(() =>
            RestClient.post(API_ENDPOINTS.signin,requestData),
        );
        console.log('response of signin',response)
        if (response.problem === NETWORK_ERROR) {
            return yield put({ type: SHOW_NETWORK_MODAL });
        }
        const { status, data, message } = response;
        if (response.status===200) {
            yield put(ActionWithPayload(SIGN_IN_SUCCESS,data?.data))
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
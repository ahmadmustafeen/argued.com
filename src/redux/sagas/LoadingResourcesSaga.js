import { put, call } from 'redux-saga/effects';
import { API_ENDPOINTS } from '../../constants/Network';
import { RestClient } from '../../network/RestClient';
import { ActionWithoutPayload, ActionWithPayload } from '../actions';
import { FETCH_CATEGORY, SIGN_IN_SUCCESS, NETWORK_ERROR, SHOW_NETWORK_MODAL } from '../actionTypes';




export function* loadingResourcesSaga({ type, payload }) {

    try {
        //marked as started
        const toBeParsedUSerProfileData =yield  localStorage.getItem("@userProfileReducer")
        const UserProfileReducer = JSON.parse(toBeParsedUSerProfileData)
        console.log("this wroks","USerProfileReducer")
        yield put(ActionWithoutPayload(FETCH_CATEGORY))

        if(UserProfileReducer.token){
        yield put(ActionWithPayload(SIGN_IN_SUCCESS,UserProfileReducer))
        }

        //starting
      
    } catch (error) {
        //error
    } finally {
        // marked as completed
    }
}
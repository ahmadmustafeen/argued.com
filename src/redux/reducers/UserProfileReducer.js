import {
    SIGN_IN_SUCCESS

} from '../actionTypes';

const initialState = [];

const UserProfileReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGN_IN_SUCCESS:
            return payload
      
        default:
            return initialState;
    }
};

export default UserProfileReducer;
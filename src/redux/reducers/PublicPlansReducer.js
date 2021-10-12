import {
    FETCH_PUBLIC_PLANS

} from '../actionTypes';

const initialState = [];

const PublicPlansReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_PUBLIC_PLANS:
            return payload
      
        default:
            return initialState;
    }
};

export default PublicPlansReducer;
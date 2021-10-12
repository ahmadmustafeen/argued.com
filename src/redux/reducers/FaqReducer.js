import {
     FETCH_FAQ_SUCCESS

} from '../actionTypes';

const initialState = [];

const FaqReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_FAQ_SUCCESS:
            return payload
      
        default:
            return initialState;
    }
};

export default FaqReducer;
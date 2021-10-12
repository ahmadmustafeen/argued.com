import {
    CHANGE_SIDEBAR, FETCH_CATEGORY_SUCCESS

} from '../actionTypes';

const initialState = [];

const CategoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_CATEGORY_SUCCESS:
            return payload
      
        default:
            return initialState;
    }
};

export default CategoryReducer;
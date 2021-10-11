import {
    CHANGE_SIDEBAR

} from '../actionTypes';

const initialState = { normal:true };

const SideBarReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_SIDEBAR:
            return {
              normal:payload
            }
      
        default:
            return initialState;
    }
};

export default SideBarReducer;
import {
    SHOW_MODAL,
    HIDE_MODAL,
    DESTROY_MODAL

} from '../actionTypes';
import {WELCOME_MESSAGE_MODAL} from '../../constants/ModalNames'

const initialState = { isVisible: false, screenName: "", data: [] };

const UiModalReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_MODAL:
            return {
                ...payload,
                isVisible: true
            }
        case DESTROY_MODAL:
            return initialState
        case HIDE_MODAL:
            return {
                ...state,
                isVisible: false
            }
        default:
            return initialState;
    }
};

export default UiModalReducer;
import { combineReducers } from 'redux';
import UiModalReducer from './UiModalReducer'
import SideBarReducer from './SideBarReducer'
export default combineReducers({
    UiModalReducer,
    SideBarReducer
});
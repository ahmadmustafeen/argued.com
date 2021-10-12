import { combineReducers } from 'redux';
import UiModalReducer from './UiModalReducer'
import SideBarReducer from './SideBarReducer'
import CategoryReducer from './CategoryReducer'
export default combineReducers({
    UiModalReducer,
    SideBarReducer,
    CategoryReducer
});
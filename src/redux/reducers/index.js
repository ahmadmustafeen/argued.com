import { combineReducers } from 'redux';
import UiModalReducer from './UiModalReducer'
import SideBarReducer from './SideBarReducer'
import CategoryReducer from './CategoryReducer'
import UserProfileReducer from './UserProfileReducer'
import FaqReducer from './FaqReducer'
export default combineReducers({
    UiModalReducer,
    SideBarReducer,
    CategoryReducer,
    UserProfileReducer,
    FaqReducer
});
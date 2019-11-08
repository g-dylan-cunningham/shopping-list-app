import { combineReducers } from 'redux';
import items, * as fromItems from './itemsReducer';


const rootReducer = combineReducers({
    items
})
export default rootReducer;

export const getVisibleItems = (state, filter) => {

    return fromItems.getVisibleItems(state, filter);
}
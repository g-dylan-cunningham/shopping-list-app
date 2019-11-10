import { combineReducers } from 'redux';
import items, * as fromItems from './itemsReducer';


const rootReducer = combineReducers({
    items
})
export default rootReducer;

export const getVisibleItems = (state, filter, sorting, important) => {
    return fromItems.getVisibleItems(state, filter, sorting, important);
}
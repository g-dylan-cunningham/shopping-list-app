import { combineReducers } from 'redux';
import items from './itemsReducer';

const shoppingApp = combineReducers(
    items
)
export default shoppingApp;
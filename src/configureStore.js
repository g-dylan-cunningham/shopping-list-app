import { createStore } from 'redux';
import shoppingApp from './reducers';

const configureStore = () => {
    const store = createStore(shoppingApp);
    return store;
}

export default configureStore;
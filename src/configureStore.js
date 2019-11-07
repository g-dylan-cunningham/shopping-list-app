import { createStore } from 'redux';
import rootReducer from './reducers';
import { saveState, loadState } from './localStorage';

const configureStore = () => {
    const persistedState = loadState();

    const store = createStore(rootReducer, persistedState);

    store.subscribe(() => {
        saveState({
            items: store.getState().items
        })
    })
    
    return store;
}

export default configureStore;
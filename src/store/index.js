import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const inititalState = {};

const persistConfig = {
    key: 'root',
    storage,
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
    persistedReducer,
    inititalState,
    compose(applyMiddleware(thunk)));
    // compose(applyMiddleware(thunk),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const persistor = persistStore(store);
export { store, persistor };
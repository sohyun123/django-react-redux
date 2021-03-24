import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReduxer from './reducers';

const initialState = {} // empty object

const middleware = [thunk];

const store = createStore(
    rootReduxer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)) // ...은 separate operator
);

export default store;
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { appReducers } from '@reducers';

const loggerMiddleware = createLogger();


export const configureStore = (initialState) => {
    return createStore(appReducers, initialState, compose(
        applyMiddleware(
        loggerMiddleware,
        thunkMiddleware
        )
    ))
};
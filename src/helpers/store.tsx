import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from '../reducers'
import {save,load} from 'redux-localstorage-simple'
import findcoord from '../reducers/findcoord'

const loggMiddleware=createLogger();

export const store=createStore(
    rootReducer,
    load(),
    applyMiddleware(
        save(),
        thunk,
        loggMiddleware
    )
)
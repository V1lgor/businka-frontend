import {applyMiddleware, combineReducers, createStore} from "redux";
import {newsReducer} from "./newsReducer";

import thunkMiddleware from 'redux-thunk';

let reducerList = combineReducers({newsReducer});

let store = createStore(reducerList,
    applyMiddleware(thunkMiddleware));

export default store;
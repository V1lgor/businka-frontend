import {applyMiddleware, combineReducers, createStore} from "redux";
import {newsReducer} from "./newsReducer";

import thunkMiddleware from 'redux-thunk';
import {productReducer} from "./productReducer";

let reducerList = combineReducers({newsReducer, productReducer});

let store = createStore(reducerList,
    applyMiddleware(thunkMiddleware));

export default store;
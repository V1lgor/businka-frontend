import {applyMiddleware, combineReducers, createStore} from "redux";
import {newsReducer} from "./newsReducer";

import thunkMiddleware from 'redux-thunk';
import {productReducer} from "./productReducer";
import {cartReducer} from "./cartReducer";

let reducerList = combineReducers({newsReducer, productReducer, cartReducer});

let store = createStore(reducerList,
    applyMiddleware(thunkMiddleware));

export default store;
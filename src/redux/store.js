import {applyMiddleware, combineReducers, createStore} from "redux";
import {newsReducer} from "./newsReducer";

import thunkMiddleware from 'redux-thunk';
import {productReducer} from "./productReducer";
import {cartReducer} from "./cartReducer";
import {orderReducer} from "./orderReducer";

let reducerList = combineReducers({newsReducer, productReducer, cartReducer, orderReducer});

let store = createStore(reducerList,
    applyMiddleware(thunkMiddleware));

export default store;

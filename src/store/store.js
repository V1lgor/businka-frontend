import {applyMiddleware, combineReducers, createStore} from "redux";
import {newsReducer} from "./newsReducer";

import thunkMiddleware from 'redux-thunk';
import {productReducer} from "./productReducer";
import {cartReducer} from "./cartReducer";
import {orderReducer} from "./orderReducer";
import categoryReducer from "./reducers/categoryReducer";
import notificationReducer from "./reducers/notificationReducer";

let reducerList = combineReducers({
    newsReducer,
    productReducer,
    cartReducer,
    orderReducer,
    categoryReducer,
    notificationReducer
});

let store = createStore(reducerList,
    applyMiddleware(thunkMiddleware));

export default store;

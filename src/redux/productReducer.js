import axios from 'axios';
import {normalize} from 'normalizr';
import Product from "./entity/productEntity";

const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";

const SET_TOTAL_PRODUCT_COUNT = "SET_TOTAL_PRODUCT_COUNT";
const SET_CURRENT_PRODUCT_PAGE = "SET_CURRENT_PRODUCT_PAGE";

const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";

const initialState = {
    productList: {
        products: {},
        idList: []
    },
    currentPage: 0,
    pageSize: 25,
    totalProductCount: 0,
    selectedCategory: {}
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return state.productList;
        case SET_PRODUCT_LIST:
            return Object.assign({}, state, {
                productList: action.productList
            });
        case SET_TOTAL_PRODUCT_COUNT:
            return Object.assign({}, state, {
                totalProductCount: action.totalProductCount
            });
        case SET_CURRENT_PRODUCT_PAGE:
            return Object.assign({}, state, {
                currentPage: action.pageNumber
            });
        case SET_SELECTED_CATEGORY:
            return Object.assign({}, state, {
                selectedCategory: action.category
            });
        default:
            return state;
    }
};

export const setProductList = ({entities, result}) => {
    return {
        type: SET_PRODUCT_LIST,
        productList: {
            products: entities.product,
            idList: result
        }
    }
};

export const setTotalProductCount = (totalProductCount) => {
    return {
        type: SET_TOTAL_PRODUCT_COUNT,
        totalProductCount: totalProductCount
    }
};

const setCurrentPageAction = (pageNumber) => {
    return {
        type: SET_CURRENT_PRODUCT_PAGE,
        pageNumber: pageNumber
    }
};

export const setSelectedCategory = (category) => {
    return {
        type: SET_SELECTED_CATEGORY,
        category
    }
};


export const setCurrentPage = (pageNumber) => (dispatch) => {
    dispatch(setCurrentPageAction(pageNumber));
};

export const getTotalProductCount = () => (dispatch) => {
    axios.head('http://localhost:8080/product')
        .then(response => parseInt(response.headers["x-total-count"]))
        .then(totalProductCount => dispatch(setTotalProductCount(totalProductCount)));
};

export const getProductList = () => (dispatch, getState) => {
    const currentPage = getState().productReducer.currentPage;
    const pageSize = getState().productReducer.pageSize;

    axios.get(`http://localhost:8080/product?page=${currentPage}&size=${pageSize}`)
        .then(response => response.data)
        .then(productList => {
            dispatch(setProductList(normalize(productList, [Product])))
        })
};

export const getProductCountInCategory = (categoryId) => (dispatch) => {
    axios.head(`http://localhost:8080/category/${categoryId}/products`)
        .then(response => parseInt(response.headers["x-total-count"]))
        .then(totalProductCount => dispatch(setTotalProductCount(totalProductCount)));
};


export const getCategoryById = (categoryId) => (dispatch) => {
    axios.get(`http://localhost:8080/category/${categoryId}`)
        .then(response => response.data)
        .then(category => dispatch(setSelectedCategory(category)));
};


export const getProductListByCategoryId = (categoryId) => (dispatch, getState) => {
    const currentPage = getState().productReducer.currentPage;
    const pageSize = getState().productReducer.pageSize;

    axios.get(`http://localhost:8080/category/${categoryId}/products?page=${currentPage}&size=${pageSize}`)
        .then(response => response.data)
        .then(productList => dispatch(setProductList(normalize(productList, [Product]))));
}

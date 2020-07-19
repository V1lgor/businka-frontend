import axios from 'axios';

const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";

const SET_TOTAL_PRODUCT_COUNT = "SET_TOTAL_PRODUCT_COUNT";

const SET_CURRENT_PRODUCT_PAGE = "SET_CURRENT_PRODUCT_PAGE";

const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";

const initialState = {
    productList: [],
    currentPage: 0,
    pageSize: 3,
    totalProductCount: 0,
    selectedCategory: {}
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            console.log(GET_PRODUCT_LIST);
            return state.productList;
        case SET_PRODUCT_LIST:
            console.log(SET_PRODUCT_LIST);
            return Object.assign({}, state, {
                productList: action.productList
            });
        case SET_TOTAL_PRODUCT_COUNT:
            console.log(SET_TOTAL_PRODUCT_COUNT);
            return Object.assign({}, state, {
                totalProductCount: action.totalProductCount
            });
        case SET_CURRENT_PRODUCT_PAGE:
            console.log(SET_CURRENT_PRODUCT_PAGE);
            return Object.assign({}, state, {
                currentPage: action.pageNumber
            });
        case SET_SELECTED_CATEGORY:
            console.log(SET_SELECTED_CATEGORY);
            return Object.assign({}, state, {
                selectedCategory: action.category
            });
        default:
            return state;
    }
};

export const setProductList = (productList) => {
  return {
      type: SET_PRODUCT_LIST,
      productList: productList
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
    console.log("OK");
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
        .then(productList => dispatch(setProductList(productList)))
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
        .then(productList => dispatch(setProductList(productList)))
};

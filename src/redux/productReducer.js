import axios from 'axios';

const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";

const initialState = {
    productList: []
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

export const getProductList = () => (dispatch) => {
    axios.get('http://localhost:8080/product')
        .then(response => response.data)
        .then(productList => dispatch(setProductList(productList)))
};
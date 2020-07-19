import axios from 'axios';

const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";

const SET_PRODUCT_IMAGE = "SET_PRODUCT_IMAGE";

const initialState = {
    productList: []
};

function base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    let sliceSize = 1024;
    let byteCharacters = atob(base64Data);
    let bytesLength = byteCharacters.length;
    let slicesCount = Math.ceil(bytesLength / sliceSize);
    let byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        let begin = sliceIndex * sliceSize;
        let end = Math.min(begin + sliceSize, bytesLength);

        let bytes = new Array(end - begin);
        for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}


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

export const getProductList = () => (dispatch, getState) => {
    axios.get('http://localhost:8080/product')
        .then(response => response.data)
        .then(productList => dispatch(setProductList(productList)))
};

const TOGGLE_CART_PREVIEW = "TOGGLE_CART_PREVIEW";
const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
const CLEAR_CART = "CLEAR_CART";
const DISABLE_CART_PREVIEW = "DISABLE_CART_PREVIEW";

let initialState = {
    cartPreviewVisible: false,
    productList: {
        products: {},
        idList: []
    },
    totalSum: 0
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART_PREVIEW:
            return Object.assign({}, state, {
                cartPreviewVisible: !state.cartPreviewVisible
            });

        case DISABLE_CART_PREVIEW:
            console.log(DISABLE_CART_PREVIEW);
            return Object.assign({}, state, {
                cartPreviewVisible: false
            });

        case ADD_PRODUCT_TO_CART: {
            let cartProductList = {...state.productList.products};
            let cartProductIdList = [...state.productList.idList];
            let productId = action.product.id;

            if (cartProductList[productId]) {
                cartProductList[productId].count++;
            }
            else {
                cartProductList[productId] = {...action.product, count: 1};
                cartProductIdList.push(productId);
            }

            return Object.assign({}, state, {
                productList: {
                    products: cartProductList,
                    idList: cartProductIdList
                },
                totalSum: state.totalSum + action.product.price * (100 - action.product.discount) / 100
            });
        }

        case REMOVE_PRODUCT_FROM_CART: {
            let cartProductList = {...state.productList.products};
            let cartProductIdList = [...state.productList.idList];
            let productId = action.productId;
            let totalSum = state.totalSum;

            totalSum -= cartProductList[productId].price * (100 - cartProductList[productId].discount) / 100;
            if (cartProductList[productId].count === 1) {
                delete cartProductList[productId];
                cartProductIdList = cartProductIdList.filter(id => id !== productId);
            }
            else {
                cartProductList[productId].count--;
            }
            return Object.assign({}, state, {
                productList: {
                    products: cartProductList,
                    idList: cartProductIdList
                },
                totalSum: totalSum
            });
        }

        case CLEAR_CART:
            console.log(CLEAR_CART);
            return Object.assign({}, state, {
                productList: {
                    products: {},
                    idList: []
                },
                totalSum: 0
            });

        default:
            return state;

    }
};

export const toggleCartPreview = () => {
    return {
        type: TOGGLE_CART_PREVIEW
    }
};

const addProductToCartAction = (product) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        product
    }
};

const removeProductFromCartAction = (productId) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        productId
    }
};

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
};

export const disableCartPreview = () => {
    return {
        type: DISABLE_CART_PREVIEW
    }
};

export const addProductToCart = (product) => (dispatch) => {
    dispatch(addProductToCartAction(product));
};

export const removeProductFromCart = (productId) => (dispatch) => {
    dispatch(removeProductFromCartAction(productId));
};
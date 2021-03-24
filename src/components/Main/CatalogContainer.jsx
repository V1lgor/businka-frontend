import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getProductList, getTotalProductCount, setCurrentPage} from "../../store/productReducer";
import ProductList from "./ProductList/ProductList";
import {addProductToCart, removeProductFromCart} from "../../store/cartReducer";

const CatalogContainer = (props) => {
    useEffect(props.getProductList, [props.currentPage]);

    useEffect(props.getTotalProductCount, [props.getTotalProductCount]);

    useEffect(() => props.setCurrentPage(0), [props.pageCount]);

    let getProductListWithCountInCart = () => {
        return props.productList.idList.map(id => {
            let product = props.productList.products[id];
            if (props.cartProductList.products[id]) product.count = props.cartProductList.products[id].count;
            else delete product.count;
            return product;
        })
    };

    return (
        <ProductList productList={getProductListWithCountInCart()}
                     pageCount={props.pageCount}
                     currentPage={props.currentPage}
                     onPaginationClick={props.setCurrentPage}
                     addProductToCart={props.addProductToCart}
                     removeProductFromCart={props.removeProductFromCart}/>
    )
};

const mapStateToProps = (state) => {
    return {
        productList: state.productReducer.productList,
        cartProductList: state.cartReducer.productList,
        pageCount: Math.ceil(state.productReducer.totalProductCount / state.productReducer.pageSize),
        currentPage: state.productReducer.currentPage
    }
};

export default connect(mapStateToProps, {
    getProductList,
    getTotalProductCount,
    setCurrentPage,
    addProductToCart,
    removeProductFromCart
})(CatalogContainer);
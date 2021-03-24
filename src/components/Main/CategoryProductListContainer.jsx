import React, {useEffect} from "react";
import ProductList from "./ProductList/ProductList";
import {connect} from "react-redux";
import {
    getCategoryById,
    getProductCountInCategory,
    getProductListByCategoryId,
    setCurrentPage
} from "../../store/productReducer";
import {addProductToCart, removeProductFromCart} from "../../store/cartReducer";

const CategoryProductListContainer = (props) => {

    const categoryId = props.match.params.categoryId;

    useEffect(() => props.setCurrentPage(0), [categoryId]);

    useEffect(() => props.getProductListByCategoryId(categoryId),
        [props.currentPage, props.match.params.categoryId]);

    useEffect(() => props.getProductCountInCategory(categoryId), [categoryId]);

    useEffect(() => props.getCategoryById(categoryId), [categoryId]);

    let getProductListWithCountInCart = () => {
        return props.productList.idList.map(id => {
            let product = props.productList.products[id];
            if (props.cartProductList.products[id]) product.count = props.cartProductList.products[id].count;
            else delete product.count;
            return product;
        })
    };

    return (
        <div className="page-content">
            <h2 className="page-content__page-title">Просмотр товаров в категории: {props.selectedCategory.name}</h2>
            <ProductList productList={getProductListWithCountInCart()}
                         pageCount={props.pageCount}
                         currentPage={props.currentPage}
                         onPaginationClick={props.setCurrentPage}
                         addProductToCart={props.addProductToCart}
                         removeProductFromCart={props.removeProductFromCart}/>
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        productList: state.productReducer.productList,
        cartProductList: state.cartReducer.productList,
        pageCount: Math.ceil(state.productReducer.totalProductCount / state.productReducer.pageSize),
        currentPage: state.productReducer.currentPage,
        selectedCategory: state.productReducer.selectedCategory
    }
};

export default connect(mapStateToProps, {
    getProductListByCategoryId,
    getProductCountInCategory,
    getCategoryById,
    setCurrentPage,
    addProductToCart,
    removeProductFromCart
})
(CategoryProductListContainer);
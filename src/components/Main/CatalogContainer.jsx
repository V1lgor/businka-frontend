import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getProductList, getTotalProductCount, setCurrentPage} from "../../redux/productReducer";
import ProductList from "./ProductList/ProductList";

const CatalogContainer = (props) => {
    useEffect(props.getProductList, [props.currentPage]);

    useEffect(props.getTotalProductCount, [props.getTotalProductCount]);
    
    useEffect(() => props.setCurrentPage(0), [props.pageCount])

    return (
        <ProductList productList={props.productList}
                     pageCount={props.pageCount}
                     currentPage={props.currentPage}
                     onPaginationClick = {props.setCurrentPage}/>
    )
};

const mapStateToProps = (state) => {
    return {
        productList: state.productReducer.productList,
        pageCount: Math.ceil(state.productReducer.totalProductCount / state.productReducer.pageSize),
        currentPage: state.productReducer.currentPage
    }
};

export default connect(mapStateToProps, {getProductList, getTotalProductCount, setCurrentPage})(CatalogContainer);
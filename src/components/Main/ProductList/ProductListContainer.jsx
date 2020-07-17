import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getProductList} from "../../../redux/productReducer";
import ProductList from "./ProductList";

const ProductListContainer = (props) => {
    useEffect(props.getProductList, [props.getProductList]);

    return (
        <ProductList productList = {props.productList}/>
    )
};

const mapStateToProps = (state) => {
    return {
        productList: state.productReducer.productList
    }
};

export default connect(mapStateToProps, {getProductList})(ProductListContainer);
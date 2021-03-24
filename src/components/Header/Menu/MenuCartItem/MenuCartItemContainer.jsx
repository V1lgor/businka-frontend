import React from "react";
import MenuCartItem from "./MenuCartItem";
import {connect} from "react-redux";
import {clearCart, toggleCartPreview} from "../../../../store/cartReducer";

const MenuCartItemContainer = (props) => {

    return (
        <MenuCartItem
            onClick = {props.toggleCartPreview}
            productList={props.productList.idList.map(id => props.productList.products[id])}
            cartPreviewVisible = {props.cartPreviewVisible}
            clearCart={props.clearCart}
            totalSum = {props.totalSum}/>
    )
};

const mapStateToProps = (state) => {
    return {
        cartPreviewVisible: state.cartReducer.cartPreviewVisible,
        productList: state.cartReducer.productList,
        totalSum: state.cartReducer.totalSum
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartPreview: () => {
            dispatch(toggleCartPreview())
        },
        clearCart: () => dispatch(clearCart())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuCartItemContainer);
import React from "react";
import {connect} from "react-redux";
import CartTable from "../../common/CartTable";

const CartTableContainer = (props) => {
    return (
        <div className="order-page__order-product-table">
            <CartTable productList={props.productList.idList.map(id => props.productList.products[id])}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        productList: state.cartReducer.productList
    }
};

export default connect(mapStateToProps, {})(CartTableContainer);
import React from "react";
import OrderForm from "./OrderForm";
import CartTableContainer from "./CartTableContainer";

const OrderPage = (props) => {
    return (
        <div className="order-page">
            <h2 className="order-page__page-title">Оформление заказа</h2>
            <OrderForm regionList={props.regionList}/>
            <CartTableContainer/>
        </div>
    )
};

export default OrderPage;

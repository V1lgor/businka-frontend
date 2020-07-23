import React from 'react';
import CartPreview from "./CartPreview";

const MenuCartItem = (props) => {
    return (
        <div className="header__menu-item header__cart">
            <div className="header__menu-item-button"
                 onClick={props.onClick}>
                Корзина: {props.totalSum.toFixed(2)} руб.
            </div>
            <CartPreview productList={props.productList}
                         visible={props.cartPreviewVisible}
                         totalSum={props.totalSum}
                         clearCart={props.clearCart}/>
        </div>

    )
};

export default MenuCartItem;
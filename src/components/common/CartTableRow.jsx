import React from "react";

const CartTableRow = (props) => {
    const discountPrice = props.price * (100 - props.discount) / 100;
    const finalPrice = props.count * discountPrice;
    return (
        <tr className="cart-product-table__row">
            <td className="cart-product-table__cell">{props.name}</td>
            <td className="cart-product-table__cell">{props.count}</td>
            <td className="cart-product-table__cell">{props.price.toFixed(2)}</td>
            <td className="cart-product-table__cell">{props.discount}</td>
            <td className="cart-product-table__cell">{discountPrice.toFixed(2)}</td>
            <td className="cart-product-table__cell">{finalPrice.toFixed(2)}</td>
        </tr>
    )
};

export default CartTableRow;

import React from 'react';
import CartTableRow from "./CartTableRow";

const CartTable = (props) => {
    return (
        <table className="cart-product-table">
            <tbody>
            <tr className="cart-product-table__row">
                <th className="cart-product-table__cell">Наименование</th>
                <th className="cart-product-table__cell">Количество</th>
                <th className="cart-product-table__cell">Цена</th>
                <th className="cart-product-table__cell">Скидка</th>
                <th className="cart-product-table__cell">Цена со скидкой</th>
                <th className="cart-product-table__cell">Итог</th>
            </tr>
            {props.productList.map(product => {
                return (
                    <CartTableRow key={product.id}
                                  name={product.name}
                                  count={product.count}
                                  discount={product.discount}
                                  price={product.price}/>
                )
            })}
            </tbody>
        </table>
    )
};

export default CartTable;
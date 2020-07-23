import React from "react";
import DiscountLabel from "./DiscountLabel";

const ProductCard = (props) => {
    const getProductPrice = () => {
        if (props.discount) {
            return (
                <b>
                    <span className="product-item__price_old">{props.price} рублей</span>
                    <span> {props.price * (100 - props.discount) / 100} рублей</span>
                </b>
            )
        } else {
            return <b>{props.price} рублей</b>
        }
    };

    return (
        <div className="product-item">
            {props.discount ? <DiscountLabel discount={props.discount}/> : null}
            <div className="product-item__image-container">
                <img src={props.imageURL} alt="" className="product-item__image"/>
            </div>
            <p className="product-item__name">
                {props.name}
            </p>
            <p className="product-item__code">Артикул: {props.code}</p>
            <p className="product-item__price">
                Цена: {getProductPrice()}
            </p>
            {
                props.count ?
                    <div className="product-item__in-cart-count">
                        <span className="product-item__current-count">В корзине: {props.count}</span>
                        <span className="product-item__change-count" onClick={props.handleAddToCart}>+</span>
                        <span className="product-item__change-count" onClick={props.handleRemoveFromCart}>-</span>
                    </div>
                    :
                    <div className="product-item__add-to-cart-btn" onClick={props.handleAddToCart}>
                        Добавить в корзину
                    </div>
            }

        </div>
    )
};

export default ProductCard;
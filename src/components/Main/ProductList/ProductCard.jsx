import React from "react";

const ProductCard = (props) => {
    return (
        <div className="product-item">
            <div className="product-item__image-container">
                <img src={props.imageURL} alt="" className="product-item__image"/>
            </div>
            <p className="product-item__name">
                {props.name}
            </p>
            <p className="product-item__code">Артикул: {props.code}</p>
            <p className="product-item__price">Цена: <b>{props.price} рублей</b></p>
            <div className="product-item__add-to-cart-btn">Добавить в корзину</div>
        </div>
    )
};

export default ProductCard;
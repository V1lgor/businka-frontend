import React from "react";

const OrderForm = (props) => {
    return (
        <form className="form order-page__order-form">
            <div className="form__input-block">
                <label className="form__label">Ваше имя</label>
                <input className="form__input" placeholder="Введите имя"/>
            </div>
            <div className="form__input-block">
                <label className="form__label">Адрес электронной почты:</label>
                <input className="form__input" placeholder="Введите e-mail"/>
            </div>
            <div className="form__input-block">
                <label className="form__label">Регион доставки:</label>
                <select className="form__input" name="" id="">
                    {props.regionList.map(region => <option value={region.id}>{region.name}</option>)}
                </select>
            </div>
            <div className="form__input-block">
                <label className="form__label">Город доставки:</label>
                <select className="form__input" name="" id="">
                    <option value="">Энгельс</option>
                    <option value="">Саратов</option>
                    <option value="">Ртищево</option>
                    <option value="">Красноармейск</option>
                </select>
            </div>
            <div className="form__input-block">
                <label className="form__label">Адрес доставки:</label>
                <input className="form__input" placeholder="Введите точный адрес"/>
            </div>
            <p className="form__label"><b>Сумма заказа с учетом доставки: {props.totalSum} руб.</b></p>
            <button className="btn big" onClick={(e) => e.preventDefault()}>Оформить заказ</button>
        </form>
    )
};

export default OrderForm;

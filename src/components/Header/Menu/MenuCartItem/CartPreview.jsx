import React from "react";
import {CSSTransition} from "react-transition-group";
import CartTable from "../../../common/CartTable";

const CartPreview = (props) => {
    return (
        <CSSTransition in={props.visible}
                       timeout={300}
                       appear
                       unmountOnExit
                       classNames="example">
            <div className="header__cart-preview">
                <h3>Корзина</h3>

                <p>Всего товаров на сумму {props.totalSum.toFixed(2)} руб.</p>
                {props.productList.length > 0
                    ? <React.Fragment>
                        <CartTable productList={props.productList}/>
                        <p className="link" onClick={props.clearCart}>Очистить корзину</p>
                </React.Fragment>
                    : null}
            </div>
        </CSSTransition>
    )
};

export default CartPreview;
import React from "react";
import {CSSTransition} from "react-transition-group";
import CartTable from "../../../common/CartTable";
import {Link} from "react-router-dom";

const CartPreview = (props) => {
    return (
        <CSSTransition in={props.visible}
                       timeout={300}
                       appear
                       unmountOnExit
                       classNames="example">
            <div className="header__cart-preview">
                <h3>Корзина</h3>

                <p className="header__total-sum">Всего товаров на сумму {props.totalSum.toFixed(2)} руб.</p>
                {props.productList.length > 0
                    ? <React.Fragment>
                        <CartTable productList={props.productList}/>
                        <p className="btn header__clear-cart" onClick={props.clearCart}>Очистить корзину</p>
                    </React.Fragment>
                    : null}
                <Link to="/order" className="btn">Оформить заказ</Link>
            </div>
        </CSSTransition>
    )
};

export default CartPreview;
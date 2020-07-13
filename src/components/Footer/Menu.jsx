import React from "react";

const Menu = (props) => {
    return (
        <ul className="footer__menu">
            <h3>Навигация</h3>
            {props.menuItemList.map((menuItem, index) => {
                return <li key = {index}>
                    <a href={menuItem.href}>{menuItem.title}</a>
                </li>
            })}
        </ul>
    );
};

export default Menu;
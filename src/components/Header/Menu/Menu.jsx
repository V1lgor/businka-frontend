import React from "react";


import MenuItem from "./MenuItem";

const Menu = (props) => {
    return (
        <ul className="header__menu">
            {props.menuItemList.map((menuItem, index) => <MenuItem key = {index} title={menuItem.title} href={menuItem.href}/>)}
        </ul>
    )
};

export default Menu;
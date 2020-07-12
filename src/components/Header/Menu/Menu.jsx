import React from "react";


import MenuItem from "./MenuItem";

const Menu = () => {

    let menuItemList = [
        {title: "Главная", href: "/"},
        {title: "Каталог", href: "/catalog"},
        {title: "Новости", href: "/news"},
        {title: "Оплата и доставка", href: "/delivery"},
        {title: "О нас", href: "/about-us"},
    ];

    return (
        <ul className="header__menu">
            {menuItemList.map((menuItem, index) => <MenuItem key = {index} title={menuItem.title} href={menuItem.href}/>)}
        </ul>
    )
};

export default Menu;
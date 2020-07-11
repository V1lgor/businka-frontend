import React from "react";

import styles from './Menu.module.css';
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {

    let menuItemList = [
        {title: "Главная", href: "/"},
        {title: "Каталог", href: "/catalog"},
        {title: "Новости", href: "/news"},
        {title: "Оплата и доставка", href: "/delivery"},
        {title: "О нас", href: "/about-us"},
    ];

    return (
        <ul className={styles.Menu}>
            {menuItemList.map((menuItem, index) => <MenuItem key = {index} title={menuItem.title} href={menuItem.href}/>)}
        </ul>
    )
};

export default Menu;
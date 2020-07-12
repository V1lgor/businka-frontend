import React from "react";

import styles from './Menu.module.css';

const Menu = () => {
    return (
        <ul className={styles.Menu}>
            <h3>Навигация</h3>
            <li>Главная</li>
            <li>Каталог</li>
            <li>Новости</li>
            <li>Оплата и доставка</li>
            <li>О нас</li>
        </ul>
    );
};

export default Menu;
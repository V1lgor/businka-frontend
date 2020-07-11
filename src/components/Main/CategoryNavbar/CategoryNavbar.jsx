import React from "react";

import styles from './CategoryNavbar.module.css';

const CategoryNavbar = () => {
    return (
        <nav className={styles.Navbar}>
            <h3 className={styles.Title}>Каталог товаров</h3>
            <ul className={styles.CategoryList}>
                <li>Лента</li>
                <li>Тычинки</li>
                <li>Фурнитура</li>
                <li>Фурнитура</li>
                <li>Фурнитура</li>
                <li>Фурнитура</li>
                <li>Фурнитура</li>
                <li>Фурнитура</li>
                <li>Фурнитура</li>
                <li>Фурнитура</li>
                <li>Фурнитура</li>

            </ul>
        </nav>
    )
};

export default CategoryNavbar;
import React from "react";

import styles from './CategoryNavbar.module.css';
import CategoryItem from "./CategoryItem/CategoryItem";

const CategoryNavbar = () => {

    const categoryList = ["Лента", "Тычинки", "Фурнитура", "Вышивка", "Наборы"];

    return (
        <div>
            <nav className={styles.Navbar}>
                <h3 className={styles.Title}>Каталог товаров</h3>
                <ul className={styles.CategoryList}>
                    {categoryList.map((category, index) => <CategoryItem category={category} id={index + 1}/>)}
                </ul>
            </nav>
        </div>
    )
};

export default CategoryNavbar;
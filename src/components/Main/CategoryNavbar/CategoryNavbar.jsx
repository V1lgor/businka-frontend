import React from "react";

import CategoryList from "./CategoryList";

const CategoryNavbar = () => {
    return (
        <div>
            <nav className="category-navbar">
                <h3 className="category-navbar__title">Каталог товаров</h3>
                <CategoryList/>
            </nav>
        </div>
    )
};

export default CategoryNavbar;
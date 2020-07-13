import React from "react";

import CategoryItem from "./CategoryItem/CategoryItem";

const CategoryList = () => {

    const categoryList = [
        {
            name: "Лента",
            subCategoryList: ["Лента атласная", "Лента репсовая"]
        },
        {
            name: "Тычинки",
            subCategoryList: null
        },
        {
            name: "Вышивка",
            subCategoryList: ["Наборы для вышивания", "Нитки", "Иглы"]
        },
        {
            name: "Фурнитура",
            subCategoryList: ["Магниты", "Заколки", "Детали"]
        },
        {
            name: "Флористика",
            subCategoryList: null
        },
    ];

    return (
        <ul className="category-navbar__category-list">
            {categoryList.map((category, index) => <CategoryItem key={index} category={category} id={index + 1}/>)}
        </ul>
    )
};

export default CategoryList;
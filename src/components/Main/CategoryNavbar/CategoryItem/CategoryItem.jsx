import React from "react";

import SubCategoryList from "./SubCategoryList/SubCategoryList";

const CategoryItem = (props) => {
    return (
        <li className="category-navbar__category-item">
            <a href={`/category/${props.id}`} className="category-navbar__category-link">{props.category.name}</a>
            {props.category.subCategoryList
                ? <SubCategoryList categoryList={props.category.subCategoryList}/>
                : null
            }
        </li>
    )
};

export default CategoryItem;
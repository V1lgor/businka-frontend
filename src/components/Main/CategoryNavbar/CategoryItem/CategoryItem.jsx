import React from "react";

import SubCategoryList from "./SubCategoryList/SubCategoryList";

const CategoryItem = (props) => {
    return (
        <li className="category-navbar__category-item">
            <a href={`/category/${props.category.id}`} className="category-navbar__category-link">{props.category.name}</a>
            {props.category.childCategoryList.length > 0
                ? <SubCategoryList categoryList={props.category.childCategoryList}/>
                : null
            }
        </li>
    )
};

export default CategoryItem;
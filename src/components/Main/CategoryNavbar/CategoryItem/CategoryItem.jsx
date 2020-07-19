import React from "react";

import SubCategoryList from "./SubCategoryList/SubCategoryList";
import {Link} from "react-router-dom";

const CategoryItem = (props) => {
    return (
        <li className="category-navbar__category-item">
            <Link to={`/catalog/category/${props.category.id}`} className="category-navbar__category-link">{props.category.name}</Link>
            {props.category.childCategoryList.length > 0
                ? <SubCategoryList categoryList={props.category.childCategoryList}/>
                : null
            }
        </li>
    )
};

export default CategoryItem;
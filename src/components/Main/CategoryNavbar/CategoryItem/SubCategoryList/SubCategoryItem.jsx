import React from 'react';
import {NavLink} from "react-router-dom";

const SubCategoryItem = (props) => {
    return (
        <li className="category-navbar__sub-category-item">
            <NavLink to = {`/catalog/category/${props.category.id}`} className="category-navbar__sub-category-link">{props.category.name}</NavLink>
        </li>
    )
};

export default SubCategoryItem;
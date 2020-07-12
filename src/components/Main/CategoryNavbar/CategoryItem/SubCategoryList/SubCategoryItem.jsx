import React from 'react';

const SubCategoryItem = (props) => {
    return (
        <li className="category-navbar__sub-category-item">
            <a href = "/" className="category-navbar__sub-category-link">{props.category}</a>
        </li>
    )
};

export default SubCategoryItem;
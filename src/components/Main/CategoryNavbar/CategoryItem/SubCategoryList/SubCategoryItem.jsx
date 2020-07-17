import React from 'react';

const SubCategoryItem = (props) => {
    return (
        <li className="category-navbar__sub-category-item">
            <a href = {`/category/${props.category.id}`} className="category-navbar__sub-category-link">{props.category.name}</a>
        </li>
    )
};

export default SubCategoryItem;
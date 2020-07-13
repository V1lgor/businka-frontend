import React from 'react';

import SubCategoryItem from "./SubCategoryItem";

const SubCategoryList = (props) => {
    return (
        <ul className="category-navbar__sub-category-list">
            {props.categoryList.map((category, index) => <SubCategoryItem key={index} category={category}/>)}
        </ul>
    )
};

export default SubCategoryList;
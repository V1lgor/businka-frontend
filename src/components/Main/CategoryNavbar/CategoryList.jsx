import React, {useEffect, useState} from "react";

import axios from 'axios';

import CategoryItem from "./CategoryItem/CategoryItem";

const CategoryList = () => {

    let [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/category')
            .then(response => response.data)
            .then(categoryList => setCategoryList(categoryList));
    }, []);

    return (
        <ul className="category-navbar__category-list">
            {categoryList.map((category, index) => <CategoryItem key={index} category={category}/>)}
        </ul>
    )
};

export default CategoryList;
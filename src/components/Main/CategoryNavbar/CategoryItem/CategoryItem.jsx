import React from "react";

import styles from './CategoryItem.module.css';

const CategoryItem = (props) => {
    return (
        <li className={styles.CategoryItem}>
            <a href = {`/category/${props.id}`}>{props.category}</a>
        </li>
    )
};

export default CategoryItem;
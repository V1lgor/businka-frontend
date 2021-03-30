import React from 'react';

import styles from './CategoryTable.module.css';
import CategoryRow from "./CategoryRow/CategoryRow";


const CategoryTable = (props) => {
    return (
        <table className={styles.CategoryTable}>
            <tbody>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Родительская категория</th>
            </tr>
            {props.categoryList.idList.map(categoryId => {
                const category = props.categoryList.byId[categoryId];
                return <CategoryRow key={categoryId} id={categoryId} name={category.name}
                                    parentCategory={category.parentCategory}
                                    onCategoryDelete={props.onCategoryDelete}/>
            })}
            </tbody>
        </table>
    );
};

export default CategoryTable;
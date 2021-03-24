import React from 'react';
import PropTypes from 'prop-types';

import styles from './CategoryRow.module.css';
import Button from "../../../UI/Button/Button";

const CategoryRow = (props) => {
    return (
        <tr className={styles.ProductRow}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.parentCategory ? props.parentCategory.name : "Отсутствует"}</td>
            <td><Button text={"Редактировать"}/></td>
            <td><Button text={"Удалить"} onClick={() => props.onCategoryDelete(props.id)}/></td>
        </tr>
    );
};

CategoryRow.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    parentCategory: PropTypes.object,
};

export default CategoryRow;
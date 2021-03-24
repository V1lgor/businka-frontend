import React from 'react';

import styles from './CategoryDeleteWarning.module.css';
import Button from "../../UI/Button/Button";
import PropTypes from "prop-types";

const CategoryDeleteWarning = (props) => {
    return (
        <div className={styles.CategoryDeleteWarning}>
            <p>Вы уверены, что хотите удалить категорию «{props.categoryName}»?</p>
            <div className={styles.Buttons}>
                <Button text={"Да"} onClick={props.onDeleteConfirm}/>
                <Button text={"Нет"} onClick={props.onDeleteCancel}/>
            </div>
        </div>
    );
};

CategoryDeleteWarning.propTypes = {
    categoryName: PropTypes.string.isRequired,
    onDeleteConfirm: PropTypes.func.isRequired,
    onDeleteCancel: PropTypes.func.isRequired
}

export default CategoryDeleteWarning;
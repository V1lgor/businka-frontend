import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductRow.module.css';
import Button from "../../../UI/Button/Button";

const ProductRow = (props) => {
    return (
        <tr className={styles.ProductRow}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.code}</td>
            <td>{props.price}</td>
            <td>{props.discount}</td>
            <td>{props.category}</td>
            <td>{props.visible ? "Да" : "Нет"}</td>
            <td>КАРТИНКА</td>
            <td><Button text={"Редактировать"}/></td>
            <td><Button text={"Удалить"}/></td>
        </tr>
    );
};

ProductRow.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
};

export default ProductRow;
import React from 'react';

import styles from './ProductTable.module.css';
import ProductRow from "./ProductRow/ProductRow";

const ProductTable = (props) => {
    console.log(props);
    return (
        <table className={styles.ProductTable}>
            <tbody>
            <tr>
                <th>ID</th>
                <th>Наименование</th>
                <th>Артикул</th>
                <th>Цена</th>
                <th>Скидка</th>
                <th>Категория</th>
                <th>Видимость в каталоге</th>
                <th>Изображение</th>
            </tr>
            {props.productList.idList.map(productId => {
                const product = props.productList.products[productId];
                return <ProductRow key={productId} id={product.id} name={product.name} code={product.code}
                                                          price={product.price} discount={product.discount}
                                                          category={product.category} visible={!product.hidden}/>
            })}
            </tbody>
        </table>
    );
};

export default ProductTable;
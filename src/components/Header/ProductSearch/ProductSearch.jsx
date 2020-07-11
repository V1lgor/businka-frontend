import React from 'react';

import styles from './ProductSearch.module.css';

const ProductSearch = () => {
    return (
        <form className={styles.ProductSearch}>
            <input type="text" placeholder={"Поиск товаров"} className={styles.Input}/>
        </form>
    )
};

export default ProductSearch;
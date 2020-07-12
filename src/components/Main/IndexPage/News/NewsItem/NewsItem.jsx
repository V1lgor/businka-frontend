import React from "react";

import styles from './NewsItem.module.css';

const NewsItem = () => {
    return (
        <div className={styles.NewsItem}>
            <h4 className={styles.Title}>Какой-то заголовок</h4>
            <p className={styles.AddDate}>Дата: 12.07.2020 19:16</p>
            <p className={styles.TextPreview}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iusto, ut. Accusamus aliquam amet
                animi assumenda at aut beatae consectetur consequatur cupiditate, deleniti dignissimos dolor dolorem
                eius eveniet excepturi expedita fugit hic id illo ipsum itaque iure labore mollitia obcaecati officiis
                perferendis quas qui quod reiciendis similique unde vel voluptas?
            </p>
            <a href="/" className="btn">Читать подробнее</a>
        </div>
    )
};

export default NewsItem;
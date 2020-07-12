import React from 'react';

import styles from './News.module.css';
import NewsItem from "./NewsItem/NewsItem";

const News = () => {
    return (
        <section className={styles.News}>
            <h3>Новости сайта</h3>
            <NewsItem/>
            <NewsItem/>
        </section>
    );
};

export default News;
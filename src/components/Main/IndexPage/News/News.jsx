import React from 'react';

import NewsItem from "./NewsItem";

const News = () => {
    return (
        <section className="news">
            <h3 className="news__title">Новости сайта</h3>
            <NewsItem/>
            <NewsItem/>
        </section>
    );
};

export default News;
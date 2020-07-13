import React from 'react';

import NewsItem from "./NewsItem";

const News = (props) => {
    return (
        <section className="news">
            <h3 className="news__title">Новости сайта</h3>
            {props.newsList.map(newsItem => {
                return <NewsItem key={newsItem.id}
                                 id={newsItem.id}
                                 title={newsItem.title}
                                 date={newsItem.date}
                                 text={newsItem.text}/>
            })}
        </section>
    );
};

export default News;
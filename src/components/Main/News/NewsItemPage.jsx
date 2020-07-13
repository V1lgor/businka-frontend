import React from 'react';

const NewsItemPage = (props) => {
    return (
        <div className="page-content">
            <h2 className="page-content__page-title">{props.title}</h2>
            <p className="news-item__add-date">Дата: {props.date}</p>
            <p>{props.text}</p>
        </div>
    )
};

export default NewsItemPage;
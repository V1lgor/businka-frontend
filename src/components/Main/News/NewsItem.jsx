import React from "react";
import {NavLink} from "react-router-dom";

const NewsItem = (props) => {
    return (
        <div className="news-item">
            <h4 className="news-item__title">{props.title}</h4>
            <p className="news-item__add-date">Дата: {props.date}</p>
            <p className="news-item__preview">
                {props.text}
            </p>
            <NavLink to={`/news/${props.id}`} className="btn">
                Читать подробнее
            </NavLink>
        </div>
    )
};

export default NewsItem;
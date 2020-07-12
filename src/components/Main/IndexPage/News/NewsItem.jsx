import React from "react";

const NewsItem = () => {
    return (
        <div className="news-item">
            <h4 className="news-item__title">Какой-то заголовок</h4>
            <p className="news-item__add-date">Дата: 12.07.2020 19:16</p>
            <p className="news-item__preview">
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
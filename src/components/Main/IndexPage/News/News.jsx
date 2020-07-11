import React from 'react';

import styles from './News.module.css';

const News = () => {
    return (
        <section className={styles.News}>
            <h3>Новости сайта</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, assumenda at aut, deserunt explicabo
                ipsum itaque iusto laudantium nesciunt nulla possimus quae, repellat rerum sapiente sequi tempore ullam
                veniam voluptatibus.
            </p>
        </section>
    );
};

export default News;
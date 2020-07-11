import React from "react";

import styles from './IndexPage.module.css';
import News from "./News/News";

const IndexPage = () => {
    return (
        <div className={styles.IndexPage}>
            <h2 className={styles.PageTitle}>Добро пожаловать в интернет-магазин товаров для рукоделия "Бусинка"!</h2>
            <div className={styles.PageContent}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam asperiores
                assumenda, dolor dolore fuga fugiat illum in magnam molestiae necessitatibus praesentium quas quis
                repellat soluta tempore vel veritatis?
            </div>
            <News/>
        </div>
    )
};
export default IndexPage;
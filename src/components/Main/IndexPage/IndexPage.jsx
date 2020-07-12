import React from "react";

import News from "./News/News";

const IndexPage = () => {
    document.title = "Бусинка - магазин товаров для рукоделия";
    return (
        <div className="page-content">
            <h2 className="page-content__page-title">Добро пожаловать в интернет-магазин товаров для рукоделия "Бусинка"!</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aperiam asperiores
                assumenda, dolor dolore fuga fugiat illum in magnam molestiae necessitatibus praesentium quas quis
                repellat soluta tempore vel veritatis?
            </p>
            <News/>
        </div>
    )
};
export default IndexPage;
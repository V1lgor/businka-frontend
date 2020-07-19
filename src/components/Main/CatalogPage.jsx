import React from 'react';
import CatalogContainer from "./CatalogContainer";

const CatalogPage = () => {
  document.title = "Каталог товаров";
  return (
      <div className="page-content">
          <h2 className="page-content__page-title">Каталог товаров</h2>
          <CatalogContainer/>
      </div>
  )
};

export default CatalogPage;
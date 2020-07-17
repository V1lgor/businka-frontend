import React from 'react';
import ProductListContainer from "./ProductList/ProductListContainer";

const CatalogPage = () => {
  document.title = "Каталог товаров";
  return (
      <div className="page-content">
          <h2 className="page-content__page-title">Каталог товаров</h2>
          <ProductListContainer/>
      </div>
  )
};

export default CatalogPage;
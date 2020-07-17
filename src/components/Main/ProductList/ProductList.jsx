import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
    console.log(props);
    return (
        <div className="product-list">
            {props.productList.map(product => {
                return <ProductCard id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    code={product.code}/>
            })}
        </div>
    )
};

export default ProductList;
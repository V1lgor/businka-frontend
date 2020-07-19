import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
    console.log(props);
    return (
        <div className="product-list">
            {props.productList.map(product => {
                return <ProductCard id={product.id}
                                    imageURL={product.imageURL}
                                    name={product.name}
                                    price={product.price}
                                    code={product.code}
                                    key={product.id}/>
            })}
        </div>
    )
};

export default ProductList;
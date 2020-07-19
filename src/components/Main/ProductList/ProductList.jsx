import React from "react";
import ProductCard from "./ProductCard";
import PaginationControls from "../News/PaginationControls/PaginationControls";

const ProductList = (props) => {
    console.log(props);
    return (
        <React.Fragment>
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
            <PaginationControls pageCount={props.pageCount} currentPage={props.currentPage}
                                onItemClick={props.onPaginationClick}/>
        </React.Fragment>
    )
};

export default ProductList;
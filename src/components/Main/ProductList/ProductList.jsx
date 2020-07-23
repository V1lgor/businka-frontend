import React from "react";
import ProductCard from "./ProductCard";
import PaginationControls from "../../common/PaginationControls/PaginationControls";

const ProductList = (props) => {
    return (
        <React.Fragment>
            <div className="product-list">
                {props.productList.length === 0
                    ? "Увы, товаров нет :("
                    : props.productList.map(product => {
                        return <ProductCard id={product.id}
                                            imageURL={product.imageURL}
                                            name={product.name}
                                            price={product.price}
                                            code={product.code}
                                            key={product.id}
                                            count={product.count}
                                            discount={product.discount}
                                            handleAddToCart={() => props.addProductToCart(product)}
                                            handleRemoveFromCart={() => props.removeProductFromCart(product.id)}/>
                    })}
            </div>
            <PaginationControls pageCount={props.pageCount} currentPage={props.currentPage}
                                onItemClick={props.onPaginationClick}/>
        </React.Fragment>
    )
};

export default ProductList;
import React from "react";

const DiscountLabel = (props) => {
    return (
        <div className="product-item__discount">
            -{props.discount}%
        </div>
    )
};

export default DiscountLabel;
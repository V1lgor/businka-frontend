import React from "react";

const PaginationControlItem = (props) => {
    return (
        <span className={`pagination-controls__item` + (props.active ? " active" : "")}
              onClick={props.onClick}>
            <span className="pagination-controls__item-text">{props.pageNumber}</span>
        </span>
    )
};

export default PaginationControlItem;
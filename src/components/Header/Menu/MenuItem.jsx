import React from "react";

const MenuItem = ({title, href}) => {
    return (
        <li className="header__menu-item">
            <a href={href}>{title}</a>
        </li>
    )
};

export default MenuItem;
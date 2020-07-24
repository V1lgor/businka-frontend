import React from "react";
import {NavLink} from "react-router-dom";

const MenuItem = ({title, href}) => {
    return (
        <li className="header__menu-item">
            <NavLink to={href} className="header__link">{title}</NavLink>
        </li>
    )
};

export default MenuItem;
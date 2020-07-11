import React from "react";

import styles from './MenuItem.module.css';

const MenuItem = ({title, href}) => {
    return (
        <li className={styles.MenuItem}>
            <a href={href}>{title}</a>
        </li>
    )
};

export default MenuItem;
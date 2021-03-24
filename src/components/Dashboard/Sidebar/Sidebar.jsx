import React from 'react';

import styles from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {
    return (
        <div className={styles.Sidebar}>
            <ul className={styles.Menu}>
                <li className={styles.MenuItem}><NavLink to={"/dashboard/category"}>Категории товаров</NavLink></li>
                <li className={styles.MenuItem}><NavLink to={"/dashboard/product"}>Товары</NavLink></li>
                <li className={styles.MenuItem}><NavLink to={"/dashboard/order"}>Заказы</NavLink></li>
            </ul>
        </div>
    );
};

export default Sidebar;
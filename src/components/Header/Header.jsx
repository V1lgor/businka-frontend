import React from 'react';

import styles from './Header.module.css';
import Logo from "./Logo/Logo";
import ProductSearch from "./ProductSearch/ProductSearch";
import Contacts from "./Contacts/Contacts";
import Menu from "./Menu/Menu";
import Slider from "./Slider/Slider";

const Header = () => {
    return (
        <header className={styles.Header}>
            <Logo/>

            <ProductSearch/>

            <Contacts/>

            <Menu/>

            <Slider/>
        </header>
    );
};

export default Header;
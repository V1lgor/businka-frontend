import React from 'react';

import Logo from "./Logo";
import ProductSearch from "./ProductSearch";
import Contacts from "./Contacts";
import Menu from "./Menu/Menu";

const Header = () => {
    return (
        <header className="header">
            <Logo/>

            <ProductSearch/>

            <Contacts/>

            <Menu/>
        </header>
    );
};

export default Header;
import React from 'react';

import Logo from "./Logo";
import ProductSearch from "./ProductSearch";
import Contacts from "./Contacts";
import Menu from "./Menu/Menu";

const Header = (props) => {
    return (
        <header className="header">
            <Logo/>

            <ProductSearch/>

            <Contacts/>

            <Menu menuItemList = {props.state.menuItemList}/>
        </header>
    );
};

export default Header;
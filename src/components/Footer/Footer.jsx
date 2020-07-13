import React from 'react';

import Menu from "./Menu";
import Contacts from "./Contacts";
import SocialLinks from "../common/SocialLinks";

const Footer = (props) => {
    return (
        <footer className="footer">
            <Menu menuItemList = {props.state.menuItemList}/>
            <Contacts/>
            <div className="footer-social">
                <h3 className="footer-social__title">Социальные сети</h3>
                <SocialLinks/>
            </div>
        </footer>
    )
};

export default Footer;
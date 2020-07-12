import React from 'react';

import styles from './Footer.module.css';
import Menu from "./Menu/Menu";
import Contacts from "./Contacts/Contacts";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <Menu/>
            <Contacts/>
            <div className={styles.Social}>
                <h3>Социальные сети</h3>
                <div className={"social-icon " + styles.Ok}/>
                <div className={"social-icon " + styles.Vk}/>
                <div className={"social-icon " + styles.Instagram}/>
            </div>
        </footer>
    )
};

export default Footer;
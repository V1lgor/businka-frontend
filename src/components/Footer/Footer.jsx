import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <ul>
                <li>Главная</li>
                <li>Каталог</li>
                <li>Новости</li>
                <li>Оплата и доставка</li>
                <li>О нас</li>
            </ul>
        </footer>
    )
};

export default Footer;
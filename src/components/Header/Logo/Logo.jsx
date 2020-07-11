import React from 'react';

import styles from './Logo.module.css';

const Logo = () => {
    return (
        <h1 className={styles.Logo}>
            <p>Бусинка</p>
            <p className={styles.LogoCaption}>Товары для рукоделия</p>
        </h1>
    );
};

export default Logo;
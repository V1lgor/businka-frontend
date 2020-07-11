import React from 'react';

import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={styles.Contacts}>
            <div>Адрес: г. Энгельс, ул. Степная, д. 128 (ТЦ "Мегаполис")</div>
            <div>
                Телефоны: +7-929-776-44-49, +7-927-124-48-17
            </div>
            <div className={styles.Social}>
                <div className={"social-icon " + styles.Ok}/>
                <div className={"social-icon " + styles.Vk}/>
                <div className={"social-icon " + styles.Instagram}/>
            </div>
        </div>
    );
};

export default Contacts;
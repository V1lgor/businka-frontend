import React from "react";

import styles from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={styles.Contacts}>
            <h3>Контакты</h3>
            <p>Адрес: г. Энгельс, ул. Степная, д. 128 (ТЦ "Мегаполис")</p>
            <p>Телефоны: +7-929-776-44-49, +7-927-124-48-17</p>
        </div>
    )
};

export default Contacts;
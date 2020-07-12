import React from 'react';
import SocialLinks from "../common/SocialLinks";

const Contacts = () => {
    return (
        <div className="contacts">
            <div>Адрес: г. Энгельс, ул. Степная, д. 128 (ТЦ "Мегаполис")</div>
            <div>
                Телефоны: +7-929-776-44-49, +7-927-124-48-17
            </div>
            <SocialLinks className = "header__social-links"/>
        </div>
    );
};

export default Contacts;
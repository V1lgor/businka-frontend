import React from "react";

import socialNetworksSprite from '../../img/social-networks-icons.svg';

const SocialLinks = (props) => {
    return (
        <div className={`social-links${props.className ? " " + props.className : ""}`}>
            <a className="social-links__social-icon-container social-links__social-icon_ok"
                href="https://ok.ru/bantydlyad">
                <svg className="social-links__social-icon">
                    <use href={socialNetworksSprite + "#odnoklassniki-logo"}/>
                </svg>
            </a>
            <a className="social-links__social-icon-container social-links__social-icon_vk"
                href="https://vk.com/vserukodeliekanzashi">
                <svg className="social-links__social-icon">
                    <use href={socialNetworksSprite + "#vk-logo"}/>
                </svg>
            </a>
            <a className="social-links__social-icon-container social-links__social-icon_instagram"
                href="https://www.instagram.com/mariiagak/">
                <svg className="social-links__social-icon">
                    <use href={socialNetworksSprite + "#instagram-logo"}/>
                </svg>
            </a>
        </div>
    )
};

export default SocialLinks;
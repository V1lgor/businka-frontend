import React from "react";

const SocialLinks = (props) => {
    return (
        <div className={`social-links${props.className ? " " + props.className : ""}`}>
            <div className="social-links__social-icon social-links__social-icon_ok"/>
            <div className="social-links__social-icon social-links__social-icon_vk"/>
            <div className="social-links__social-icon social-links__social-icon_instagram"/>
        </div>
    )
};

export default SocialLinks;
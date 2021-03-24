import React, {useEffect, useState} from 'react';

import styles from './PopUpNotification.module.css';
import PropTypes from "prop-types";
import {CSSTransition} from "react-transition-group";

const PopUpNotification = (props) => {

    const classList = [styles.Notification];

    switch (props.type) {
        case "success": {
            classList.push(styles.Success);
            break;
        }
        case "error": {
            classList.push(styles.Error);
            break;
        }
        case "normal": {
            classList.push(styles.Normal);
            break;
        }
        default: {
            classList.push(styles.Normal);
            break;
        }

    }

    useEffect(() => {
        return () => {
            console.log("UNMOUNTING");
        }
    }, [])

    return (
        <CSSTransition in={props.visible} timeout={500} appear unmountOnExit classNames={"fade"} onExit={() => console.log("exited")}>
            <div className={classList.join(' ')}>
                {props.text}
            </div>
        </CSSTransition>
    );
};

PopUpNotification.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string
};

export default PopUpNotification;
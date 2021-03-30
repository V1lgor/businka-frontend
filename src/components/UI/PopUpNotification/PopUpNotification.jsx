import React, {useEffect, useState} from 'react';

import styles from './PopUpNotification.module.css';
import PropTypes from "prop-types";
import {CSSTransition} from "react-transition-group";

const PopUpNotification = (props) => {

    const cssClassList = [styles.Notification];

    switch (props.type) {
        case "success": {
            cssClassList.push(styles.Success);
            break;
        }
        case "error": {
            cssClassList.push(styles.Error);
            break;
        }
        case "normal": {
            cssClassList.push(styles.Normal);
            break;
        }
        default: {
            cssClassList.push(styles.Normal);
            break;
        }
    }

    return (
        <CSSTransition in={props.isVisible} timeout={500} appear unmountOnExit classNames={"fade"}>
            <div className={cssClassList.join(' ')}>
                {props.text}
            </div>
        </CSSTransition>
    );
};

PopUpNotification.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    isVisible: PropTypes.bool
};

export default PopUpNotification;
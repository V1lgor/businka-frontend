import React from 'react';

import styles from './Backdrop.module.css';
import PropTypes from "prop-types";

const Backdrop = (props) => {
    return (
        <div className={styles.Backdrop} onClick={props.onClick}>
            {props.children}
        </div>
    )
};

Backdrop.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Backdrop;
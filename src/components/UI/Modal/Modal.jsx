import React from 'react';

import styles from './Modal.module.css';
import Backdrop from "../Backdrop/Backdrop";
import PropTypes from "prop-types";

const Modal = (props) => (
    <React.Fragment>
        <Backdrop onClick={props.onBackdropClick}/>
        <div style={{width: props.width ? props.width : "50%"}} className={styles.Modal}>
            {props.children}
        </div>
    </React.Fragment>
);

Modal.propTypes = {
    onBackdropClick: PropTypes.func.isRequired,
    width: PropTypes.string
}

export default Modal;
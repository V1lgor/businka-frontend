import React from 'react';
import {connect} from "react-redux";

import styles from './NotificationContainer.module.css';

import PopUpNotification from "../../components/UI/PopUpNotification/PopUpNotification";


const NotificationContainer = (props) => {
    return (
        <div className={styles.NotificationContainer}>
            {props.notificationQueue.map(notification => <PopUpNotification key={notification.id}
                                                                            text={notification.text}
                                                                            type={notification.type}
                                                                            isVisible={notification.isVisible}/>)}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        notificationQueue: state.notificationReducer.notificationQueue
    }
};

export default connect(mapStateToProps, null)(NotificationContainer);
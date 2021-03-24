import React from 'react';

import styles from './NotificationContainer.module.css';
import PopUpNotification from "../../components/UI/PopUpNotification/PopUpNotification";
import {connect} from "react-redux";

const NotificationContainer = (props) => {
    return (
        <div className={styles.NotificationContainer}>
            {props.notificationList.map(notification => <PopUpNotification key={notification.id}
                                                                           text={notification.text}
                                                                           type={notification.type}
            visible={notification.visible}/>)}
        </div>
    );
};

const mapStateToProps = (state) => {
  return {
    notificationList: state.notificationReducer.notificationList
  }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
import * as actionTypes from './actionTypes';

export const pushNotification = (text, notificationType) => {
    return {
        type: actionTypes.PUSH_NOTIFICATION,
        text,
        notificationType
    };
};

export const popNotification = () => {
    return {
        type: actionTypes.POP_NOTIFICATION
    }
}

const hideFirstNotification = () => {
    return {
        type: actionTypes.HIDE_FIRST_NOTIFICATION
    }
}

export const pushNotificationWithTimeout = (text, notificationType) => {
    return (dispatch) => {
        dispatch(pushNotification(text, notificationType));
        setTimeout(() => {
            dispatch(hideFirstNotification())
            setTimeout(() => dispatch(popNotification()), 500)
        }, 2500)
    };
};
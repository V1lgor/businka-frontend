import * as actionTypes from './../actions/actionTypes';

import produce from "immer";

let currentId = 0;

const initialState = {
    notificationQueue: []
};

const notificationReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.PUSH_NOTIFICATION_TO_QUEUE: {
            return produce(state, (draftState) => {
                draftState.notificationQueue.push({
                    text: action.text,
                    type: action.notificationType,
                    id: currentId++,
                    isVisible: true
                })
            });
        }
        case actionTypes.POP_NOTIFICATION_FROM_QUEUE: {
            return produce(state, (draftState) => {
                draftState.notificationQueue.shift();
            });
        }
        case actionTypes.HIDE_FIRST_NOTIFICATION: {
            return produce(state, (draftState) => {
                for (let notification of draftState.notificationQueue) {
                    if (notification.isVisible) {
                        notification.isVisible = false;
                        break;
                    }
                }
            });
        }
        default: {
            return state;
        }
    }
};

export default notificationReducer;
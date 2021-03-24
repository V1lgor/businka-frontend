import * as actionTypes from './../actions/actionTypes';

import produce from "immer";

let currentId = 0;

const initialState = {
    notificationList: []
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PUSH_NOTIFICATION: {
            return produce(state, (draftState) => {
                draftState.notificationList.push({
                    text: action.text,
                    type: action.notificationType,
                    id: currentId++,
                    visible: true
                })
            });
        }
        case actionTypes.POP_NOTIFICATION: {
            return produce(state, (draftState) => {
                draftState.notificationList.shift();
            });
        }
        case actionTypes.HIDE_FIRST_NOTIFICATION: {
            return produce(state, (draftState) => {
                for (let notification of draftState.notificationList) {
                    if (notification.visible) {
                        notification.visible = false;
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
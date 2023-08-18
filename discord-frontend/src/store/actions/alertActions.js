const alertActions = {
    OPEN_ALERT_MESSAGE: "AUTH.OPEN_ALERT_MESSAGE",
    CLOSE_ALERT_MESSAGE: "AUTH.CLOSE_ALERT_MESSAGE",
}

export const getActions = (dispatch) => {
    return {
        openAlertMessage: (content) => dispatch(openAlertMessage(content)),
        closeAlertMessage: (content) => dispatch(closeAlertMessage()),

    }
}

export const openAlertMessage = (content) => {
    return {
        type: alertActions.OPEN_ALERT_MESSAGE,
        content,
    }
}

export const closeAlertMessage = () => {
    return {
        type: alertActions.CLOSE_ALERT_MESSAGE,
    }
}

export default alertActions;
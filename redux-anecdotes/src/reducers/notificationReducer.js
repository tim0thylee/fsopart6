let timeOut;

const reducer = (state = 'What you vote for will show here.', action) => {
    switch(action.type) {
        case 'SHOW_NOTIFICATION':
            return action.notification
        case 'REMOVE_NOTIFICATION':
            return null
        default:
            return state 
    }
}

export const updateNotification = notification => {
    return {
        type: 'SHOW_NOTIFICATION',
        notification
    }
}

export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}

export const setNotification = (notification, time) => {
    return async dispatch => {
        clearTimeout(timeOut)
        dispatch({
            type: 'SHOW_NOTIFICATION',
            notification
        })
        timeOut = setTimeout(() => {
            dispatch({
                type: 'REMOVE_NOTIFICATION'
            })
        }, time * 1000)
    }
}

export default reducer



const reducer = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_VOTE_NOTIFICATION':
            return action.content
        case 'CREATE_NEW_ANECDOTE':
            return action.content
        case 'ZERO':
            return action.data
        default:
            return state
    }
}

export const getVoteNotification = (content, time) => {
    return async dispatch => {
        dispatch({
            type: 'SHOW_VOTE_NOTIFICATION',
            content
        })
        clearTimeout()
        setTimeout(() => {
            dispatch({type: 'ZERO', data: ''})
        }, time * 1000)
    }
}

export const newAnecdoteNotification = (content, time) => {
    return async dispatch => {
         dispatch({
            type: 'CREATE_NEW_ANECDOTE',
            content
        })
        clearTimeout()
        setTimeout(() => {
            dispatch({type: 'ZERO', data: ''})
        }, time * 1000)
    }
}


export default reducer

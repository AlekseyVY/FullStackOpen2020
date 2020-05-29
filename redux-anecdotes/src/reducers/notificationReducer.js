


const reducer = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_VOTE_NOTIFICATION':
            return state.concat('You voted for "' + action.data +'"')
        case 'CREATE_NEW_ANECDOTE':
            return state.concat('You added new anecdote: "' + action.data +'" to your list.')
        case 'ZERO':
            return ''
        default:
            return state
    }
}

export const getVoteNotification = (props) => {
    return {
        type: 'SHOW_VOTE_NOTIFICATION',
        data: props
    }
}

export const newAnecdoteNotification = (props) => {
    return {
        type: 'CREATE_NEW_ANECDOTE',
        data: props
    }
}

export const zero = () => {
    return {
        type: 'ZERO'
    }
}

export default reducer

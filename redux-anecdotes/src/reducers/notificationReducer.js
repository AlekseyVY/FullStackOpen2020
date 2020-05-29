


const reducer = (state = 'NOTIFICATION', action) => {
    switch (action.type) {
        case 'SHOW_VOTE_NOTIFICATION':
            return 'VOTE UP'
        default:
            return state
    }
}

export const getVoteNotification = {
    type: 'SHOW_VOTE_NOTIFICATION',
}

export default reducer

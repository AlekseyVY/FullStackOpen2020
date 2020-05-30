
const reducer = (state = [], action) => {
    switch (action.type) {
        case 'VOTE':
            const id = action.id
            const change = state.find(a => a.id === id)
            const changedVote = {
                ...change,
                votes: change.votes + 1
            }
            return state.map(a => a.id !== id ? a : changedVote)
        case 'ADD_NEW':
            return state.concat(action.data)
        case 'INIT':
            return action.data
        default:
            return state
    }
}

export const init = (data) => {
    return {
        type: 'INIT',
        data
    }
}

export const voteA = (id) => {
    return {
        type: 'VOTE',
        id: id
    }
}

export const addNewAnecdote = (data) => {
    return {
        type: 'ADD_NEW',
        data
    }
}

export default reducer

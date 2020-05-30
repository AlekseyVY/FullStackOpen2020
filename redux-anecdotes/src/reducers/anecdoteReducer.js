import anecdoteService from '../services/anecdotes'

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

export const init = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
            dispatch({
                type: 'INIT',
                data: anecdotes
            })
    }
}

export const voteA = (id) => {
    return {
        type: 'VOTE',
        id: id
    }
}

export const addNewAnecdote = (content) => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(content)
        console.log(newAnecdote)
        dispatch({
            type: 'ADD_NEW',
            data: newAnecdote
        })
    }
}

export default reducer

import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const object = {
        content: content,
        votes: 0
    }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const update = async (anecdote) => {
    const updatedAnecdote = {
        content: anecdote.content,
        id: anecdote.id,
        votes: anecdote.votes + 1
    }
    const request = await axios.put(`${baseUrl}/${updatedAnecdote.id}`, updatedAnecdote)
    console.log(request)
}

export default {getAll, createNew, update}

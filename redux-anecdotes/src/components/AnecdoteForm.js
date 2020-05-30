import {addNewAnecdote} from "../reducers/anecdoteReducer";
import React from "react";
import { useDispatch } from 'react-redux'
import {newAnecdoteNotification} from "../reducers/notificationReducer";
import anecdoteService from '../services/anecdotes'

const AnecdoteForum = () => {
    const dispatch = useDispatch()

    const addNew = async (event) => {
        event.preventDefault()
        const content = event.target.data.value
        event.target.data.value = ''
        const data = await anecdoteService.createNew(content)
        dispatch(addNewAnecdote(data))
        dispatch(newAnecdoteNotification(data))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addNew}>
                <div><input name={'data'}/></div>
                <button type={'submit'}>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForum

import {addNewAnecdote} from "../reducers/anecdoteReducer";
import React from "react";
import { useDispatch } from 'react-redux'
import {newAnecdoteNotification} from "../reducers/notificationReducer";

const AnecdoteForum = () => {
    const dispatch = useDispatch()

    const addNew = async (event) => {
        event.preventDefault()
        const content = event.target.data.value
        event.target.data.value = ''
        dispatch(addNewAnecdote(content))
        dispatch(newAnecdoteNotification(`You added new anecdote: ${content}`, 5))
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

import {addNewAnecdote} from "../reducers/anecdoteReducer";
import React from "react";
import { useDispatch } from 'react-redux'

const NoteForm = () => {
    const dispatch = useDispatch()

    const addNew = (event) => {
        event.preventDefault()
        const content = event.target.data.value
        event.target.data.value = ''
        dispatch(addNewAnecdote(content))
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

export default NoteForm

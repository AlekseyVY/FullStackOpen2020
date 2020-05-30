import {addNewAnecdote} from "../reducers/anecdoteReducer";
import React from "react";
import { connect } from 'react-redux'
import {newAnecdoteNotification} from "../reducers/notificationReducer";

const AnecdoteForum = (props) => {
    const addNew = async (event) => {
        event.preventDefault()
        const content = event.target.data.value
        event.target.data.value = ''
        props.addNewAnecdote(content)
        props.newAnecdoteNotification(`You added new anecdote: ${content}`, 5)
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

const mapDispatchToProps = {
    newAnecdoteNotification, addNewAnecdote
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForum)
export default ConnectedAnecdoteForm

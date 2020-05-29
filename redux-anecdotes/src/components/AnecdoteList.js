import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {voteA} from "../reducers/anecdoteReducer";
import {getVoteNotification, zero} from "../reducers/notificationReducer";



const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(voteA(anecdote.id))
        dispatch(getVoteNotification(anecdote.content))
    }


    const compare = (a, b) => {
        if(a.votes < b.votes){
            return 1
        } else if(a.votes > b.votes){
            return -1
        } else {
            return 0
        }
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.sort(compare).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)} >vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}


export default AnecdoteList

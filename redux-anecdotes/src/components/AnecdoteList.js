import React from 'react'
import {connect} from "react-redux";
import {voteA} from "../reducers/anecdoteReducer";
import {getVoteNotification} from "../reducers/notificationReducer";



const AnecdoteList = (props) => {

    const vote = (anecdote) => {
        props.voteA(anecdote)
        props.getVoteNotification(` You voted for ${anecdote.content}`, 10)
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
            {props.anecdotes.sort(compare)
                .filter(anecdote => {
                    if(anecdote.content.includes(props.filter)){
                        return anecdote
                    }
                })
                .map(anecdote =>
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

const mapStateToProps = state => {
    console.log(state)
    return {
        anecdotes: state.anecdotes,
        filter: state.filter
    }
}

const mapDispatchToProps = {
    voteA, getVoteNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList

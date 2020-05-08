import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from "./components/Button";


const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(new Uint8Array(props.anecdotes.length))

    let tmp = 0
    const handleEvent = () => {
        setSelected(Math.floor(Math.random() * props.anecdotes.length))
        for(let i = 0; i < vote.length; i++){
            if(vote[i] > tmp) {
                tmp = vote[i]
            }
        }
    }
    let copy = [...vote]
    const voteEvent = () => {
        copy = [vote[selected] += 1]
        setVote(vote)
    }

    for(let i = 0; i <= vote.length; i++){
        if(vote[i] > tmp) {
            tmp = i
        }
    }
    console.log(tmp)
    return(
        <div>
            <h1>
                Anecdote of the day
            </h1>
            {props.anecdotes[selected]}
            <p>
                has {vote[selected]} votes
            </p>
            <div>
                <Button clickEvent={voteEvent} text={'vote'}/>
                <Button clickEvent={handleEvent} text={'Random Anecdote'}/>
            </div>
            <h1>Anecdote with most votes</h1>
            <p>
                {props.anecdotes[tmp]}
            </p>
            <p>
                has {vote[tmp]} votes
            </p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'))

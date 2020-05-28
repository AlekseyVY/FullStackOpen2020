import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteA } from './reducers/anecdoteReducer'
import NoteForm from "./components/AnecdoteForm";

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
      dispatch(voteA(id))
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
                <button onClick={() => vote(anecdote.id)} >vote</button>
              </div>
            </div>
        )}
        <NoteForm />
      </div>
  )
}

export default App

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteA, addNewAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    //console.log('vote', id)
      dispatch(voteA(id))
  }

  const addNew = (event) => {
      event.preventDefault()
      const content = event.target.data.value
      event.target.data.value = ''
      dispatch(addNewAnecdote(content))
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
        <h2>create new</h2>
        <form onSubmit={addNew}>
          <div><input name={'data'}/></div>
          <button type={'submit'}>create</button>
        </form>
      </div>
  )
}

export default App

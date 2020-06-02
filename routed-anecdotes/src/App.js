import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link, useParams
} from 'react-router-dom'
import {useField} from "./hooks";

const Anecdote = ( {anecdotes} ) => {
    const id = useParams().id
    const anecdote = anecdotes.find(anecdote => anecdote.id === id)
    return (
        <div>
            <h1>Anecdote:</h1>
            <h2>{anecdote.content.value}</h2>
            <h2>Author: {anecdote.author.value}</h2>
            <h2>Url: {anecdote.info.value}</h2>
            <h2>Votes: {anecdote.votes}</h2>
        </div>
    )
}
const AnecdoteList = ({ anecdotes }) => (
    <div>
        {console.log(anecdotes)}
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map(anecdote => <li key={anecdote.id}><Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content.value}</Link></li>)}
      </ul>
    </div>
)

const About = () => (
    <div>
      <h2>About anecdote app</h2>
      <p>According to Wikipedia:</p>

      <em>An anecdote is a brief, revealing account of an individual person or an incident.
        Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
        such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
        An anecdote is "a story with a point."</em>

      <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
    </div>
)

const Footer = () => (
    <div>
      Anecdote app for <a href='https://courses.helsinki.fi/fi/tkt21009'>Full Stack -websovelluskehitys</a>.

      See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js</a> for the source code.
    </div>
)

const CreateNew = (props) => {
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')


  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content,
      author,
      info,
      votes: 0
    })
  }

  const handleReset = () => {
        return (
            content.zero(),
                author.zero(),
                info.zero()
        )
  }

  return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input {...content}/>
          </div>
          <div>
            author
            <input {...author}/>
          </div>
          <div>
            url for more info
            <input {...info}/>
          </div>
          <button type={'submit'}>Create</button>
            <button type={'reset'} onClick={handleReset}>Reset</button>
        </form>
      </div>
  )

}

const App = () => {
  const [anecdotes, setAnecdotes] = useState([])

    const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
      console.log(anecdote)
      setNotification(`${anecdote.content.value} by ${anecdote.author.value} has been added!`)
      setTimeout(() => {
          setNotification('')
      }, 10000)
  }

  const anecdoteById = (id) =>
      anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1,
        color: 'red'
    }

  return (
      <div>
          <div style={style}>
          {notification === '' ? 'Nothing New' : notification}
          </div>
          <Router>
              <Link to={'/'} >Anecdotes</Link>
              <Link to={'/create'} >Create new</Link>
              <Link to={'/about'} >About</Link>
              <Switch>
                  <Route path={'/anecdotes/:id'}>
                      <Anecdote anecdotes={anecdotes}/>
                  </Route>
                  <Route path={'/create'}>
                      <CreateNew addNew={addNew} />
                  </Route>
                  <Route path={'/about'}>
                      <About />
                  </Route>
                  <Route path={'/'}>
                      <h1>Software anecdotes</h1>
                      <AnecdoteList anecdotes={anecdotes} />
                  </Route>
              </Switch>
          </Router>
        <Footer />
      </div>
  )
}

export default App;

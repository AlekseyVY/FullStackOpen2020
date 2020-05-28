import React from 'react'
import AnecdoteForum from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";



const App = () => {
    return (
        <div>
            <h2>Anecdotes</h2>
            <AnecdoteForum />
            <AnecdoteList />
        </div>
    )
}

export default App

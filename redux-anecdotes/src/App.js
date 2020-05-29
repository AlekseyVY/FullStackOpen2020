import React from 'react'
import AnecdoteForum from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";



const App = () => {
    return (
        <div>
            <Notification />
            <h2>Anecdotes</h2>
            <AnecdoteForum />
            <AnecdoteList />
        </div>
    )
}

export default App

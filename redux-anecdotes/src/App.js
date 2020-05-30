import React, {useEffect} from 'react'
import AnecdoteForum from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import FilterForm from "./components/FilterForm";
import {useDispatch} from "react-redux";
import anecdoteService from './services/anecdotes'
import {init} from './reducers/anecdoteReducer'



const App = () => {
    const dispatch = useDispatch()
    const anecdotes = anecdoteService.getAll()

    useEffect(() => {
        anecdotes.then(anecdote => dispatch(init(anecdote)))
    }, [dispatch])

    return (
        <div>
            <Notification />
            <h2>Anecdotes</h2>
            <FilterForm />
            <AnecdoteForum />
            <AnecdoteList />
        </div>
    )
}

export default App

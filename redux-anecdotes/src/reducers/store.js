import {createStore, combineReducers } from "redux";
import anecdoteReducer from "./anecdoteReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './notificationReducer'
import filterReducer from './filterReducer'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer
})
const store = createStore(reducer, composeWithDevTools())


export default store

import {createStore, combineReducers } from "redux";
import anecdoteReducer from "./anecdoteReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './notificationReducer'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer
})
const store = createStore(reducer, composeWithDevTools())


export default store

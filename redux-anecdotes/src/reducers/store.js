import {createStore, combineReducers, applyMiddleware} from "redux";
import anecdoteReducer from "./anecdoteReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './notificationReducer'
import filterReducer from './filterReducer'
import thunk from "redux-thunk";

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer
})
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
))


export default store

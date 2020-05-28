import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from "redux";
import noteReducer from "./reducers/noteReducer";
import App from './App'
import { Provider } from 'react-redux'

const store = createStore(noteReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))



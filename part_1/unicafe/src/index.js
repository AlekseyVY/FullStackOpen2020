import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Display from './components/display'
import Button from './components/Button'
import reducer from './reducers/reducer'
import {createStore} from "redux";

const store = createStore(reducer)

const App = () => {
    const goodClick = () => {
        store.dispatch({
            type: 'GOOD'
        })
    }
    const neutralClick = () => {
        store.dispatch({
            type: 'OK'
        })
    }
    const badClick = () => {
        store.dispatch({
            type: 'BAD'
        })
    }

    const zero = () => {
        store.dispatch({
            type: 'ZERO'
        })
    }

    return(
        <>
            <h1>give feedback</h1>
            <div>
            <Button clickHandler={goodClick} text={'good'}/>
            <Button clickHandler={neutralClick} text={'neutral'}/>
            <Button clickHandler={badClick} text={'bad'}/>
            <Button clickHandler={zero} text={'zero'}/>
            </div>
            <Display good={store.getState().good} neutral={store.getState().ok} bad={store.getState().bad}/>
        </>
    )
}

const renderApp = () => {ReactDOM.render(<App />, document.getElementById('root'))}

renderApp()
store.subscribe(renderApp)

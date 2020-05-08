import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Display from './components/display'
import Button from './components/Button'




const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral ] = useState(0)
    const [ bad, setBad ] = useState(0)

    const goodClick = () => setGood(good + 1)
    const neutralClick = () => setNeutral(neutral + 1)
    const badClick = () => setBad(bad + 1)

    return(
        <>
            <h1>give feedback</h1>
            <div>
            <Button clickHandler={goodClick} text={'good'}/>
            <Button clickHandler={neutralClick} text={'neutral'}/>
            <Button clickHandler={badClick} text={'bad'}/>
            </div>
            <Display good={good} neutral={neutral} bad={bad}/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

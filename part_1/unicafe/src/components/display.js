import React from 'react'



const Display = ({good, neutral, bad}) => {
    const all = good + neutral + bad

    return (
        <div>
            <h1>
                statistics
            </h1>
            <p>
                good {good}
            </p>
            <p>
                neutral {neutral}
            </p>
            <p>
                bad {bad}
            </p>
            <p>
                all {all}
            </p>
            <p>
                average {(good - bad) / all}
            </p>
            <p>
                positive {(good / all) * 100}
            </p>
        </div>
    )
}


export default Display;

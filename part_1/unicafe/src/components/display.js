import React from 'react'
import Statistic from "./statistic";


const Display = ({good, neutral, bad}) => {
    const all = good + neutral + bad
    if(good === 0 && neutral === 0 && bad === 0) {
        return(
            <>
                <p>
                    No feedback given
                </p>
            </>
        )
    }
    return (
        <>
            <table>
            <td>
                <h1>statistics</h1>
                <tr>
                    <Statistic score={good} text={'good'}/>
                </tr>
                <tr>
                    <Statistic score={neutral} text={'neutral'}/>
                </tr>
                <tr>
                    <Statistic score={bad} text={'bad'}/>
                </tr>
                <tr>
                    <Statistic score={all} text={'all'}/>
                </tr>
                <tr>
                    <Statistic score={(good - bad) / all} text={'average'}/>
                </tr>
                <tr>
                    <Statistic score={(good / all) * 100} text={'positive'}/>
                </tr>
            </td>
            </table>
        </>
    )
}


export default Display;

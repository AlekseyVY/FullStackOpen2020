import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {

    return (
        <>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </>
    )
}



const App = () => {

    return (
    <>
        <h1>Greetings</h1>
        <Hello name={'Aleksey'} age={38}/>
        <Hello name={'Kirill'} age={8}/>
        <Hello name={'Otez'} age={60}/>
    </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

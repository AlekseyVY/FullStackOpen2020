import React from "react";



const Button = ({clickEvent, text}) => {

    return(
        <>
            <button onClick={clickEvent}>{text}</button>
        </>
    )
}


export default Button;

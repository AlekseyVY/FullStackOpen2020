import React from "react";


const Button = ({id, handleDelete, name}) => {


    return (
        <>
            <button onClick={() => handleDelete(id, name)}>delete</button>
        </>
    )
}


export default Button

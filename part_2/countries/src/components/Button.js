import React from "react";



const Button = ({name, handleShow}) => {



    return(
        <>
            <button onClick={() => handleShow(name)}>
                show
            </button>
        </>
    )
}

export default Button

import React from "react";


const Numbers = (props) => {
    return(
        <>
            <h2>
                Numbers
            </h2>
            {props.filtered.map(person => <p>{person.name} {person.phone}</p>)}
        </>
    )
}


export default Numbers

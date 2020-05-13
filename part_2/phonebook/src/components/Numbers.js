import React from "react";


const Numbers = (props) => {
    return(
        <>
            <h2>
                Numbers
            </h2>
            {props.filtered.map((person, i) => <p key={i}>{person.name} {person.number}</p>)}
        </>
    )
}


export default Numbers

import React from "react";
import Button from "./Button";


const Numbers = (props) => {
    return(
        <>
            <h2>
                Numbers
            </h2>
            {props.filtered.map((person, i) => <p key={i}>{person.name} {person.number} <Button id={person.id} handleDelete={props.handleDelete} name={person.name}/></p>)}
        </>
    )
}


export default Numbers

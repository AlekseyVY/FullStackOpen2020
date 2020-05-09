import React from "react";

const Filt = ({persons, search}) => {
    const filt = persons.filter(x => {
        if(x.name.includes(search)){
            return x.name
        }
    })
    console.log(filt)
    return(
        <div>
            {filt.map(person => <p>{person.name} {person.phone}</p>)}
        </div>
    )
}

export default Filt

import React from "react";
import Part from "./Part";



const Content = ({part}) => {
    return(
        <div>
            {part.map(x => <p key={x.id}>{<Part part={x}/>}</p>)}
        </div>
    )
}


export default Content

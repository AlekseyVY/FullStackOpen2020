import React from "react";

const Filter = (props) => {

    

    return(
        <>
            filter shown with: <input value={props.search} onChange={props.handleSearchFilter}/>
        </>
    )
}

export default Filter

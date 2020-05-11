import React from "react";



const Filter = (props) => {
    return(
        <>
            <form>
                find countries <input value={props.search} onChange={props.handleSearch}/>
            </form>
        </>
    )
}


export default Filter

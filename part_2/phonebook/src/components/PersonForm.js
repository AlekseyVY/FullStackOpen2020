import React from "react";



const PersonForm = (props) => {

    return(
        <>
            <h2>
                add a new
            </h2>
            <form onSubmit={props.handleInputEvent}>
                <div>
                    name: <input value={props.newName} onChange={props.handleChange}/>
                </div>
                <div>
                    phone: <input value={props.newPhone} onChange={props.handlePhoneChange}/>
                </div>
                <button type={"submit"}>add</button>
            </form>
        </>
    )
}


export default PersonForm

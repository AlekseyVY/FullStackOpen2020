import React from 'react'
import {filterAction} from '../reducers/filterReducer'
import {connect} from "react-redux";


const FilterForm = (props) => {
    const handleChange = (event) => {
        props.filterAction(event.target.value)
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter: <input onChange={handleChange}/>
        </div>
    )
}


const ConnectedFilterForm = connect(null, {filterAction})(FilterForm)
export default ConnectedFilterForm

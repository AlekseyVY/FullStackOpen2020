import React from "react";
import Country from "./Country";
import Button from "./Button";




const CountryList = ({filtered, handleShow}) => {


    const result = filtered.length > 10
        ? 'Too many matches, specify another filter'
        : filtered.length !== 1
            ? filtered.map(country => <p>{country.name} {<Button name={country.name} handleShow={handleShow}/>}</p>)
            : <Country city={filtered[0]}/>

    return(
        <>
            {result}
        </>
    )
}


export default CountryList

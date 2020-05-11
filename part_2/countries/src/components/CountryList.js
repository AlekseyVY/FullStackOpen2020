import React from "react";
import Country from "./Country";




const CountryList = ({filtered}) => {


    const result = filtered.length > 10
        ? 'Too many matches, specify another filter'
        : filtered.length !== 1
            ? filtered.map(country => <p>{country.name}</p>)
            : <Country city={filtered[0]}/>

    return(
        <>
            {result}
        </>
    )
}


export default CountryList

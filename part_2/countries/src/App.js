import React, { useState, useEffect } from "react";
import axios from 'axios'
import Filter from "./components/Filter";
import CountryList from "./components/CountryList";



const App = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')


    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleShow = (event) => {
        setSearch(event)
    }

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(countries.concat(response.data))
            })
    }, [])

    const filtered = countries.filter(country => {
        if(country.name.includes(search)){
            return country
        }
    })


    return(
        <>
            <Filter handleSearch={handleSearch}
                    search={search} />
            <CountryList filtered={filtered} handleShow={handleShow}/>
        </>
    )
}

export default App

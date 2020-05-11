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

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                const data = response.data
                setCountries(countries.concat(data))
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
            <CountryList filtered={filtered} />
        </>
    )
}

export default App

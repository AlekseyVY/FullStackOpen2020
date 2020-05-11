import React from 'react'



const Country = ({city}) => {
    return(
        <>
            <h1>{city.name}</h1>
            <p>capital {city.capital}</p>
            <p>population {city.population}</p>
            <h2>languages</h2>
            <ul>
                {city.languages.map(lang => <li>{lang.name}</li>)}
            </ul>
            <img src={city.flag}
                 width={'150px'}
                 height={'150px'} alt={`country flag ${city.name}`}/>
        </>
    )
}

export default Country

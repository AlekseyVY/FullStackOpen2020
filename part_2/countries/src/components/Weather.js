import React, {useState, useEffect} from "react";
import axios from 'axios'



const Weather = ({capital}) => {
    const [weather, setWeather] = useState([])
    const weatherApiKey = process.env.REACT_APP_API_KEY
    let loc = false
    const params = {
        access_key: weatherApiKey,
        query: capital
    }

    useEffect(() => {
        axios.get('http://api.weatherstack.com/current',{params})
            .then(response => {
                const data = response.data
                    setWeather(data)
            })
            .catch(error => console.log(error))
    }, [capital])
    if(weather.length !== 0) {
         loc = weather.current
    }
    return (
        <div>
            <p>temperature: {loc ? loc.temperature : 'loading'}</p>
            <img src={loc ? loc.weather_icons[0] : 'loading'}/>
            <p>wind: {loc ? loc.wind_speed : 'loading'} mph direction {loc ? loc.wind_dir : 'loading'}</p>
        </div>
    )
}


export default Weather

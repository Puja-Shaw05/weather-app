import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function weatherApp(){
    let [weatherInfo , setWeatherInfo] = useState({
        city: "wanderland",
        feelsLike: 38.97,
        humidity: 79,
        maxTemp: 31.97,
        minTemp: 31.97,
        tem: 31.97,
        weather: "haze",
    });

    let updateInfo =(newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Puja</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
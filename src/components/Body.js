import {useContext, useEffect, useState} from 'react'
import {CityContext} from '../context/CityContext'
import axios from 'axios';

const api = {
    key: "0e74bc3fd202f6141475f2b95066b916", // Sometimes i can get temporary blocked, insert your own openweathermap API key.
    base: "https://api.openweathermap.org/data/2.5/",
    lat: "",
    lon: "",
};

// axios(`${api.base}weather?lat=32&lon=31&appid=${api.key}`)
//             .then((result) => {console.log(result);})

function Body() {
    const {city} = useContext(CityContext);
    const [weatherData, setWeatherData] = useState();
    const [status, setStatus] = useState(true);

    useEffect(() => {
        if (city !== ""){
            switch(city){
                case "izmir":
                    api.lat = "38.4237433";
                    api.lon = "27.1428019";
                    break;
                case "konya":
                    api.lat = "37.8727";
                    api.lon = "32.4924";
                    break;
                case "istanbul":
                    api.lat = "41.006381";
                    api.lon = "28.9758715";
                    break;
                case "ankara":
                    api.lat = "39.9207759";
                    api.lon = "32.8540497";
                    break;
                case "antalya":
                    api.lat = "36.8864752";
                    api.lon = "30.7029585";
                    break;
                default:
                    console.log("Error");
                    setStatus(true)
                    return;
            }

            axios(`${api.base}weather?lat=${api.lat}&lon=${api.lon}&appid=${api.key}`)
            .then((result) => {
                setWeatherData(result);
                console.log(weatherData);
                setStatus(false);
            })
            .catch((error) => {
                console.error("API isteği başarısız oldu:", error);
                setStatus(true);
            });
        }
    }, [city]);

    if (status) return <h3>Please select a city.</h3>;

  return (
    <div>
        <h2>{weatherData.data.name}</h2>
        <br />
        <p> Tempeture: {weatherData.data.main?.temp ? (weatherData.data.main.temp - 273.15).toFixed(1) : 'N/A'}°C</p>
        <p> Sensed Tempeture: {weatherData.data.main?.feels_like ? (weatherData.data.main.feels_like - 273.15).toFixed(1) : 'N/A'}°C</p>
        <p> Status: {weatherData.data.weather?.[0]?.description || 'N/A'}</p>
        <p> Humidity: {weatherData.data.main?.humidity ?? 'N/A'}%</p>
        <p> Wind Speed: {weatherData.data.wind?.speed ?? 'N/A'} m/s</p>
    </div>
  )
}

export default Body

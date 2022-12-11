import { useEffect, useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';
import WeatherError from './WeatherError';
import WeatherLoading from './WeatherLoading';

import styles from './weatherApp.module.css';

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        loadInfo();
    },[])

    useEffect(() => {
        if(weather?.location?.name)
            document.title = `Clima en ${weather?.location.name} - ${weather?.location.country}`
    }, [weather])

    async function loadInfo(city = 'Villa Aberastain') {
        try {
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_API_KEY}&q=${city}`
            );
            const json = await request.json();
            setTimeout(() => {
                setWeather(json);
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div className={styles.weather_app}>
            <WeatherForm onChangeCity={handleChangeCity} />
            {
                weather?.error ?
                    <WeatherError /> : 
                weather?.current ?
                    <WeatherMainInfo weather={weather} /> : <WeatherLoading />
            }
        </div>
    );
};

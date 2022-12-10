import { useEffect, useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';

import styles from './weatherApp.module.css';

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        loadInfo();
    }, [])

    useEffect(() => {
        document.title = `Clima en ${weather?.location.name} - ${weather?.location.country}`
    }, [weather])

    async function loadInfo(city = 'Villa Aberastain') {
        try {
            const request = await fetch(
                `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_API_KEY}&q=${city}`
            );
            const json = await request.json();
            setWeather(json);
        } catch (error) {
            
        }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div className={styles.weather_app}>
            <WeatherForm onChangeCity={handleChangeCity} />
            <WeatherMainInfo weather={ weather }/>
        </div>
    );
};

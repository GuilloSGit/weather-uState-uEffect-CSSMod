import styles from './weatherMainInfo.module.css';

export default function WeatherMainInfo({ weather }) {

    function colorByTemp() {
        if (weather) {
            if (weather?.current?.temp_c >= 34) {
                return styles.hot;
            } else if (weather?.current.temp_c >= 22) {
                return styles.warm;
            } else if (weather?.current.temp_c >= 10) {
                return styles.mild;
            } else if (weather?.current.temp_c >= -10) {
                return styles.cold;
            } else if (weather?.current.temp_c >= -50) {
                return styles.frozzen;
            } else {
                return "";
            }
        }
    }

    return (
        <div className={`${styles.cardContainer} ${colorByTemp()}`}>
            <div>
                <div>
                    <p className={styles.cityName}>{weather?.location.name}</p>
                    <span>{weather?.location.country}</span>
                </div>
                <div>
                    <img src={weather?.current.condition.icon} alt={weather?.current.condition.text} width="70" />
                </div>
                <div>
                    <span>{weather?.current.condition.text}</span><br />
                    Temperatura Actual: <span>{weather?.current.temp_c}°</span><br />
                    Sensación Térmica: <span>{weather?.current.feelslike_c}°</span><br />
                    Humedad: <span>{weather?.current.humidity}%</span>
                </div>
            </div>
            <div>
                <iframe
                     className={styles.map}
                    title="mapa"
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27206.5205470587!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1670670544267!5m2!1sen!2sar`}
                    width="500"
                    height="375"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
};

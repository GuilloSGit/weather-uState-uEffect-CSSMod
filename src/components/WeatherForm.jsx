import { useState } from 'react';
import styles from './weatherForm.module.css';

export default function WeatherForm({ onChangeCity }) {
    const [city, setCity] = useState('');

    function onChange(e) {
        const value = e.target.value;
        value !== '' ? setCity(value) : setCity('');
    }

    function handleSubmit(e) {
        e.preventDefault();
        onChangeCity(city);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.inline_input}>
                <div className={styles.input_group}>
                    <input type="text" required  onChange={ onChange } />
                    <label>Ingrese una ciudad</label>
                </div>
            </div> 
        </form>
    )
}
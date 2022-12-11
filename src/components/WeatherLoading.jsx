import styles from './weatherLoading.module.css';

export default function WeatherLoading() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.spinner}>
            </div>
        </div>
    );

};

import WeatherApp from './components/WeatherApp';
import './App.css';

function App() {

  return (
    <div>
      <WeatherApp />
      <footer className="footerContainer">
        <div className="footerdiv">
          <p>© Guillermo Andrada 2022</p>
          <p>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></p>
          <a href="https://www.weatherapi.com/" title="Free Weather API">
            <img className='weatherapiLogo'
              src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" />
          </a>
          
        </div>
      </footer>
    </div>
  );
}

export default App;

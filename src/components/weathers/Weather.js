import React, { useContext, useEffect } from 'react';

import WeatherDetails from './WeatherDetails';
import ModalWeather from './ModalWeather';

import WeatherContext from '../context/weatherContext';

const Weather = () => {
  const weatherContext = useContext(WeatherContext);

  const { city, defaultCity, defaultForecastCity } = weatherContext;

  useEffect(() => {
    defaultCity();
    defaultForecastCity();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='row'>
        <div className='centralize'>
          <div className='col s12 m12 center'>
            {!city ? (
              <h2>Search Location by clicking the button</h2>
            ) : (
              <WeatherDetails city={city} />
            )}
            {/* <ModalWeather /> */}
          </div>
        </div>
        <div className='center'>
          <ModalWeather />
        </div>
      </div>
    </>
  );
};

export default Weather;

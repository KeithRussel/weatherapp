import React, { useContext } from 'react';

import WeatherDetails from './WeatherDetails';
import ModalWeather from './ModalWeather';

import WeatherContext from '../context/weatherContext';

const Weather = () => {
  const weatherContext = useContext(WeatherContext);

  const {
    city: { name },
  } = weatherContext;

  return (
    <div className='container' style={{ marginTop: '25px' }}>
      <div className='row'>
        <div className='col s12 m12 center'>
          {!name ? (
            <h2>Search Location by clicking the button</h2>
          ) : (
            <WeatherDetails />
          )}
          <ModalWeather />
        </div>
      </div>
    </div>
  );
};

export default Weather;

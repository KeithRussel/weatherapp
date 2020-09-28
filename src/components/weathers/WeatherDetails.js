import React, { useContext } from 'react';

import WeatherContext from '../context/weatherContext';

const WeatherDetails = () => {
  const weatherContext = useContext(WeatherContext);

  const {
    city: { name, weather, main, dt, sys },
  } = weatherContext;

  const dateObj = new Date(dt * 1000);
  let timeString = dateObj.toLocaleString();

  return (
    <div className={name ? 'results' : null}>
      {dt ? (
        <span className='right' style={{ fontSize: '14px' }}>
          {timeString}
        </span>
      ) : null}
      {name ? (
        <h2 className='center'>
          {name}
          {sys ? <span>, {sys.country}</span> : null}
        </h2>
      ) : null}

      <div className='row center'>
        <div className='col s12'>
          {weather ? (
            <img
              className='weather-img'
              src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
              alt='WeatherImage'
            ></img>
          ) : null}
          <div>
            {weather ? (
              <span style={{ textTransform: 'capitalize', fontSize: '28px' }}>
                {weather[0].description}
              </span>
            ) : null}
          </div>
        </div>
        {main ? (
          <h3>
            {Math.round(main.temp_max) - (273.15).toFixed(0)}
            <span>°C</span>
          </h3>
        ) : null}
        {main ? (
          <span className='helper-text'>{main.humidity}% Humidity</span>
        ) : null}
      </div>
    </div>
  );
};

export default WeatherDetails;

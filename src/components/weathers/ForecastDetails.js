import React, { useContext } from 'react';

import WeatherContext from '../context/weatherContext';

const ForecastDetails = () => {
  const weatherContext = useContext(WeatherContext);

  const {
    forecast: { list },
  } = weatherContext;

  return (
    <div>
      <h5>lists</h5>
      {/* {list ? list.find((list, index) => console.log(allowed)) : null} */}
      {list
        ? list.map((list, index) => (
            <p key={index}>
              {new Date(list.dt * 1000).toLocaleString('en-us', {
                weekday: 'short',
              })}
            </p>
          ))
        : null}
    </div>
  );
};

export default ForecastDetails;

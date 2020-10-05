import React, { useState, useContext } from 'react';
import WeatherContext from '../context/weatherContext';

const Search = () => {
  const weatherContext = useContext(WeatherContext);

  const [text, setText] = useState('Cebu');

  const onSubmit = (e) => {
    e.preventDefault();

    weatherContext.searchCity(text);
    weatherContext.forecastCity(text);
    setText('');
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className='row'>
      <form className='col s12' onSubmit={onSubmit}>
        <input
          id='city_name'
          type='text'
          onChange={onChange}
          className='validate'
          value={text}
        />
        {/* <label htmlFor='city_name'>City Name</label> */}
        <button className='waves-effect waves-light btn' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;

import React, { useState, useEffect, useContext } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import WeatherContext from '../context/weatherContext';

const ModalWeather = () => {
  const weatherContext = useContext(WeatherContext);

  const { searchCity } = weatherContext;

  useEffect(() => {
    M.AutoInit();
    document.addEventListener('DOMContentLoaded', function () {
      const options = {
        inDuration: 250,
        outDuration: 250,
        opacity: 0.5,
        dismissible: true,
        startingTop: '4%',
        endingTop: '10%',
      };
      const elems = document.querySelectorAll('.modal');
      const instances = M.Modal.init(elems, options);
    });
  }, []);

  const [text, setText] = useState('Cebu');

  const onSubmit = (e) => {
    e.preventDefault();
    searchCity(text);

    setText('');
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <>
      <button
        data-target='modal-search'
        className='btn modal-trigger open-modal search-location'
      >
        Search Location
      </button>

      <div id='modal-search' className='modal'>
        <div className='modal-content'>
          <h4>Search Location</h4>
          <form className='col s12' onSubmit={onSubmit}>
            <input
              id='city_name'
              type='text'
              onChange={onChange}
              className='validate'
              value={text}
            />
            {/* <label htmlFor='city_name'>City Name</label> */}
            <button
              className='waves-effect waves-light btn modal-close'
              type='submit'
            >
              Search
            </button>
          </form>
          <button className='waves-effect waves-light btn modal-close'>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalWeather;

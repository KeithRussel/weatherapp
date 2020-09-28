import React, { useReducer } from 'react';
import axios from 'axios';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';
import { SEARCH_CITY, SET_LOADING, ERROR } from './types';

const WeatherState = (props) => {
  const initialState = {
    city: {},
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = process.env.REACT_APP_API_URL;

  // Search City
  const searchCity = async (text) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${API_URL}/weather?q=${text}&appid=${API_KEY}`
      );

      dispatch({
        type: SEARCH_CITY,
        payload: res.data,
      });

      console.log(res.data);
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.msg,
      });

      if (err.response.status === 404 || 400) {
        alert('Error: Location not Found');
      }
    }
  };

  // Forecast City

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <WeatherContext.Provider
      value={{
        city: state.city,
        loading: state.loading,
        error: state.error,
        searchCity,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;

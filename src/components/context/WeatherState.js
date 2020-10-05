import React, { useReducer } from 'react';
import axios from 'axios';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';
import {
  SEARCH_CITY,
  SEARCH_FORECAST,
  GET_CITY,
  GET_FORECAST,
  SET_LOADING,
  ERROR,
} from './types';

const WeatherState = (props) => {
  const initialState = {
    city: {},
    forecast: {},
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const API_URL = process.env.REACT_APP_WEATHER_API_URL;

  // let weatherClientKey;
  // let weatherClientUrl;

  // if (process.env.NODE_ENV !== 'production') {
  //   weatherClientKey = process.env.REACT_APP_WEATHER_API_KEY;
  //   weatherClientUrl = process.env.REACT_APP_WEATHER_API_URL;
  // } else {
  //   weatherClientKey = process.env.WEATHER_API_KEY;
  //   weatherClientUrl = process.env.WEATHER_API_URL;
  // }

  // Default City
  const defaultCity = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${API_URL}/weather?q=manila&appid=${API_KEY}`
      );

      dispatch({
        type: GET_CITY,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Default Forecast City
  const defaultForecastCity = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${API_URL}/forecast?q=manila&cnt=7&appid=${API_KEY}`
      );

      dispatch({
        type: GET_FORECAST,
        payload: res.data,
      });

      console.log(res.data.list[0].dt);
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.msg,
      });
    }
  };

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
  const forecastCity = async (text) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${API_URL}/forecast?q=${text}&cnt=7&appid=${API_KEY}`
      );

      dispatch({
        type: SEARCH_FORECAST,
        payload: res.data.list,
      });

      console.log(res.data.list);
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.msg,
      });
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <WeatherContext.Provider
      value={{
        city: state.city,
        forecast: state.forecast,
        loading: state.loading,
        error: state.error,
        searchCity,
        forecastCity,
        defaultCity,
        defaultForecastCity,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;

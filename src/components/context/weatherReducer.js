import {
  SEARCH_CITY,
  SEARCH_FORECAST,
  GET_CITY,
  GET_FORECAST,
  ERROR,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case SEARCH_FORECAST:
    case GET_FORECAST:
      return {
        ...state,
        forecast: action.payload,
      };
    case GET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ERROR:
      return {
        ...state,
        city: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

import { SEARCH_CITY, GET_CITYWEATHER, ERROR } from './types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_CITY:
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

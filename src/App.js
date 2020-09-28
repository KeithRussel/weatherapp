import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

import WeatherState from './components/context/WeatherState';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <WeatherState>
      <Router>
        <Navbar />
        <div className='container'>
          <Home />
        </div>
      </Router>
    </WeatherState>
  );
}

export default App;

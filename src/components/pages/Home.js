import React, { Fragment } from 'react';
import Weather from '../weathers/Weather';
import Githubpage from '../layout/Githubpage';

const Home = () => (
  <Fragment>
    {/* <Search /> */}
    <Githubpage />
    <Weather />
  </Fragment>
);

export default Home;

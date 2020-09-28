import React from 'react';
import GithubLogo from './Octocat.png';

const Githubpage = () => {
  return (
    <div className='github-link'>
      <a href='https://github.com/KeithRussel/weatherapp' target='_blank'>
        Made by Russel
      </a>
      <img src={GithubLogo} alt='Github Logo' width='45' height='40' />
    </div>
  );
};

export default Githubpage;

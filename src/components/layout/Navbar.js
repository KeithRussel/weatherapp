import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './weathericon.png';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='#' className='brand-logo center'>
          <img src={Logo} width='70' height='70' />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

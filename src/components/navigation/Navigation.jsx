import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { NavMenu } from './Navigation.styles';

const Navigation = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };
  return (
    <div>
      <nav className='nav sticky'>
        <div className='navbar-container'>
          <Link className='nav-logo' to='/'>
            Giorno
          </Link>

          <NavMenu onClick={handleClick} click={menu}>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/menu'>
                Menu
              </Link>
            </li>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/about'>
                About Us
              </Link>
            </li>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/page3'>
                Page3
              </Link>
            </li>
          </NavMenu>
          <div className='mobile-icon' onClick={handleClick} click={+menu}>
            {menu ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

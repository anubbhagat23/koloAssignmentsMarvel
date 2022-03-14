import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/navbar.css';

import logo from '../assets/images/logo.svg';

const NavBar = (props: any) => {
  const [beginAnimation, setBeginAmimation] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  return (
    <nav
      className={
        (beginAnimation ? 'ready' : '') + ' ' + (isNavVisible ? 'hide' : '')
      }
    >
      <div className="nav-container">
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
        <div className="menu">
          <ul>
            <li>
              <a href="#">Carbon Footprint</a>
            </li>
            <li>
              <a href="#">Our manifesto</a>
            </li>
            <li>
              <a href="#">Circulation</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Link to="/sign-up">Login / Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="line"></div>
      </div>
    </nav>
  );
};
export default NavBar;

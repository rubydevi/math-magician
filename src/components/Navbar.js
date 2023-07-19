import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png';

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-list">
      <li className="logo-item">
        <Link className="logo-link" to="/">
          <img className="logo" src={logo} alt="Logo" />
          <span className="website-name">Happy Calculator</span>
        </Link>
      </li>
      <li>
        <Link className="nav-item" to="/">Home</Link>
      </li>
      <li>
        <Link className="nav-item" to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link className="nav-item" to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

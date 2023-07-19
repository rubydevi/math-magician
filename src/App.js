import {
  BrowserRouter, Route, Routes, Link,
} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import logo from './images/logo1.png';

const App = () => (
  <BrowserRouter>
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </BrowserRouter>
);

export default App;

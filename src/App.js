import {
  BrowserRouter, Route, Routes, Link,
} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
  <BrowserRouter>
    <nav>
      <ul className="nav-list">
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

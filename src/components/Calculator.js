import React from 'react';
import Button from './Button';
import './Calculator.css';

const Calculator = () => (
  <div id="calculator">
    <div className="display">0</div>
    <div className="buttons">
      <Button type="button" className="button">AC</Button>
      <Button type="button" className="button">+/-</Button>
      <Button type="button" className="button">%</Button>
      <Button type="button" className="button right-button">/</Button>
    </div>
    <div className="buttons">
      <Button type="button" className="button">7</Button>
      <Button type="button" className="button">8</Button>
      <Button type="button" className="button">9</Button>
      <Button type="button" className="button right-button">x</Button>
    </div>
    <div className="buttons">
      <Button type="button" className="button">4</Button>
      <Button type="button" className="button">5</Button>
      <Button type="button" className="button">6</Button>
      <Button type="button" className="button right-button">-</Button>
    </div>
    <div className="buttons">
      <Button type="button" className="button">1</Button>
      <Button type="button" className="button">2</Button>
      <Button type="button" className="button">3</Button>
      <Button type="button" className="button right-button">+</Button>
    </div>
    <div className="buttons">
      <Button type="button" className="button zero-button">0</Button>
      <Button type="button" className="button">.</Button>
      <Button type="button" className="button right-button">=</Button>
    </div>
  </div>
);

export default Calculator;

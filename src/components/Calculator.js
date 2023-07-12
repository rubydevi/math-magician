import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    setCalculatorData((prevState) => calculate(prevState, buttonName));
  };

  const displayValue = calculatorData.next || calculatorData.total || '0';

  return (
    <div id="calculator">
      <h2>Calculator:</h2>
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <Button buttonName="AC" className="button" onClick={() => handleButtonClick('AC')} />
        <Button buttonName="+/-" className="button" onClick={() => handleButtonClick('+/-')} />
        <Button buttonName="%" className="button" onClick={() => handleButtonClick('%')} />
        <Button buttonName="÷" className="button right-button" onClick={() => handleButtonClick('÷')} />
      </div>

      <div className="buttons">
        <Button buttonName="7" className="button" onClick={() => handleButtonClick('7')} />
        <Button buttonName="8" className="button" onClick={() => handleButtonClick('8')} />
        <Button buttonName="9" className="button" onClick={() => handleButtonClick('9')} />
        <Button buttonName="x" className="button right-button" onClick={() => handleButtonClick('x')} />
      </div>
      <div className="buttons">
        <Button buttonName="4" className="button" onClick={() => handleButtonClick('4')} />
        <Button buttonName="5" className="button" onClick={() => handleButtonClick('5')} />
        <Button buttonName="6" className="button" onClick={() => handleButtonClick('6')} />
        <Button buttonName="-" className="button right-button" onClick={() => handleButtonClick('-')} />
      </div>
      <div className="buttons">
        <Button buttonName="1" className="button" onClick={() => handleButtonClick('1')} />
        <Button buttonName="2" className="button" onClick={() => handleButtonClick('2')} />
        <Button buttonName="3" className="button" onClick={() => handleButtonClick('3')} />
        <Button buttonName="+" className="button right-button" onClick={() => handleButtonClick('+')} />
      </div>
      <div className="buttons">
        <Button buttonName="0" className="button zero-button" onClick={() => handleButtonClick('0')} />
        <Button buttonName="." className="button" onClick={() => handleButtonClick('.')} />
        <Button buttonName="=" className="button right-button" onClick={() => handleButtonClick('=')} />
      </div>
    </div>
  );
};

export default Calculator;

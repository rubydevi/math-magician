import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, className, onClick }) => (
  <button type="button" className={className} onClick={onClick}>
    {buttonName}
  </button>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;

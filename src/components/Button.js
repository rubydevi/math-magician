import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className }) => (
  // eslint-disable-next-line react/button-has-type
  <button type="button" className={className}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;

/* eslint-disable react/button-has-type */
import React from 'react';

function Button({ type, className, children }) {
  return (
    <button type={type} className={`btn btn-primary ${className}`}>
      {children}
    </button>
  );
}

export default Button;

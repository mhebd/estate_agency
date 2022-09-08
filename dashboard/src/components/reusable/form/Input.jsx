/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Input({ name, type, className, placeholder, id, changeHandler, value, label }) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        className={`form-control ${className}`}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={(e) => changeHandler(e)}
      />
    </>
  );
}

export default Input;

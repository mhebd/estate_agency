import React from 'react';

function Select({ value, className, name, changeHandler, children, id, label }) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="mb-2">
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        className={`form-select form-control ${className}`}
        value={value}
        onChange={(e) => changeHandler(e)}
      >
        {children}
      </select>
    </>
  );
}

export default Select;

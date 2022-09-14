import React from 'react';

function Textarea({ name, className, placeholder, id, changeHandler, value, label }) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="mb-2">
          {label}
        </label>
      )}
      <textarea
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

export default Textarea;

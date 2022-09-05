import React from 'react';

function Select({ value, className, name, changeHandler, children }) {
	return (
		<select value={value} onChange={(e) => changeHandler(e)}>
			{children}
		</select>
	);
}

export default Select;

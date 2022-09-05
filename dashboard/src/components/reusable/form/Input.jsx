import React from 'react';

function Input({
	name,
	type,
	className,
	placeholder,
	id,
	changeHandler,
	value,
}) {
	return (
		<input
			type={type}
			name={name}
			className={className}
			placeholder={placeholder}
			value={value}
			id={id}
			onChange={(e) => changeHandler(e)}
		/>
	);
}

export default Input;

import React from 'react';

function Textarea({ name, className, placeholder, id, changeHandler, value }) {
	return (
		<textarea
			name={name}
			className={className}
			placeholder={placeholder}
			value={value}
			id={id}
			onChange={(e) => changeHandler(e)}
		/>
	);
}

export default Textarea;

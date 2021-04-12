import React from 'react';

const Error = ({ children }) => {
	return (
		<React.Fragment>
			<div className='error'>{children}</div>
		</React.Fragment>
	);
};

export default Error;

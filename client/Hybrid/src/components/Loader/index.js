import React from 'react';

const Loader = ({ children }) => {
	return (
		<React.Fragment>
			<div className='animate-loading loader'>{children}</div>
		</React.Fragment>
	);
};

export default Loader;

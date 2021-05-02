import React from 'react';
import Header from './Header';
import Nav from './Nav';

const Layout = ({ children, withoutBorder = false }) => {
	const renderFooter = () => (
		<footer>
			Developed by
			<a href='https://arunabharjun.com' target='_blank' rel='noreferrer'>
				{' '}
				Arunabh Arjun
			</a>
		</footer>
	);

	return (
		<React.Fragment>
			<Header />
			<Nav />
			<main style={withoutBorder ? { border: 'none' } : {}}>
				{children}
			</main>
			{renderFooter()}
		</React.Fragment>
	);
};

export default Layout;

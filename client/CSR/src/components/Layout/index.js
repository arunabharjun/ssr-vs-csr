import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import reportWebVitals from '../../reportWebVitals';
import Header from './Header';
import Nav from './Nav';

const Layout = ({ children }) => {
	const currPath = useLocation().pathname;

	useEffect(() => {
		console.log(currPath, 'Web Vitals -');
		reportWebVitals(console.table);
	}, []);

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
			<main>{children}</main>
			{renderFooter()}
		</React.Fragment>
	);
};

export default Layout;

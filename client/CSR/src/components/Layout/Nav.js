import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
	const currPath = useLocation().pathname;

	const getClassName = (path) => {
		if (path === currPath) return 'nav-item nav-item-active';
		return 'nav-item';
	};

	const renderNav = () => (
		<nav>
			<Link to='/d1'>
				<div className={getClassName('/d1')}>Dataset 1</div>
			</Link>
			<Link to='/d2'>
				<div className={getClassName('/d2')}>Dataset 2</div>
			</Link>
			<Link to='/d12'>
				<div className={getClassName('/d12')}>Dataset 1 + 2</div>
			</Link>
		</nav>
	);

	return <React.Fragment>{renderNav()}</React.Fragment>;
};

export default Nav;

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
			<Link to='/'>
				<div className={getClassName('/')}>Home</div>
			</Link>
			<Link to='/csr/dataset_1'>
				<div className={getClassName('/csr/dataset_1')}>Dataset 1</div>
			</Link>
			<Link to='/csr/dataset_2'>
				<div className={getClassName('/csr/dataset_2')}>Dataset 2</div>
			</Link>
			<Link to='/csr/dataset_1_2'>
				<div className={getClassName('/csr/dataset_1_2')}>
					Dataset 1 + 2
				</div>
			</Link>
		</nav>
	);

	return <React.Fragment>{renderNav()}</React.Fragment>;
};

export default Nav;

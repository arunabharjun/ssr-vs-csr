import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Nav = () => {
	const currPath = useRouter().pathname;

	const getClassName = (path) => {
		if (path === currPath) return 'nav-item nav-item-active';
		return 'nav-item';
	};

	const renderNav = () => (
		<nav>
			<Link href='/'>
				<div className={getClassName('/')}>Home</div>
			</Link>
			<Link href='/d1'>
				<div className={getClassName('/d1')}>Dataset 1</div>
			</Link>
			<Link href='/d2'>
				<div className={getClassName('/d2')}>Dataset 2</div>
			</Link>
			<Link href='/d12'>
				<div className={getClassName('/d12')}>Dataset 1 + 2</div>
			</Link>
		</nav>
	);

	return <React.Fragment>{renderNav()}</React.Fragment>;
};

export default Nav;

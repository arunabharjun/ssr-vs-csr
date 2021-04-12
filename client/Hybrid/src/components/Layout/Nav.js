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
			<Link href='/static_ssr/dataset_1'>
				<div className={getClassName('/static_ssr/dataset_1')}>
					Static Dataset 1
				</div>
			</Link>
			<Link href='/static_ssr/dataset_2'>
				<div className={getClassName('/static_ssr/dataset_2')}>
					Static Dataset 2
				</div>
			</Link>
			<Link href='/static_ssr/dataset_1_2'>
				<div className={getClassName('/static_ssr/dataset_1_2')}>
					Static Dataset 1 + 2
				</div>
			</Link>
			<Link href='/onRequest_ssr/dataset_1'>
				<div className={getClassName('/onRequest_ssr/dataset_1')}>
					On Request Dataset 1
				</div>
			</Link>
			<Link href='/onRequest_ssr/dataset_2'>
				<div className={getClassName('/onRequest_ssr/dataset_2')}>
					On Request Dataset 2
				</div>
			</Link>
			<Link href='/onRequest_ssr/dataset_1_2'>
				<div className={getClassName('/onRequest_ssr/dataset_1_2')}>
					On Request Dataset 1 + 2
				</div>
			</Link>
		</nav>
	);

	return <React.Fragment>{renderNav()}</React.Fragment>;
};

export default Nav;

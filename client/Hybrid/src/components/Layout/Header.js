import React from 'react';
import IconGithub from '../../assets/icons/IconGithub';
import logo from '../../assets/images/logo.png';
import iiitg from '../../assets/images/iiitg.svg';
import Link from 'next/link';

const Header = () => {
	const renderHeader = () => (
		<header>
			<div className='branding'>
				<Link href='/'>
					<div className='nav-logo phone-hide'>
						<img src={logo} alt='' />
					</div>
				</Link>
				<Link href='/'>
					<div className='brand-name'>CSR V/S SSR</div>
				</Link>
			</div>
			<div className='iiitg-logo'>
				<div className='nav-logo '>
					<img src={iiitg} alt='' />
				</div>
			</div>
			<a
				className='github-icon'
				href='https://github.com/arunabharjun/ssr-vs-csr'
				target='_blank'
				rel='noreferrer'
			>
				<IconGithub /> <span className='phone-hide'>Know more</span>
			</a>
		</header>
	);

	return <React.Fragment>{renderHeader()}</React.Fragment>;
};

export default Header;

import React from 'react';
import Error from '../Error';

const HomeView = () => {
	const renderError = () => (
		<React.Fragment>
			<br />
			<Error>
				<b>CAUTION : Potential crash & browser freeze warning</b> <br />{' '}
				<br /> This web-app is a part of a research work and all the
				other pages are designed to render huge datasets into HTML and
				their purpose is to exaggerate the effect of rendering, as a
				result of which it uses a lot of resources of your local
				machine. Please be adviced to browse this app with caution as it
				might potentially crach and freeze your browser!
			</Error>
		</React.Fragment>
	);

	const renderAbout = () => (
		<React.Fragment>
			<h1>SSR : SERVER SIDE RENDERING</h1>
			<div>
				<p className=''>There are two other parts of this app -</p>
				<ol>
					<li>CSR : Client Side Rendering</li>
					<li>Hybrid Rendering</li>
				</ol>
				<p className=''>Find them in the links below - </p>
			</div>
		</React.Fragment>
	);

	const renderLinks = () => (
		<div className='links-container'>
			<a href='about:blank' target='_blank' rel='noopener noreferrer'>
				<div>Go to CSR</div>
			</a>
			<a href='about:blank' target='_blank' rel='noopener noreferrer'>
				<div>Go to HYBRID REDERING</div>
			</a>
		</div>
	);

	const renderAppInfo = () => (
		<div className='app-info'>
			<p className=''>
				This part of the web-app demnostrates the effect of server side
				rendering through the combination of the following -
			</p>
			<ol>
				<li>Static Generated Dataset 1</li>
				<li>Static Generated Dataset 2</li>
				<li>Static Generated Dataset 1 + Dataset</li>
				<li>On Request Generated Dataset 1</li>
				<li>On Request Generated Dataset 2</li>
				<li>On Request Generated Dataset 1 + Dataset 2</li>
			</ol>
		</div>
	);

	const renderHomeView = () => (
		<React.Fragment>
			{renderError()}
			<div className='app-info-container'>
				{renderAbout()}
				{renderLinks()}
				{renderAppInfo()}
			</div>
		</React.Fragment>
	);

	return renderHomeView();
};

export default HomeView;

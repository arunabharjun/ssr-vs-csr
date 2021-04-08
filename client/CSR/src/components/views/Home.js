import React from 'react';
import { API_DOMAIN } from '../../config';
import Layout from '../components/Layout';

const Home = () => {
	return (
		<React.Fragment>
			<Layout>
				{API_DOMAIN}
				<h1>Home</h1>
			</Layout>
		</React.Fragment>
	);
};

export default Home;

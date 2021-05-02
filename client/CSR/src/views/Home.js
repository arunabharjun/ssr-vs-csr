import React from 'react';
import HomeView from '../components/Home';
import Layout from '../components/Layout';

const Home = () => {
	return (
		<React.Fragment>
			<Layout withoutBorder>
				<HomeView />
			</Layout>
		</React.Fragment>
	);
};

export default Home;

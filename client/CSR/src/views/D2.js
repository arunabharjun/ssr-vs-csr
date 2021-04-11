import React from 'react';
import Layout from '../components/Layout';
import ds2 from '../assets/data/d2.json';
import Table from '../components/Table';

const D2 = () => {
	return (
		<React.Fragment>
			<Layout>
				<Table data={ds2} title='Dataset 2' />
			</Layout>
		</React.Fragment>
	);
};

export default D2;

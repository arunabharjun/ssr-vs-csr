import React from 'react';
import Layout from '../components/Layout';
import ds1 from '../assets/data/d1.json';
import Table from '../components/Table';

const D1 = () => {
	return (
		<React.Fragment>
			<Layout>
				<Table data={ds1} title='Dataset 1' />
			</Layout>
		</React.Fragment>
	);
};

export default D1;

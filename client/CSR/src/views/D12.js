import React from 'react';
import Layout from '../components/Layout';
import ds1 from '../assets/data/d1.json';
import ds2 from '../assets/data/d2.json';
import Table from '../components/Table';

const D12 = () => {
	return (
		<React.Fragment>
			<Layout>
				<Table data={ds1} title='Dataset 1' />
				<Table data={ds2} title='Dataset 2' />
			</Layout>
		</React.Fragment>
	);
};

export default D12;

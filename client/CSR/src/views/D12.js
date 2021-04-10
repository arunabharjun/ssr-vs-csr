import React from 'react';
import { JsonToTable } from 'react-json-to-table';
import Layout from '../components/Layout';
import ds1 from '../assets/data/d1.json';
import ds2 from '../assets/data/d2.json';

const D12 = () => {
	return (
		<React.Fragment>
			<Layout>
				<JsonToTable json={{ 'Dataset-1': ds1 }} />
				<JsonToTable json={{ 'Dataset-2': ds2 }} />
			</Layout>
		</React.Fragment>
	);
};

export default D12;

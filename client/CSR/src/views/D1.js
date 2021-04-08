import React from 'react';
import { JsonToTable } from 'react-json-to-table';
import Layout from '../components/Layout';
import data from '../data';

const D1 = () => {
	return (
		<React.Fragment>
			<Layout>
				<h1>Dataset 1</h1>
				<JsonToTable json={data} />
			</Layout>
		</React.Fragment>
	);
};

export default D1;

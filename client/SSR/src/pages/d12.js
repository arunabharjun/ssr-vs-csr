import React from 'react';
import Layout from '../components/Layout';
import ds1 from '../assets/data/d1.json';
import ds2 from '../assets/data/d2.json';
import Table from '../components/Table';

const D12 = ({ data1, data2 }) => {
	return (
		<React.Fragment>
			<Layout>
				<Table data={data1} title='Dataset 1' />
				<Table data={data2} title='Dataset 2' />
			</Layout>
		</React.Fragment>
	);
};

export default D12;

export async function getStaticProps(context) {
	return {
		props: { data1: ds1, data2: ds2 } // will be passed to the page component as props
	};
}

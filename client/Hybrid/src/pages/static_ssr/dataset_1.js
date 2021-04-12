import React from 'react';
import Layout from '../../components/Layout';
import ds1 from '../../assets/data/d1.json';
import Table from '../../components/Table';

const D1 = ({ data }) => {
	return (
		<React.Fragment>
			<Layout>
				<Table data={data} title='Dataset 1' />
			</Layout>
		</React.Fragment>
	);
};

export default D1;

export async function getStaticProps(context) {
	return {
		props: { data: ds1 } // will be passed to the page component as props
	};
}

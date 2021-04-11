import React from 'react';
import Layout from '../components/Layout';
import ds2 from '../assets/data/d2.json';
import Table from '../components/Table';

const D2 = ({ data }) => {
	return (
		<React.Fragment>
			<Layout>
				<Table data={data} title='Dataset 2' />
			</Layout>
		</React.Fragment>
	);
};

export default D2;

export async function getServerSideProps(context) {
	return {
		props: { data: ds2 } // will be passed to the page component as props
	};
}

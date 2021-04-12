import React from 'react';
import Error from '../../components/Error';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import Table from '../../components/Table';
import useFetch from '../../hooks/useFetch';
import ds2 from '../../assets/data/d2.json';
import { getDataset1 } from '../../helpers/fetchApi';

const DynamicD1StaticD2 = ({ data2 }) => {
	const [
		data1,
		loading,
		error
	] = useFetch(getDataset1);

	return (
		<React.Fragment>
			<Layout>
				{loading && <Loader>Loading Dataset 1</Loader>}
				{error && (
					<Error>
						Something went wrong while fetching <b>Dataset 1</b>
					</Error>
				)}
				{data1 &&
				!loading &&
				!error && <Table data={data1} title='Dataset 1' />}
				<Table data={data2} title='Dataset 2' />
			</Layout>
		</React.Fragment>
	);
};

export default DynamicD1StaticD2;

export async function getStaticProps(context) {
	return {
		props: { data2: ds2 } // will be passed to the page component as props
	};
}

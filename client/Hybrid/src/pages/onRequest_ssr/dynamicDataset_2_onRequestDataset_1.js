import React from 'react';
import Error from '../../components/Error';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import Table from '../../components/Table';
import useFetch from '../../hooks/useFetch';
import ds1 from '../../assets/data/d1.json';
import { getDataset2 } from '../../helpers/fetchApi';

const DynamicD2OnRequestD1 = ({ data1 }) => {
	const [
		data2,
		loading,
		error
	] = useFetch(getDataset2);

	return (
		<React.Fragment>
			<Layout>
				{loading && <Loader>Loading Dataset 2</Loader>}
				{error && (
					<Error>
						Something went wrong while fetching <b>Dataset 2</b>
					</Error>
				)}
				<Table data={data1} title='Dataset 1' />
				{data2 &&
				!loading &&
				!error && <Table data={data2} title='Dataset 2' />}
			</Layout>
		</React.Fragment>
	);
};

export default DynamicD2OnRequestD1;

export async function getServerSideProps(context) {
	return {
		props: { data1: ds1 } // will be passed to the page component as props
	};
}

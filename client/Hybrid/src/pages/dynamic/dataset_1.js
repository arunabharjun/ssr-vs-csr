import React from 'react';
import Error from '../../components/Error';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import Table from '../../components/Table';
import useFetch from '../../hooks/useFetch';
import { getDataset1 } from '../../helpers/fetchApi';

const DynamicD1 = () => {
	const [
		data,
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
				{data &&
				!loading &&
				!error && <Table data={data} title='Dataset 1' />}
			</Layout>
		</React.Fragment>
	);
};

export default DynamicD1;

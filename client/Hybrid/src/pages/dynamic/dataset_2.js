import React from 'react';
import Error from '../../components/Error';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import Table from '../../components/Table';
import useFetch from '../../hooks/useFetch';
import { getDataset2 } from '../../helpers/fetchApi';

const DynamicD1 = () => {
	const [
		data,
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
				{data &&
				!loading &&
				!error && <Table data={data} title='Dataset 2' />}
			</Layout>
		</React.Fragment>
	);
};

export default DynamicD1;

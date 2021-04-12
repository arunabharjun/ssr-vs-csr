import React from 'react';
import Error from '../../components/Error';
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import Table from '../../components/Table';
import useFetch from '../../hooks/useFetch';
import { getDataset1, getDataset2 } from '../../helpers/fetchApi';

const DynamicD1 = () => {
	const [
		data1,
		loading1,
		error1
	] = useFetch(getDataset1);
	const [
		data2,
		loading2,
		error2
	] = useFetch(getDataset2);

	return (
		<React.Fragment>
			<Layout>
				{loading1 && <Loader>Loading Dataset 1</Loader>}
				{loading2 && <Loader>Loading Dataset 2</Loader>}
				{error1 && (
					<Error>
						Something went wrong while fetching <b>Dataset 1</b>
					</Error>
				)}
				{error2 && (
					<Error>
						Something went wrong while fetching <b>Dataset 2</b>
					</Error>
				)}
				{data1 &&
				!loading1 &&
				!error1 && <Table data={data1} title='Dataset 1' />}
				{data2 &&
				!loading2 &&
				!error2 && <Table data={data2} title='Dataset 2' />}
			</Layout>
		</React.Fragment>
	);
};

export default DynamicD1;

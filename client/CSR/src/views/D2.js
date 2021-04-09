import React, { useState, useEffect } from 'react';
import { JsonToTable } from 'react-json-to-table';
import Error from '../components/Error';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import dataset2 from '../assets/data/dataset2';
import { getDataset2 } from '../helpers/fetchApi';

const D2 = () => {
	const [
		d2,
		setD2
	] = useState({});

	const [
		loading,
		setLoading
	] = useState(true);

	const [
		error,
		setError
	] = useState(false);

	const initData = () => {
		getDataset2()
			.then((data) => {
				setLoading(false);
				setD2(data.data);
				setError(false);
			})
			.catch((error) => {
				setLoading(false);
				setError(true);
			});
	};

	useEffect(() => {
		// initData();
	}, []);
	return (
		<React.Fragment>
			<Layout>
				{/* {loading && <Loader>loading dataset 2</Loader>}
				{error && (
					<Error>
						Something went wrong while loading <b>Dataset 2</b>
					</Error>
				)}
				{!loading && <JsonToTable json={{ 'Dataset-2': d2 }} />} */}
				<JsonToTable json={dataset2} />
			</Layout>
		</React.Fragment>
	);
};

export default D2;

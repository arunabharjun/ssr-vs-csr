import React, { useState, useEffect } from 'react';
import { JsonToTable } from 'react-json-to-table';
import Error from '../components/Error';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import dataset1 from '../assets/data/dataset1';
import { getDataset1 } from '../helpers/fetchApi';

const D1 = () => {
	const [
		d1,
		setD1
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
		getDataset1()
			.then((data) => {
				setLoading(false);
				setD1(data.data);
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
				{/* {loading && <Loader>loading dataset 1</Loader>}
				{error && (
					<Error>
						Something went wrong while loading <b>Dataset 1</b>
					</Error>
				)}
				{!loading && <JsonToTable json={{ 'Dataset-1': d1 }} />} */}
				<JsonToTable json={dataset1} />
			</Layout>
		</React.Fragment>
	);
};

export default D1;

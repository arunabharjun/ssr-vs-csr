import React, { useState, useEffect } from 'react';
import { JsonToTable } from 'react-json-to-table';
import Layout from '../components/Layout';
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

	useEffect(() => {
		getDataset1()
			.then((data) => {
				setLoading(false);
				setD1(data.data);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
			});
	}, []);

	return (
		<React.Fragment>
			<Layout>
				{loading && 'loading dataset 1'}
				{!loading && <JsonToTable json={d1} />}
			</Layout>
		</React.Fragment>
	);
};

export default D1;

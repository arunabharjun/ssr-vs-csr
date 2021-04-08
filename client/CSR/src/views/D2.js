import React, { useState, useEffect } from 'react';
import { JsonToTable } from 'react-json-to-table';
import Layout from '../components/Layout';
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

	useEffect(() => {
		getDataset2()
			.then((data) => {
				setLoading(false);
				setD2(data.data);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
			});
	}, []);
	return (
		<React.Fragment>
			<Layout>
				{loading && 'loading dataset 2'}
				{!loading && <JsonToTable json={d2} />}
			</Layout>
		</React.Fragment>
	);
};

export default D2;

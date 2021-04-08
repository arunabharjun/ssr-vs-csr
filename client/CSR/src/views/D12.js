import React, { useState, useEffect } from 'react';
import { JsonToTable } from 'react-json-to-table';
import Layout from '../components/Layout';
import { getDataset1, getDataset2 } from '../helpers/fetchApi';

const D12 = () => {
	const [
		d1,
		setD1
	] = useState({});

	const [
		d2,
		setD2
	] = useState({});

	const [
		loading1,
		setLoading1
	] = useState(true);

	const [
		loading2,
		setLoading2
	] = useState(true);

	useEffect(() => {
		getDataset1()
			.then((data) => {
				setLoading1(false);
				setD1(data.data);
			})
			.catch((error) => {
				setLoading1(false);
				console.log(error);
			});
		getDataset2()
			.then((data) => {
				setLoading2(false);
				setD2(data.data);
			})
			.catch((error) => {
				setLoading1(false);
				console.log(error);
			});
	}, []);

	return (
		<React.Fragment>
			<Layout>
				{loading1 && 'loading dataset 1'}
				{loading2 && 'loading dataset 2'}
				{!loading1 && <JsonToTable json={d1} />}
				{!loading2 && <JsonToTable json={d2} />}
			</Layout>
		</React.Fragment>
	);
};

export default D12;

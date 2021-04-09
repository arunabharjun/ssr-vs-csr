import React, { useState, useEffect } from 'react';
import { JsonToTable } from 'react-json-to-table';
import Error from '../components/Error';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
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

	const [
		error1,
		setError1
	] = useState(false);

	const [
		error2,
		setError2
	] = useState(false);

	const initData = () => {
		getDataset1()
			.then((data) => {
				setLoading1(false);
				setD1(data.data);
				setError1(false);
			})
			.catch((error) => {
				setLoading1(false);
				console.log(error);
				setError1(true);
			});
		getDataset2()
			.then((data) => {
				setLoading2(false);
				setD2(data.data);
				setError2(false);
			})
			.catch((error) => {
				setLoading1(false);
				console.log(error);
				setError2(true);
			});
	};

	useEffect(() => {
		initData();
	}, []);

	return (
		<React.Fragment>
			<Layout>
				{loading1 && <Loader>loading dataset 1</Loader>}
				{loading2 && <Loader>loading dataset 2</Loader>}
				{error1 && (
					<Error>
						Something went wrong while loading <b>Dataset 1</b>
					</Error>
				)}
				{error2 && (
					<Error>
						Something went wrong while loading <b>Dataset 2</b>
					</Error>
				)}
				{!loading1 && <JsonToTable json={{ 'Dataset-1': d1 }} />}
				{!loading2 && <JsonToTable json={{ 'Dataset-2': d2 }} />}
			</Layout>
		</React.Fragment>
	);
};

export default D12;

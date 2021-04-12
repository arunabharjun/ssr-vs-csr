import { useState, useEffect } from 'react';

const useFetch = (apiCall = () => {}) => {
	const [
		data,
		setData
	] = useState({});

	const [
		error,
		setError
	] = useState(false);

	const [
		loading,
		setLoading
	] = useState(true);

	const initData = () => {
		apiCall()
			.then((data) => {
				setData(data.data);
				setError(false);
				setLoading(false);
			})
			.catch((error) => {
				setError(true);
				setLoading(false);
			});
	};

	useEffect(() => {
		initData();
	}, []);

	return [
		data,
		loading,
		error
	];
};

export default useFetch;

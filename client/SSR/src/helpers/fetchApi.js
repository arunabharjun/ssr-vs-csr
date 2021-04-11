import axios from 'axios';
import {
	API_DOMAIN,
	DATASET_1_END_POINT,
	DATASET_2_END_POINT
} from '../config';

const API_D1 = `${API_DOMAIN}${DATASET_1_END_POINT}`;
const API_D2 = `${API_DOMAIN}${DATASET_2_END_POINT}`;

const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json'
};

const getData = (API_URL) => {
	return axios
		.get(API_URL, {
			headers
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			console.error(error);
		});
};

export const getDataset1 = () => {
	return getData(API_D1);
};

export const getDataset2 = () => {
	return getData(API_D2);
};

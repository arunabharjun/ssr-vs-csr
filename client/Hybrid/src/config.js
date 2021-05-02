export const ENV = process.env.NEXT_PUBLIC_ENV;
export const API_DOMAIN =
	ENV === 'DEV'
		? process.env.NEXT_PUBLIC_API_DOMAIN_DEV
		: process.env.NEXT_PUBLIC_API_DOMAIN_PROD;
export const DATASET_1_END_POINT = process.env.NEXT_PUBLIC_DATASET_1_END_POINT;
export const DATASET_2_END_POINT = process.env.NEXT_PUBLIC_DATASET_2_END_POINT;

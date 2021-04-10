import React, { useState, useEffect } from 'react';
import { JsonToTable } from 'react-json-to-table';
import Layout from '../components/Layout';
import ds1 from '../assets/data/d1.json';

const D1 = () => {
	return (
		<React.Fragment>
			<Layout>
				<JsonToTable json={{ 'Dataset-1': ds1 }} />
			</Layout>
		</React.Fragment>
	);
};

export default D1;

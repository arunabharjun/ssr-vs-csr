import React, { useEffect } from 'react';
import { JsonToTable } from 'react-json-to-table';
import data from './data';
import reportWebVitals from './reportWebVitals';

const App = () => {
	useEffect(() => {
		console.log('React Web Vitals');
		reportWebVitals(console.table);
	}, []);

	return (
		<React.Fragment>
			<JsonToTable json={data} />
		</React.Fragment>
	);
};

export default App;

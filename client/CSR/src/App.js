import React from 'react';
import { JsonToTable } from 'react-json-to-table';
import data from './data';

function App() {
	return (
		<React.Fragment>
			<JsonToTable json={data} />
		</React.Fragment>
	);
}

export default App;

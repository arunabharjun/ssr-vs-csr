import React, { useEffect } from 'react';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';

const App = () => {
	useEffect(() => {
		console.log('React Web Vitals');
		reportWebVitals(console.table);
	}, []);

	return (
		<React.Fragment>
			<Routes />
		</React.Fragment>
	);
};

export default App;

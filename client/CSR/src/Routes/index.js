import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import D1 from '../views/D1';
import D2 from '../views/D2';
import D12 from '../views/D12';
import Home from '../views/Home';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/csr/dataset_1' exact component={D1} />
				<Route path='/csr/dataset_2' exact component={D2} />
				<Route path='/csr/dataset_1_2' exact component={D12} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import D1 from '../views/D1';
import D2 from '../views/D2';
import Home from '../views/Home';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/d1' exact component={D1} />
				<Route path='/d2' exact component={D2} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;

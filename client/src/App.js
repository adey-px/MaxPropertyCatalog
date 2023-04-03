import React, { useState, useCallback } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
} from 'react-router-dom';
import MainNavbar from './features/navbar/MainNavbar';
import ViewPlace from './places/pages/ViewPlace';
import NewPlace from './places/pages/NewPlace';
import UpdatePlace from './places/pages/UpdatePlace';
import HomePage from './users/pages/HomePage';
import UserLogin from './users/pages/UserLogin';
import { AuthContext } from './context/AuthContext';

//
const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	/* login ref in authcontext */
	const loginHandler = useCallback(() => {
		setLoggedIn(true);
	}, []);

	/* logout ref in authcontext */
	const logoutHandler = useCallback(() => {
		setLoggedIn(false);
	}, []);

	let routes;

	/* condition to show routes */
	if (loggedIn) {
		routes = (
			<React.Fragment>
				<Redirect to='/' />
				<Route
					exact
					path='/'
					component={HomePage}
				/>
				<Route
					exact
					path='/user-places/:uid'
					component={ViewPlace}
				/>
				<Route
					exact
					path='/new-place'
					component={NewPlace}
				/>
				<Route
					exact
					path='/update-place/:pid'
					component={UpdatePlace}
				/>
				<Route
					exact
					path='/account'
					component={UserLogin}
				/>
			</React.Fragment>
		);
	} else {
		routes = (
			<React.Fragment>
				<Redirect to='/account' />
				<Route
					exact
					path='/'
					component={HomePage}
				/>
				<Route
					exact
					path='/user-places/:uid'
					component={ViewPlace}
				/>
				<Route
					exact
					path='/account'
					component={UserLogin}
				/>
			</React.Fragment>
		);
	}

	return (
		<AuthContext.Provider
			value={{
				loggedIn: loggedIn,
				login: loginHandler,
				logout: logoutHandler,
			}}
		>
			<Router>
				<MainNavbar />
				<main>{routes}</main>
			</Router>
		</AuthContext.Provider>
	);
};

export default App;

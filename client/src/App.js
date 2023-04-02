import React, { useState, useCallback } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import MainNavbar from './features/navbar/MainNavbar';
import UsersList from './users/pages/UsersList';
import ViewPlace from './places/pages/ViewPlace';
import NewPlace from './places/pages/NewPlace';
import UpdatePlace from './places/pages/UpdatePlace';
import UserAuth from './users/pages/UserAuth';
import { AuthContext } from './context/AuthContext';

//
const App = () => {
	// State hooks for authContext below, to navLinks comp
	const [loggedIn, setLoggedIn] = useState(false);

	const login = useCallback(() => {
		setLoggedIn(true);
	}, []);

	const logout = useCallback(() => {
		setLoggedIn(false);
	}, []);

	// Redirect users to selected routes
	let routes;

	if (loggedIn) {
		routes = (
			<React.Fragment>
				<Redirect to='/' />,
				<Route
					exact
					path='/'
					component={UsersList}
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
					path='/authUser'
					component={UserAuth}
				/>
			</React.Fragment>
		);
	} else {
		routes = (
			<React.Fragment>
				<Redirect to='/' />
				<Route
					exact
					path='/'
					component={UsersList}
				/>
				<Route
					exact
					path='/user-places/:uid'
					component={ViewPlace}
				/>
				<Route
					exact
					path='/userAuth'
					component={UserAuth}
				/>
			</React.Fragment>
		);
	}

	return (
		// Wrap all routes with authsContext from contextapi
		<AuthContext.Provider
			value={{
				loggedIn: loggedIn,
				login: login,
				logout: logout,
			}}
		>
			<Router>
				<MainNavbar />

				<main>
					<Switch>{routes}</Switch>
				</main>
			</Router>
		</AuthContext.Provider>
	);
};

export default App;

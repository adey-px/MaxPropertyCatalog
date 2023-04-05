import React, { useState, useCallback } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
} from 'react-router-dom';
import Navbar from './features/navbar/Navbar';
import HomePage from './users/pages/HomePage';
import ViewProperties from './property/pages/ViewProperties'
import UserProperties from './property/pages/UserProperties';
import CreateProperty from './property/pages/CreateProperty';
import UpdateProperty from './property/pages/UpdateProperty';
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
					path='/properties/all'
					component={ViewProperties}
				/>
				<Route
					exact
					path='/properties/:uid'
					component={UserProperties}
				/>
				<Route
					exact
					path='/create-property'
					component={CreateProperty}
				/>
				<Route
					exact
					path='/update-property/:pid'
					component={UpdateProperty}
				/>
			</React.Fragment>
		);
	} else {
		routes = (
			<React.Fragment>
				<Route
					exact
					path='/'
					component={HomePage}
				/>
				<Route
					exact
					path='/properties/all'
					component={ViewProperties}
				/>
				<Route
					exact
					path='/properties/:uid'
					component={UserProperties}
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
				<Navbar />
				<main>{routes}</main>
			</Router>
		</AuthContext.Provider>
	);
};

export default App;

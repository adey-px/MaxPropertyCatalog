import { createContext } from 'react';

// Take to wrap all routes in App for auth check
export const AuthContext = createContext({
	loggedIn: false,

	login: () => {},

	logout: () => {},
});

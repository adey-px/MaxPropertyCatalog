import { createContext } from 'react';

// To wrap all routes in App for checking auth
export const AuthContext = createContext({
	loggedIn: false,
	login: () => {},
	logout: () => {},
});

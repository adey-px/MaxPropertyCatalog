import * as uuid from 'uuid';
import { validationResult } from 'express-validator';
import RaiseError from '../helpers/RaiseError.js';

//
const DUMMY_USERS = [
	{
		id: 'user1',
		name: 'Max Schwarz',
		email: 'test@test.com',
		password: 'testers',
	},
];

//
const getUsers = (req, res, next) => {
	res.json({ users: DUMMY_USERS });
};

// Register or sign up
const signup = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		throw new RaiseError(
			'Invalid inputs, please try again.',
			422
		);
	}
	const { name, email, password } = req.body;

	const hasUser = DUMMY_USERS.find(
		(u) => u.email === email
	);
	if (hasUser) {
		throw new RaiseError(
			'User already exists, try another email.',
			422
		);
	}
	const createdUser = {
		id: uuid(),
		name, // name: name
		email,
		password,
	};

	DUMMY_USERS.push(createdUser);
	res.status(201).json({ user: createdUser });
};

// Login
const login = (req, res, next) => {
	const { email, password } = req.body;

	const identifiedUser = DUMMY_USERS.find(
		(u) => u.email === email
	);
	if (
		!identifiedUser ||
		identifiedUser.password !== password
	) {
		throw new RaiseError(
			'User cannot be found, wrong credentials.',
			401
		);
	}

	res.json({ message: 'You are logged in!' });
};

// Exports
const _getUsers = getUsers;
export { _getUsers as getUsers };

const _signup = signup;
export { _signup as signup };

const _login = login;
export { _login as login };

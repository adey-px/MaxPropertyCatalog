import uuid from 'uuid/v4';
import { validationResult } from 'express-validator';

import HttpError from '../models/httpError';


const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Max Schwarz',
    email: 'test@test.com',
    password: 'testers'
  }
];

//
const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

//
const signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }
  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find(u => u.email === email);
  if (hasUser) {
    throw new HttpError('Could not create user, email already exists.', 422);
  }

  const createdUser = {
    id: uuid(),
    name, // name: name
    email,
    password
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({user: createdUser});
};

//
const login = (req, res, next) => {
  //
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find(u => u.email === email);

  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError('Could not identify user, wrong credentials.', 401);
  }

  res.json({message: 'You are logged in!'});
};

//
const _getUsers = getUsers;
export { _getUsers as getUsers };

const _signup = signup;
export { _signup as signup };

const _login = login;
export { _login as login };
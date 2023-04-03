import { Router } from 'express';
import { check } from 'express-validator';
import {
	getUsers,
	signup,
	login,
} from '../controllers/userContr.js';
/*
*/
const router = Router();

// Register new user
router.post(
	'/signup',
	[
		check('name').not().isEmpty(),
		check('email')
			.normalizeEmail() // Test@test.com => test@test.com
			.isEmail(),
		check('password').isLength({ min: 6 }),
	],
	signup
);

// Login user
router.post('/login', login);

// Read or get all users
router.get('/', getUsers);

export default router;
import { Router } from 'express';
import { check } from 'express-validator';


//
const userCtr = require('../controllers/userControl');

//
const userRoute = Router();

//
userRoute.get('/', userCtr.getUsers);

//
userRoute.post('/signup',
  [
    check('name')
      .not()
      .isEmpty(),

    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password').isLength({ min: 6 })
  ],
  userCtr.signup
);

userRoute.post('/login', userCtr.login);


export default userRoute;
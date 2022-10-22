import { Router } from 'express';
import { check } from 'express-validator';


const placeCtr = require('../controllers/placeControl');

const placeRoute = Router();

//
placeRoute.get('/:pid', placeCtr.placeById);

//
placeRoute.get('/user/:uid', placeCtr.placesByUser);

//
placeRoute.post('/',
  [
    check('title')
      .not()
      .isEmpty(),

    check('description').isLength({ min: 5 }),
    check('address')
      .not()
      .isEmpty()
  ],
  placeCtr.createPlace
);

//
placeRoute.patch('/:pid',
  [
    check('title')
      .not()
      .isEmpty(),
      
    check('description').isLength({ min: 5 })
  ],
  placeCtr.updatePlace
);

//
placeRoute.delete('/:pid', placeCtr.deletePlace);


export default placeRoute;
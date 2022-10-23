import { Router } from 'express';
import { check } from 'express-validator';


const placeContr = require('../controllers/placeContr');
// import placeContr from '../controllers/placeContr'

const placeRoute = Router();

//
placeRoute.get('/:pid', placeContr.placeById);

//
placeRoute.get('/user/:uid', placeContr.placesByUser);

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
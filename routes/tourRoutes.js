const express = require('express');
const app = express();
const router = express.Router();
const tourController = require('../controllers/tourController')

router.param('id', tourController.checkID)

app.use('/api/v1/tours', router)

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour)

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);


module.exports = router
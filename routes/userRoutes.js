const express = require('express');
const router = express.Router();
const app = express();
const userController = require('./controllers/userController')
app.use('/api/v1/users', router)

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser)

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

  module.exports = router
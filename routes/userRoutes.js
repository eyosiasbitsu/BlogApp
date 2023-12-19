
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// now use the router and the functions in the controller to route through all of the routes
router.get('/user', userController.getAllUsers)
router.get('/user/:id', userController.getUser)

router.post('/user', userController.createUser)

router.delete('/user', userController.deleteAllUsers)
router.delete('/user/:id', userController.deleteUser)

router.put('/user/:id', userController.updateUser)

module.exports = router;
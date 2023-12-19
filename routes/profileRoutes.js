
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// now use the router and the functions in the controller to route through all of the routes
router.get('/profile', profileController.getAllProfiles)
router.get('/profile/:id', profileController.getProfile)

router.post('/profile', profileController.createProfile)

router.delete('/profile', profileController.deleteAllProfiles)
router.delete('/profile/:id', profileController.deleteProfile)

router.put('/profile/:id', profileController.updateProfile)

module.exports = router;
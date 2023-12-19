
const express = require('express');
const router = express.Router();
const postViewRecordsController = require('../controllers/postViewRecordsController');

// now use the router and the functions in the controller to route through all of the routes
router.get('/postViewRecords', postViewRecordsController.getAllPostViewRecord)
router.get('/postViewRecords/:id', postViewRecordsController.getPostViewRecord)

router.post('/postViewRecords', postViewRecordsController.createPostViewRecord)

router.delete('/postViewRecords', postViewRecordsController.deleteAllPostViewRecords)
router.delete('/postViewRecords/:id', postViewRecordsController.deletePostViewRecord)

router.put('/postViewRecords/:id', postViewRecordsController.updatePostViewRecord)

module.exports = router;
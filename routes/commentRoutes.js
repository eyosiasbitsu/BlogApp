
const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

// now use the router and the functions in the controller to route through all of the routes
router.get('/comment', commentController.getAllComments)
router.get('/comment/:id', commentController.getComment)

router.post('/comment', commentController.createComment)

router.delete('/comment', commentController.deleteAllComments)
router.delete('/comment/:id', commentController.deleteComment)

router.put('/comment/:id', commentController.updateComment)

module.exports = router;
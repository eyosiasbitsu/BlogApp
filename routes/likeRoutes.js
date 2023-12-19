
const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

// now use the router and the functions in the controller to route through all of the routes
router.get('/like', likeController.getAllLikes)
router.get('/like/:id', likeController.getLike)

router.post('/like', likeController.createLike)

router.delete('/like', likeController.deleteAllLikes)
router.delete('/like/:id', likeController.deleteLike)

router.put('/like/:id', likeController.updateLike)

module.exports = router;
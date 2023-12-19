
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// now use the router and the functions in the controller to route through all of the routes
router.get('/blog', blogController.getAllBlogs)
router.get('/blog/:id', blogController.getBlog)

router.post('/blog', blogController.createBlog)

router.delete('/blog', blogController.deleteAllBlogs)
router.delete('/blog/:id', blogController.deleteBlog)

router.put('/blog/:id', blogController.updateBlog)

module.exports = router;
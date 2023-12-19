
const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');

// now use the router and the functions in the controller to route through all of the routes
router.get('/category', categoryController.getAllCategories);
router.get('/category/:id', categoryController.getCategory);

router.post('/category', categoryController.createCategory);

router.delete('/category', categoryController.deleteAllCategories);
router.delete('/category/:id', categoryController.deleteCategory);

router.put('/category/:id', categoryController.updateCategory);

module.exports = router;
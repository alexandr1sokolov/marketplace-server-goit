const express = require('express');
const categoriesRouter = express.Router();
const categoriesControllers = require('../controllers/categories/categoriesControllers');

categoriesRouter.get('/categories', categoriesControllers.getAllCategories);

categoriesRouter.get('/categories/:id', categoriesControllers.getCategoryById);

categoriesRouter.post('/categories/create', categoriesControllers.addCategory);

categoriesRouter.put('/categories/:id', categoriesControllers.editCategory);

categoriesRouter.delete('/categories/:id', categoriesControllers.deleteCategory);

module.exports = categoriesRouter;
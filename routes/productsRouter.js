const express = require('express');
const productsRouter = express.Router();
const productsControllers = require('../controllers/products/productsControllers');

productsRouter.get('/products', productsControllers.getAllProducts);

productsRouter.get('/products/:id', productsControllers.getProductById);

productsRouter.post('/products/create', productsControllers.addProduct);

productsRouter.put('/products/:id', productsControllers.editProduct);

productsRouter.delete('/products/:id', productsControllers.deleteProduct);

module.exports = productsRouter;
const mongoose = require('mongoose');
const productsFunctions = require('../../models/products/productsFunctions');
mongoose.set('useFindAndModify', false);

module.exports.getAllProducts = function (req, res) {
    productsFunctions.getAll().then(results => res.json(results))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.getProductById = function (req, res) {
    productsFunctions.getById(req.params.id)
        .then(results => results ? res.json(results) : res.status(404).json({err: 'Product not found / Продукт не найден'}))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.addProduct = function (req, res) {
    productsFunctions.add(req.body)
        .then(results => {
            console.log(results.categories);
            res.status(201).json({
                "status": "success",
                "product": {
                    "_id":`${results._id}`,
                    "name": `${results.name}`,
                    "description": `${results.description}`,
                    "price": `${results.price}`,
                    "currency": `${results.currency}`,
                    "categories": `${results.categories}`
                }
            })
            }
        )
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.editProduct = function (req, res) {
    productsFunctions.update(req.body, req.params.id)
        .then(results => results ? res.json(results) : res.status(400).json({err: 'Bad request / Неверный запрос'}))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.deleteProduct = function (req, res) {
    productsFunctions.delete(req.params.id)
        .then(results => results ? res.status(410).json(results) : res.status(400).json({err: 'Bad request / Неверный запрос'}))
        .catch(err => res.status(400).json({err: err.message}))
};

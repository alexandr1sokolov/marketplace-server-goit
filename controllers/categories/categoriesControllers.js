const mongoose = require('mongoose');
const categoriesFunctions = require('../../models/categories/categoriesFunctions');
mongoose.set('useFindAndModify', false);

module.exports.getAllCategories = function (req, res) {
    categoriesFunctions.getAll().then(results => res.json(results))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.getCategoryById = function (req, res) {
    categoriesFunctions.getById(req.params.id)
        .then(results => results ? res.json(results) : res.status(404).json({err: 'Category not found / Категория не найдена'}))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.addCategory = function (req, res) {
    categoriesFunctions.add(req.body)
        .then(results => res.status(201).json({
            "status": "success",
            "category": {
                "categories": `${results.categories}`
            }
        }))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.editCategory = function (req, res) {
    categoriesFunctions.update(req.body, req.params.id)
        .then(results => results ? res.json(results) : res.status(400).json({err: 'Bad request / Неверный запрос'}))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.deleteCategory = function (req, res) {
    usersFunctions.delete(req.params.id)
        .then(results => results ? res.status(410).json(results) : res.status(400).json({err: 'Bad request / Неверный запрос'}))
        .catch(err => res.status(400).json({err: err.message}))
};

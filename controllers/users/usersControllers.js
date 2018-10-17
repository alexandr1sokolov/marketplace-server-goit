const mongoose = require('mongoose');
const usersFunctions = require('../../models/users/usersFunctions');
mongoose.set('useFindAndModify', false);

module.exports.getAllUsers = function (req, res) {
    usersFunctions.getAll().then(results => res.json(results))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.getUserById = function (req, res) {
    usersFunctions.getById(req.params.id)
        .then(results => results ? res.json(results) : res.status(404).json({err: 'User not found / Пользователь не найден'}))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.addUser = function (req, res) {
    usersFunctions.add(req.body)
        .then(results => res.status(201).json({
            "status": "success",
            "user": {
                "name": `${results.name}`,
                "phone": `${results.phone}`,
                "password": `${results.password}`
            }
        }))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.editUser = function (req, res) {
    usersFunctions.update(req.body, req.params.id)
        .then(results => results ? res.json(results) : res.status(400).json({err: 'Bad request / Неверный запрос'}))
        .catch(err => res.status(400).json({err: err.message}))
};

module.exports.deleteUser = function (req, res) {
    usersFunctions.delete(req.params.id)
        .then(results => results ? res.status(410).json(results) : res.status(400).json({err: 'Bad request / Неверный запрос'}))
        .catch(err => res.status(400).json({err: err.message}))
};

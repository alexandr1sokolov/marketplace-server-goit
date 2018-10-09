const express = require('express');
const usersRouter = express.Router();
const usersControllers = require('../controllers/users/usersControllers');

usersRouter.get('/users', usersControllers.getAllUsers);

usersRouter.get('/users/:id', usersControllers.getUserById);

usersRouter.post('/users/create', usersControllers.addUser);

usersRouter.put('/users/:id', usersControllers.editUser);

usersRouter.delete('/users/:id', usersControllers.deleteUser);

module.exports = usersRouter;
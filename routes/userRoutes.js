const express = require('express');
const userController = require("../controllers/userController");

const route = express.Router();

route.get('/users',userController.getUsers);

route.post('/users',userController.createUser);

route.get('/users/id',userController.getUserById);

route.delete('/user/id',userController.deleteUserById);

route.put('/user/id',userController.updateUserById);

module.exports=route;
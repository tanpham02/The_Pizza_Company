const route = require('express').Router()
const usersController = require('../controller/usersController')

// GET ALL STORESSYSTEM
route.get('/', usersController.getAllUsers)

// GET A USER
route.get('/:id', usersController.getAUser)

// ADD USER
route.post('/', usersController.addUser)

// UPDATE USER
route.put('/:id', usersController.updateUser)

// DELETE USER
route.delete('/:id', usersController.deleteUser)

//SIGNUP
route.post('/register', usersController.register)

// SIGNIN
route.post('/login', usersController.login)



module.exports = route
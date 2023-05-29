const router = require('express').Router()
const usersController = require('../controller/usersController')

// GET ALL USERS
router.get('/', usersController.getAllUsers)

//GET A USER
router.get('/:id', usersController.getAUser)

// SIGN UP
router.post('/register', usersController.signUp)

// SIGN IN 
router.post('/login', usersController.signIn)

module.exports = router
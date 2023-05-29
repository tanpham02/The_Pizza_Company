const router = require('express').Router()
const typesController = require('../controller/typesController')

// GET ALL TYPES
router.get('/', typesController.getAllTypes)

// GET A TYPE
router.get('/:id', typesController.getAType)


module.exports = router
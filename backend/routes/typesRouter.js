const route = require('express').Router()
const typesController = require('../controller/typesController')

// GET ALL TYPES
route.get('/', typesController.getAllTypes)

// GET A TYPE
route.get('/:id', typesController.getATypes)

// ADD TYPE
route.post('/', typesController.addType)

// UPDATE TYPE
route.put('/:id', typesController.updateType)

// DELETE TYPE
route.delete('/:id', typesController.deleteType)


module.exports = route
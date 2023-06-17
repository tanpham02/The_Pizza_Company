const route = require('express').Router()
const storesSystemController = require('../controller/storesSystemController')


// GET ALL STORESYSTEMS
route.get('/', storesSystemController.getAllStoresSystem)

// GET A STORESYSTEMS
route.get('/:id', storesSystemController.getAStoresSystem)

// ADD STORESYSTEMS
route.post('/', storesSystemController.addStoresSystem)

// UPDATE STORESYSTEMS
route.put('/:id', storesSystemController.updateStoreSystem)

// DELETE STORESYSTEMS
route.delete('/:id', storesSystemController.deleteStoreSystem)

module.exports = route
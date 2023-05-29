const router = require('express').Router()
const storesSystemController = require('../controller/storesSystemController')

// GET ALLS
router.get('/', storesSystemController.getAllStoresSystem)

// GET A STORES SYSTEM
router.get('/:id', storesSystemController.getAStoresSystem)

module.exports = router

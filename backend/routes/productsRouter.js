const router = require('express').Router()
const productsController = require('../controller/productsController')


// GET ALL PRODUCTS
router.get('/', productsController.getAllProducts)

// GET A PRODUCT
router.get('/:id', productsController.getAProduct)


module.exports = router

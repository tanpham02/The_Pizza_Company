const route = require('express').Router()
const productsController = require('../controller/productsController')

// GET ALL PRODUCTS
route.get('/', productsController.getAllProducts)

// GET A PRODUCT
route.get('/:id', productsController.getAProduct)

// ADD PRODUCT
route.post('/', productsController.addproduct)

// UPDATE PRODUCT
route.put('/:id', productsController.updateProduct)

// DELETE PRODUCT
route.delete('/:id', productsController.deleteProduct)

module.exports = route
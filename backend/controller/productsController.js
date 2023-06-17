const { productsModel, typeModel } = require('../models/models')

const productsController = {
    // GET ALL PRODUCTS
    getAllProducts: async (req, res) => {
        try {
            const productsData = await productsModel.find().populate('typeId')
            res.status(200).json(productsData)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // GET A PRODUCT
    getAProduct: async (req, res) => {
        try {
            const id = req.params.id
            const product = await productsModel.findById(id).populate('typeId')
            res.status(200).json({ product })
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // ADD PRODUCT
    addproduct: async (req, res) => {
        try {
            const newProduct = new productsModel(req.body)
            if (newProduct.typeId) {
                const typeRef = await typeModel.findById(req.body.typeId)
                await typeRef.updateOne({
                    $push: {
                        productIds: newProduct._id
                    }
                })
            }
            const save = await newProduct.save()
            res.status(200).json(save)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // UPDATE PRODUCT
    updateProduct: async (req, res) => {
        try {
            const id = req.params.id
            await productsModel.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: 'Cập nhật sản phẩm thành công' })
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // DELETE PRODUCT
    deleteProduct: async (req, res) => {
        try {
            const id = req.params.id
            await productsModel.findByIdAndDelete(id)
            await typeModel.updateMany(
                { productIds: id },
                { $pull: { productIds: id } }
            )
            res.status(200).json({ message: 'Xóa sản phẩm thành công!' })
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

}

module.exports = productsController
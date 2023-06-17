const { typeModel, productsModel } = require('../models/models')

const typesController = {
    // GET ALL TYPES
    getAllTypes: async (req, res) => {
        try {
            const typesData = await typeModel.find().populate('productIds')
            res.status(200).json(typesData)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // GET A TYPE
    getATypes: async (req, res) => {
        try {
            const id = req.params.id
            const type = await typeModel.findById(id).populate('productIds')
            res.status(200).json(type)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    },

    // ADD TYPE
    addType: async (req, res) => {
        try {
            const newType = new typeModel(req.body)
            const save = await newType.save()
            res.status(200).json(save)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // UPDATE TYPE
    updateType: async (req, res) => {
        const id = req.params.id
        try {
            const type = await typeModel.findById(id)
            await type.updateOne({ $set: req.body })
            res.status(200).json({ message: 'Cập nhật danh mục thành công!' })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    },

    // DELETE TYPE
    deleteType: async (req, res) => {
        try {
            const id = req.params.id
            await typeModel.findByIdAndDelete(id)
            await productsModel.updateMany(
                { typeId: id },
                { $set: { typeId: null } }
            )
            res.status(200).json({ message: 'Xóa danh mục thành công!' })
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
}

module.exports = typesController
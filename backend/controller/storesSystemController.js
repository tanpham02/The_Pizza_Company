const { storesSystemModel } = require('../models/models')

const storesSystemController = {
    // GET ALL STORESYSTEMS
    getAllStoresSystem: async (req, res) => {
        try {
            const storesSystem = await storesSystemModel.find()
            res.status(200).json(storesSystem)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // GET A STORESYSTEMS
    getAStoresSystem: async (req, res) => {
        try {
            const id = req.params.id
            const storeSystems = await storesSystemModel.findById(id)
            res.status(200).json(storeSystems)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // ADD STORESYSTEMS
    addStoresSystem: async (req, res) => {
        try {
            const storesSystem = new storesSystemModel(req.body)
            const save = await storesSystem.save()
            res.status(200).json(save)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // UPDATE STORESYSTEMS
    updateStoreSystem: async (req, res) => {
        try {
            const id = req.params.id
            await storesSystemModel.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: 'Cập nhật hệ thống cửa hàng thành công!' })
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // DELETE STORESYSTEMS
    deleteStoreSystem: async (req, res) => {
        try {
            const id = req.params.id
            await storesSystemModel.findByIdAndDelete(id)
            res.status(200).json({ message: 'Xóa hệ thống cửa hàng thành công!' })
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

}


module.exports = storesSystemController
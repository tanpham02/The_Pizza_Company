const { usersModel } = require('../models/models')

const usersController = {
    // GET ALL USERS
    getAllUsers: async (req, res) => {
        try {
            const users = await usersModel.find()
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // GET A USER
    getAUser: async (req, res) => {
        try {
            const id = req.params.id
            const user = await usersModel.findById(id)
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // ADD USER
    addUser: async (req, res) => {
        try {
            const newUser = new usersModel(req.body)
            const save = await newUser.save()
            res.status(200).json({ message: 'Thêm thành công!' })
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // UPDATE USER
    updateUser: async (req, res) => {
        try {
            const id = req.params.id
            await usersModel.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: 'Cập nhật thành công!' })
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // DELETE USER
    deleteUser: async (req, res) => {
        try {
            const id = req.params.id
            await usersModel.findByIdAndDelete(id)
            res.status(200).json({ message: 'Xóa thành cônng!' })
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    // SIGNUP
    register: async (req, res) => {
        const { email, phoneNumber } = req.body
        try {
            const existingUser = await usersModel.findOne({
                $or: [
                    { email: email },
                    { phoneNumber: phoneNumber }
                ]
            })

            if (existingUser) {
                return res.status(400).json({
                    message: 'Người dùng đã tồn tại',
                })
            }
            const newUser = new usersModel(req.body)
            await newUser.save()
            return res.status(200).json({ message: 'Đăng kí thành công' })
        } catch (err) {
            console.error('Error:', err)
            return res.status(500).json({ message: 'Lỗi đăng ký' })
        }
    },

    // SIGNIN
    login: async (req, res) => {
        const { phoneNumber, password } = req.body
        try {
            const usersCollection = await usersModel.findOne({
                $and: [
                    { phoneNumber: phoneNumber },
                    { password: password }
                ]
            })
            if (usersCollection) {
                return res.status(200).json({ message: 'Đăng nhập thành công!' })
            }
            return res.status(400).json({ message: 'Số điện thoại hoặc mật khẩu không chính xác!' })
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

}


module.exports = usersController
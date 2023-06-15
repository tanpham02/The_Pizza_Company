const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    }
}, { versionKey: false })

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
    },
    information: {
        type: String
    },
    size: {
        type: String
    },
    prices: {
        type: Number
    },
    urlImage: {
        type: String
    },
    typeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Types'
    }
}, { versionKey: false })

const storesSystemShema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    }
}, { versionKey: false })

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        unique: true
    },
    address: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    }
}, { versionKey: false })

const typeModel = mongoose.model('Types', typeSchema)
const productsModel = mongoose.model('Products', productsSchema)
const storesSystemModel = mongoose.model('StoresSystem', storesSystemShema)
const usersModel = mongoose.model('Users', usersSchema)

module.exports = {
    typeModel,
    productsModel,
    storesSystemModel,
    usersModel
}
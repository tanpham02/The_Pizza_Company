const { connection } = require('../connection/connectDb')

const productsController = {
    // GET ALL PRODUCTS
    getAllProducts: (req, res) => {
        const qr = `SELECT * FROM railway.products;`
        connection.query(qr, (err, result) => {
            if (err) {
                res.status(500).json(err.message)
            } else {
                res.status(200).json(result)
            }
        })
    },
    // GET A PRODUCT
    getAProduct: (req, res) => {
        const id = req.params.id
        const qr = `SELECT * FROM railway.products
        WHERE id = ${id};`
        connection.query(qr, (err, result) => {
            if (err) {
                res.status(500).json(err.message)
            } else {
                res.status(200).json(result[0])
            }
        })
    }
}


module.exports = productsController
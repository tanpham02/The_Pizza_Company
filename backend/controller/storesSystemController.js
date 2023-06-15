const { connection } = require('../connection/connectDb')

const storesSystemController = {
    //GET ALLS 
    getAllStoresSystem: (req, res) => {
        const qr = `SELECT * FROM railway.stores_system`
        connection.query(qr, (err, result) => {
            if (err) {
                res.status(500).json(err.message)
            } else {
                res.status(200).json(result)
            }
        })
    },
    // GET A STORE SYSTEM
    getAStoresSystem: (req, res) => {
        const id = req.params.id
        const qr = `SELECT * FROM railway.stores_system
        WHERE id = ${id}`
        connection.query(qr, (err, result) => {
            if (err) {
                req.status(500).json(err.message)
            } else {
                res.status(200).json(result[0])
            }
        })
    }
}

module.exports = storesSystemController
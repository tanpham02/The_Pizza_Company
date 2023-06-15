const { connection } = require('../connection/connectDb')

const typesController = {
    // GET ALL TYPES
    getAllTypes: (req, res) => {
        const newQuery = `SELECT * FROM railway.types;`
        connection.query(newQuery, (err, result) => {
            if (err) {
                res.status(500).json(err.message)
            } else {
                res.status(200).json(result)
            }
        })
    },
    // GET A TYPE
    getAType: (req, res) => {
        const id = req.params.id
        const newQuery = `SELECT * FROM railway.types Where id = ${id};`
        connection.query(newQuery, (err, result) => {
            if (err) {
                res.status(500).json(err.message)
            } else {
                res.status(200).json(result[0])
            }
        })
    }
}

module.exports = typesController
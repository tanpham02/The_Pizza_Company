const { connection } = require('../connection/connectDb')
const { use } = require('../routes/usersRouter')

const usersController = {
    //GET ALL USERS
    getAllUsers: (req, res) => {
        const qr = `SELECT * FROM the_pizza_company.users`
        connection.query(qr, (err, result) => {
            if (err) {
                res.status(500).json(err.message)
            } else {
                res.status(200).json(result)
            }
        })
    },
    //GET A USER
    getAUser: (req, res) => {
        const id = req.params.id
        const qr = `SELECT * FROM the_pizza_company.users
        WHERE id = ${id}`
        connection.query(qr, (err, result) => {
            if (err) {
                res.status(500).json(err.message)
            } else {
                res.status(200).json(result[0])
            }
        })
    },
    // SIGN UP
    signUp: (req, res) => {
        const qr = `INSERT INTO the_pizza_company.users (name, phoneNumber, address, email, password) 
            VALUES ('${req.body.name}', '${req.body.phoneNumber}', '${req.body.address}', '${req.body.email}', '${req.body.password}')`
        connection.query(qr, (err, result) => {
            if (err) {
                res.status(500).json(err.message)
            } else {
                res.status(200).json('Đăng ký thành công')
            }
        })
    },
    // SIGN IN
    signIn: (req, res) => {
        const qr = ` 
            SELECT * FROM the_pizza_company.users
            where phoneNumber = '${req.body.phoneNumber.trim()}'
        `
        connection.query(qr, (err, result) => {
            if (result.length) {
                const user = result[0]
                if (user.password === req.body.password.trim()) {
                    res.status(200).json('Đăng nhập thành công')
                } else {
                    res.status(400).json('Mật khẩu không chính xác')
                }
            } else {
                res.status(400).json('Số điện thoại không chính xác')
            }
        })
    }
}

module.exports = usersController
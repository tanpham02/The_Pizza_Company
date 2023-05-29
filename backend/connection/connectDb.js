const MySql = require('mysql2')
const dotEnv = require('dotenv')
dotEnv.config({ path: '.env' })

const connection = MySql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    multipleStatements: true
})

const connectDb = async () => {
    const conn = connection.connect((err) => {
        if (err) {
            console.log(`Connection MYSQL failure with ${err}`)
            return
        }
        console.log(`Connection MYSQL successfully`)
    })
    return conn
}

module.exports = { connectDb, connection }
const MySql = require('mysql2')
const dotEnv = require('dotenv')
dotEnv.config({ path: '.env' })

const connection = MySql.createConnection({
    host: process.env.RAILWAY_MYSQL_HOST,
    port: process.env.RAILWAY_MYSQL_PORT,
    user: process.env.RAILWAY_MYSQL_USER,
    password: process.env.RAILWAY_MYSQL_PASSWORD,
    database: process.env.RAILWAY_MYSQL_DATABASE,
    multipleStatements: true,
})


const connectDb = async () => {
    const conn = connection.connect((err) => {
        if (err) {
            console.log(`Connection MYSQL failure with ${err}`)
            return process.exit(1);
        }
        console.log(`Connection MYSQL successfully`)
    })
    return conn
}

module.exports = { connectDb, connection }
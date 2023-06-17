const mongoose = require('mongoose')
const dotenv = require('dotenv')
const MONGO_URL_CLOUD = "mongodb+srv://thepizzacompany:thepizzacompany123@cluster0.tqwu0qn.mongodb.net/ThePizzaCompany?retryWrites=true&w=majority"
const MONGO_URL_LOCAL = "mongodb://localhost:27017/ThePizzaCompany"

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(
            MONGO_URL_LOCAL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        console.log(`Connect to MongoDB success with ${conn.connection.host}`)
    } catch (err) {
        console.log(`Connect MongoDB failure with ${err}`)
        process.exit(1)
    }
}

module.exports = connectDb
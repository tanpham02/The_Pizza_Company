const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(
            "mongodb+srv://thepizzacompany:thepizzacompany123@cluster0.tqwu0qn.mongodb.net/ThePizzaCompany?retryWrites=true&w=majority",
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
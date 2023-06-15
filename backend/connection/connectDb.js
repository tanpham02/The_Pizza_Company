const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL_CLOUD, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Connect to MongoDB success with ${conn.connection.host}`)
    } catch (err) {
        console.log(`Connect MongoDB failure with ${err}`)
        process.exit(1)
    }
}

module.exports = connectDb
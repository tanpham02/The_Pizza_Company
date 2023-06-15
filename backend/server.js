const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const dotEnv = require('dotenv')
const app = express()
const { connectDb } = require('./connection/connectDb')
const typesRouter = require('./routes/typesRouter')
const productsRouter = require('./routes/productsRouter')
const usersRouter = require('./routes/usersRouter')
const storesSystemRouter = require('./routes/storesSystemRouter')

dotEnv.config({ path: '.env' })
const PORT = process.env.PORT || 8081

app.use(bodyParser.json())

app.use(cors())

app.use(morgan('dev'))

//CONNECT DB
connectDb()

// ROUTES
app.use('/api/types', typesRouter)
app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter)
app.use('/api/storesSystem', storesSystemRouter)

app.listen(PORT, () => {
    console.log(`Server run with http://${process.env.RAILWAY_MYSQL_HOST}:${PORT}`)
})

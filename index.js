const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoure = require('./routes/users')
const authRoure = require('./routes/auth')

dotenv.config()

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

// middleweare
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use('/api/users', userRoure)
app.use('/api/auth', authRoure)

app.listen(8800, () => {
    console.log("server is running..")
})
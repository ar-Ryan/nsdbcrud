const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.use(express.static('public'))

app.use(express.json())

// Mongoose Connection
mongoose.connect("mongodb+srv://admin:rajgraj031@cluster0.cj8meov.mongodb.net/taskDefender?retryWrites=true&w=majority")
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to database'))

app.get('/', (req, res) =>{
    // res.send('<h1>Hello, World!</h1>');
    // console.log("hello")
})



// UserRoutes



// taskRoutes


app.listen(5000, () => console.log("server has started at 5000"))
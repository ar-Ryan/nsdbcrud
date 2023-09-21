const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskId: String,
    title: String,
    desc: String,
    dateOfCreation: String,
    userName: String
})

module.exports = mongoose.model('taskData', taskSchema)


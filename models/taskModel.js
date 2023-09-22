const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskId:{type:String,unique:true,required:true},
    title:{type:String,required:true},
    desc:{type:String},
    dateofCreation:{type:String},
    useremail: {type:String}
})

module.exports = mongoose.model('taskData', taskSchema)


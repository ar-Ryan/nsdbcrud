const express = require('express')
const app = express()
const mongoose = require('mongoose')

const taskData = require('./models/taskModel')

app.use(express.json())

// Mongoose Connection
mongoose.connect("mongodb+srv://admin:rajgraj031@cluster0.cj8meov.mongodb.net/taskDefender?retryWrites=true&w=majority")
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to database'))

app.get('/', (req, res) =>{
    res.send('<h1>Hello, World!</h1>');
    console.log("hello")
})

app.post('/createtask', async (req, res) => {
    const { taskId, title, desc, dateOfCreation, userName } = req.body;

    try {
        const taskResponse = await taskData.create({
            taskId: taskId,
            title: title,
            desc: desc,
            dateOfCreation: dateOfCreation,
            userName: userName
        });

        if (taskResponse && taskResponse._id) {
            res.status(201).json({ message: 'Task created successfully' });
        } else {
            res.status(404).json({ message: 'Task not created' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// app.post('/createtask', async(req, res) =>{

// })

// app.put('updatetask', async (req, res) =>{
    
// })

// app.delete('deletetask', async (req, res) =>{

// })



app.listen(5000, () => console.log("server has started at 5000"))
const taskData = require('./models/taskModel')

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
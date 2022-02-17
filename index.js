const express = require ('express');
const cors = require ('cors');
const{getTasks} =require('./src/tasks');
const PORT= process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

//routes
// app.post('/tasks',createTask);
app.get('/tasks',getTasks);
// app.patch('/tasks/:taskId',updateTask);





app.listen(PORT,() =>{
    console.log('listening on port:',PORT)
});
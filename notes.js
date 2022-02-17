//create a firebase much-todo project
// Make folder much-todo in terminal
// Make folder in much-to-do called much-todo-api
// -pwd to check folder
// -git init 
// -npm init -y
// -npm I express cors firebase-admin(install all 3)
// -code .
// - file for .gitignore w node_mod and credentials
// -index.js import express and cors
// in index.js create express app tell app to use cors app.use(cors())
//index.js for post or patch request tell app.use to send it in json 
//app.listen on index.js on bottom and create a const port ontop to define it
//set up routes index.js to post an item app.post('/tasks',)
//name ur function to name a task in index.js -createTask (which is undefined atm)
//app.get ('/tasks) in index.js for single user which we will change w getTasks function by user
//index.js mark an item as done by doing app.patch('/tasks/')1 item at a time as done so we do ":taskId"
//we use a : in taskId so we can have a bunch of items put in and function updateTask
//create a folder called src where we keep our "library" or "our node modules"
//create 2 files in src 1 to connect to database and 1 file for task functions
//tasks.js need to create the 3 functions from index.js
//tasks.js exports.createTask =()=> {}
//tasks.js pass 2 parameters req,res
// create exports.etc w req,res for 3 on tasks.js from index.js
// in tasks.js and index.js comment out update tasks and create tasks
// start w get tasks to test on tasks.js by adding response.send('get tasks is working') and in index.js add const{getTasks} =require('./src/tasks')
//add http://localhost3000/tasks on botom of tasks.js to check and node .
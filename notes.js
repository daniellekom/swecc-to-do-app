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
//add file in src connectDb.js to connect to database
//go back to firestore project and go to cog(wheel)go to project settings and service accounts
//generate a key and make it a credentials.json folder and then create code in connectDb.js
//anytime we want to connect to firestore look at connectDB.js
//in tasks.js import function const {connectDB}= require('./connectDB')
//in tasks.js add const db = connectDB() to reference firestore
// to get tasks from collection add db.collection('tasks').get().then .catch
//remove response.send from tasks.js for get tasks and add const taskList = snapshot.docs.map()
//we are now getting the "entire" collection from tasks which now is only 1 task
//task.js let task= doc.data() and task.id =doc.id return task
//map always needs a return we are shaping it and then returning task from doc in task.js
//we are pretty much getting back an empty array in tasks.js
//uncomment out exports.createtask in tasks.js and add const newTask = request.body;
//and connect to database in tasks.js for createtask by doing const db=connectDb()
//underneath add  db.collection('tasks').add(newTask) .then(etc) .catch(err=> etc)
//go to index.js and import createTask anext to getTasks and uncomment createTask and check postman
//uncomment patch as well in index.js
//uncomment tasks.js last line exports.updateTask and create a const {taskId} =request.params
//saying grab the taskid from those params in index.js
//and continue filling in on bottom ending in .then and .catch for a promise
//this makes API good to go!
//now we want to put it up in the cloud console.cloud.google.com and search cloud build API and manage it w enabling apps and services etc
//gcloud config set project much-todo-dk in terminal
//create an app yaml file and in terminal gcloud app deploy
//much-todo npx create-react-app much-todo-web inside much-todo
//if u type open . it opens folders from terminal. like code . but for folders
//cd into  much-todo-web
//use library ant.design
//
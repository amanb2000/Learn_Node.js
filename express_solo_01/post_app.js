const express = require('express');
var app = express();


app.use(express.json()); //adding middleware to ________

courses = [
  {id: 1, name: 'MAT195'},
  {id: 2, name: 'ECE159'}
]

app.post('/api/courses', (req, res)=>{
  if(!req.body.name || req.body.name.length <3){
    // 400 bad request
    res.status(400).send('Name is required, needs to be 3 characters long');
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  }
  console.log('course: ' + course);
  courses.push(course);
  res.send(course); //convention to send back the course object to client (think about knowing the ID)
});

app.get('/api/courses', (req, res)=>{
  res.send(courses);
})

app.listen(1500);

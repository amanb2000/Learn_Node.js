const express = require('express'); //express is a function
const app = express(); // return value of the express function
const Joi = require('joi');

app.use(express.json()); // this lets us parse strings to json in posts...

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/courses', function(req, res){
  res.send([1, 2, 3]);
});

// Now we get a singular course: endpoint should be like /api/courses/1 for the first course
// below, :id is a PARAMETER
// We access parameters with req.params.__ where __ is the name of the parameter.

app.get('/api/coursesss/:id', (req, res) => {
  // res.send(req.params.id);
  res.send(req.query);
})

// req.params is a json object where each parameter is a sub-element.

// QUERY STRING PARAMETERS:
// Used for any data that's optional
// looks like localhost:3000/api/courses?sortby=name


// More developed idea:

let courses = [
  {id: 1, name: 'ESC102'},
  {id: 2, name: 'CSC190'},
  {id: 3, name: 'MAT195'},
  {id: 4, name: 'ECE159'},
  {id: 5, name: 'MSE160'},
  {id: 6, name: 'MAT185'}
];

app.get('/api/courses/:id', (req, res) => {
  // res.send(req.params.id);
  // const course = courses.find(c => c.id === parseInt(req.params.id)); // this is just a way to find
  const IDE = parseInt(req.params.id);

  for(let i = 0; i < courses.length; i++){
    if (IDE === courses[i].id){
      res.send(courses[i]);
    }
  }
  res.status(404).send('404: Could not find course');

});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});
//////////////////////
// NOW for posting! //
//////////////////////
app.post('/api/courses', (req, res) => { // request and response
  // First: we need to validate the input. This would be the logic, but we want
  // to use a normal person way of INPUT VALIDATING
  // if(!req.body.name || req.body.name.length < 3){
  //   res.status(400).send('Bad request: Name of course was too small or did not exist');
  //   console.log(req.body)
  //   return;
  // }

  else{
    let course_01 = {
      id: courses.length + 1,
      name: req.body.name
    };

    courses.push(course_01);
    res.send(course_01); // conventional to do this: you return the thing you added to the DB
  }
});




// Port is usually dynamically assigned in real-world applications.
const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on port ${port}`));

// How to set the environment Port variable:
// $export PORT=3000
// the above is in the command line

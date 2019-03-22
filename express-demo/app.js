const express = require('express'); //express is a function
const app = express(); // return value of the express function

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/courses', function(req, res){
  res.send([1, 2, 3]);
});

// Now we get a singular course: endpoint should be like /api/courses/1 for the first course
// below, :id is a PARAMETER
// We access parameters with req.params.__ where __ is the name of the parameter.
app.get('/api/courses/:id', (req, res) => {
  // res.send(req.params.id);
  res.send(req.query);
})
// req.params is a json object where each parameter is a sub-element.

// QUERY STRING PARAMETERS:
// Used for any data that's optional
// looks like localhost:3000/api/courses?sortby=name


// More developed idea:

const courses = [
  {id: 1, name: 'ESC102'},
  {id: 1, name: 'CSC190'},
  {id: 1, name: 'MAT195'},
  {id: 1, name: 'course04'},
];

app.get('/api/courses/:id', (req, res) => {
  // res.send(req.params.id);
  res.send(req.query);
})


// Port is usually dynamically assigned in real-world applications.
const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on port ${port}`));

// How to set the environment Port variable:
// $export PORT=3000
// the above is in the command line

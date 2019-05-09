const Joi = require('joi');
const express = require('express');
const app = express();

people = [
  {id:1, name: 'Aman'},
  {id:2, name: 'Hersh'}
];

app.use(express.json());

app.post('/api/people', (req, res)=>{
  const schema = {
    name: Joi.string().min(3).required()
  }
  const result = Joi.validate(req.body, schema);

  // res.send(result);

  if(result.error){
    res.status(400).send(result.error);
    return;
  }

  new_hecker = {
    id: people.length + 1,
    name: req.body.name
  }

  people.push(new_hecker)

  res.send(new_hecker);

});

app.get('/my_peeps', (req, res)=>{
  res.send(people);
})

app.listen(3000);

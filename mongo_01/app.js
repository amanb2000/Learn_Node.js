const mongoose = require('mongoose');

//connection string - when deploying to production,your connection string will
//come from a configuration file. the first time you try to connect, it
//will make the db if DNE.

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...',  err))


//Each collection is like an SQL table, each document = set of key-value pairs, like a row in table.
//Mongoose schema's allow you to specifythe shape of each document.

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: {type: Date, default: Date.now},
  isPublished: Boolean
});

//Now we compile it into a model: 

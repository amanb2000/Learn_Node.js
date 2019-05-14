

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

//Now we compile it into a model: models are like classes that we can actually use.

const Course = mongoose.model('Course', courseSchema) //arg1 = singular name for collection this is for


async function createCourse(){
  const course = new Course({
    name: 'TAT192',
    author: 'Tim Vavis',
    tags: ['typing', 'useless', 'aman hecks'],
    isPublished: true //no need to define date because we have a default above
  });

  //NOW TO SAVE THE DOCUMENT
  //This is an asynchronous operation :/

  const result = course.save();
  console.log(result);

}

createCourse();


// Now to query some documents!

async function getCourses() {
  const courses = await Course
    .find({author:'Jim Davis', isPublished: true}) // getting all courseSchema
    .limit(10)
    .sort({ name: 1 }) //sort name: 1 = ascending, -1 = descending
    .select({ name: 1, tags: 1 }); // select name: 1 is just how you select that you only want those two fields.
  console.log(courses);
}

getCourses();

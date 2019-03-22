const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;

const dbname = "crud_mongodb";

const url = "mongodb://localhost:27017";
const mongoOptions = {useNewUrlParser : true}

const state = {
  db : null // signifies we don't have a database yet (by defulat)
};

const connect = (cb) =>{
  if(state.db){
    cb();
  }
  else{
    MongoClient.connect(url, mongoOptions, (err, client)=>{
      if(err){
        cb(err);
      }
      else{
        state.db = client.db(dbname);
        cb();
      }
    });
  }
}

const getPrimaryKey //... We are at 8:50 in https://www.youtube.com/watch?v=CyTWPr_WwdI

// Run scripts via node script_name.js
console.log("hello world");

// Every global variable is under object global
const mess = 5; // not added to global by default... only scoped to this file
global.mess = 6;
console.log("Message: " + global.mess); //this will be 6!

//however if I don't say var or const infront of a definition, it IS globally scoped!

mess_2 = 7;
console.log("Message_2: " + global.mess_2);

mult = function(num1, num2){
  return num1*num2;
}

console.log("Product of 1 and 2: " + global.mult(1, 2));


// Module System: Each function, file, etc. is a module. You have local scope
// unless stated otherwise. Don't be an idiot and name two different functions
// under the same name in multiple different modules, otherwise you will be
// confused.
console.log("==================\n")
console.log(module) // Every file is a module, every function and variable is
                    // at default scoped to that module.

console.log("==================\n")
const lib_module = require('./lib.js') //let's you get stuff from other files -
  // not available in regular js. you can also just say './lib'
  // *remember: use CONST when requiring - otherwise you might overwrite them.

lib_module.sayHello(); // It works! This is how you get functions from other files.

//TODO: Look into jshint - can tell what's going wrong with your code.
console.log("\n==================")
console.log("USEFUL BUILT-IN MODULES")
console.log("==================\n")

console.log("1. Path module (useful for working with paths of files without "
  + "doing messy string stuff)");
const path = require('path') // not having a ./path or ../path makes it look
                             // for built-in modules

var pathObj = path.parse(__filename);

console.log("This is the parsed verison of the __filename object: ")
console.log(pathObj);

console.log("2. OS Module");
const os = require('os')
console.log("This is the CPU architecture of this computer: " + os.arch());
console.log("This is the amount of free memory on this computer"
  + " (in bytes): " + os.freemem())

console.log(os.networkInterfaces() );

console.log("3. File System Module");

const fs = require('fs');
//Almost all the methods in the fs module have a Synchronous version
  // Generally avoid these. They are just there for simplicity.
  // They're very slow for large-scale enterprises.

const files = fs.readdirSync('./') // This gets the files in the current folder.
console.log(files);

// Below is the asynchronous version. It always takes one extra argument: the
// callback function. When this particular thread is done running, it calls that function.
const files_async = fs.readdir('./', function(err, files) {
  if (err) console.log("Error", err);
  else console.log(files);
})

console.log("This will likely come before the return of the asynchronous file system call")


console.log("\n==================")
console.log("HTTP AND EVENTS")
console.log("==================\n")

// Event is a signal that something has happened.
// E.g. listen on a web port, HTTP class will listen for the Event
// of something happening on that particular port.

const EventEmitter = require('events'); // UpperCasing means that it's a class,
                                        // not an object
const emitter = new EventEmitter(); // making an instance of the EventEmitter class

// usually uou only use two methods: emit and __

emitter.emit("Message logged"); // Procuding a signal, telling this that
                                // an event has happened.

// Nothing happened just now because you need to register a listener for an
// event: It's a function that's called whenever the emission is raised.

// emitter.addListener() is the same as emitter.on()
emitter.on("Message logged", function(){
  console.log("MESSAGE LOGGED!!")
})

// Now if we emit the message, it will call that function we defined above!
emitter.emit("Message logged")

// It is often useful to send data about an event that you raise. Here's how.

emitter.on("HELP!", function(arg){
  console.log("Help sent, "+ arg.id)
  // console.log(arg)
})

emitter.emit("HELP!", {id:1, fourty:'hi'})

// EXTENDING EventEmitter:

// Essentially: If you use the EventEmitter class in multiple modules, you'll
// end up not being able to emit messages to an event listener in another class
// because there will be different instances of the EventEmitter class.
// Here's how to fix it:

const Logger = require("./logger");
const logger = new Logger();

logger.on("message_logged", function(arg){
  console.log("Here's the arg: ", arg);
  console.log("Also message_logged");
})

logger.log("message_logged", {yeet:"yote"} );

// RECAP:
// If you want to raise events in app, create a class that extends eventemitter.
// Whenever you want to raise an event, use this.emit('message', args);
// IN the main module, you'll use an instance of Logger custom class.

var secret_num = 69;

function sayHello(){
  console.log("Hello World (from a function!)");
}

// by default, the function and the variable are scoped to just this module.
// let's change that.

// one of the properties in the module object is 'exports'. We're gonna add these
// to them.

module.exports.sayHello = sayHello;
module.exports.num = secret_num;

//now we can see it from the outside!

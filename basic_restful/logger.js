const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(message){ // don't need to say 'function log(){ }' because it's in a class
    if(message === "message_logged"){
      this.emit('message_logged');
    }
    else{
      this.emit('death');
    }
  }

  log(message, arg){
    this.emit(message, arg);
  }
}

module.exports = Logger;

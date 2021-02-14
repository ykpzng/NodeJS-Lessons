

const events = require('events');
const eventEmitter = new events.EventEmitter();

function message(msg) {
  console.log(msg);
}

eventEmitter.once('write', message);

eventEmitter.emit('write', 'Hello, How are you?');
eventEmitter.emit('write', 'Message -2...');
eventEmitter.emit('write', 'Message -3...');

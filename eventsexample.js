
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// object exposes 
// 1. on() is used to add a callback fn when an event is triggered
// 2. emit() is used to trigger an event

eventEmitter.on('start', number => {
	console.log("event start1 " + number);
});


eventEmitter.on('start', number => {
	console.log("event start2 " + number);
});

eventEmitter.on('data', number => {
	console.log("data " + number);
});

eventEmitter.emit('start', 12);
eventEmitter.emit('data', 100);
eventEmitter.emit('data', 200);
eventEmitter.emit('data', 300);

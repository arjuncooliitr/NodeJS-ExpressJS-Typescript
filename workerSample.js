const {Worker} = require('worker_threads');

let number = 34;

const worker = new Worker('./myWorker.js', {workerData: {num:number}});

worker.once('message', result => {
	console.log("Fibonacci : " + result);
});

worker.on("exit", exitCode => {
	console.log("exit ", exitCode);
});

console.log("main thread");
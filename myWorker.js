
const {parentPort, workerData} = require('worker_threads');

parentPort.postMessage(fibonacci(workerData.num));

function fibonacci(num) {
	if(num == 0 || num == 1) return num;
	else
	return fibonacci(num - 1) + fibonacci(num - 2);
}


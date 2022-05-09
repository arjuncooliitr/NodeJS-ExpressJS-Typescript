# Node.js and Typescript

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 
banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/NODE

----------------------------------------------------------

Softwares Required:
1) Visual Studio Code. [https://code.visualstudio.com/download]
2) Chrome Web Browser
3) NodeJS Latest LTS Version: 16.x.x [https://nodejs.org/en/download/]

================================

JS ==> JS engine [ V8 { Google ==> Chrome, NodeJS}, SpiderMonkey [ FireFox, Adobe], Chkra, Nashorn, ...]

NodeJS

* Platform built on V8 engine runtime
* event-driven [Thread ], non-blocking I/O model [NIO]


libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops. 
It is primarily designed for use in Node.js but it is also used by other software projects.

https://github.com/nodejs/node

event loop psuedocode

//myFile.js

const microTask = []; // PromiseAPI, async await, nextTick()

const pendingTimers = []; // macrotask ==> setTimeout, setInterval, setImmediate
const pendingOsTasks = []; // macrotask
const pendingOperations = []; // macrotask

function shouldContinue() {
	return pendingTimers.length || pendingOsTasks || pendingOperations.length ..
} 

// Running Thread 
while(shouldContinue()) {
	// is stack empty
	// 1 check all microTasks and empty it ==> push them to Stack
	// 2 check and empty all pendingTimers ==> push them to Stack
	// 3 pending OS tasks ==> Socket related, I/O callbacks ==> read chunk of data from file   ==> push them to Stack
	// 4 Pending Operations ==> close of connections , etc  ==> push them to Stack
	// pause execution
}

Tick ==> one iteration of while()

======================

myfile.js

console.log("Hello!!!");

setTimeout(function one() {
	console.log("t1");
}, 0);


setTimeout(function two() {
	console.log("t2");
}, 0);

Promise.resolve().then(function p1() {
	console.log("p1");
});

Promise.resolve().then(function p2() {
	console.log("p2");
});

console.log("Bye!!!");

=====================

https://www.jsv9000.app/


=====================================


function logA() {..}
function logB() {..}
function logC() {..}
function logD() {..}
function logE() {..}
function logF() {..}
function logG() {..}

logA();

setTimeout(logG, 0);

Promise.resolve()
.then(logB)
.then(setTimeout(logC))
.then(logD)
.then(logE);

setTimeout(logF);

==================================

process.nextTick()

Every time the event loop takes a full trip we call it as tick.

// microtask
process.nextTick(function task() {
	// do something
});


==> function executes at the end of current tick.

setTimeout(function timed() {

}, 0);

===========================================


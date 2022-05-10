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

NodeJS V8 Memory Structure
* ResidentSet
* Code Segment
 ==> JIT compiler compiles code blocks

* Heap
	1) New Generation [ SemiSpace 1, Semispace] ==> In Java ==> Surviour state 1 and Surviour state 2
	2) Old Generation
* Stack
* Large Objects [Code, MMap]


C#, JS and Java or any technology which uses Virtual machine doesn't allow pointers


node --min_semi_space_size(intial)  --max_old_space_size(max) --stack-size(size) server.js

===================================================================

nodeJs provides built-in modules crypto, fs, http, path, repl, ...

Module System:

1) IIFE ==> Immediately invoke function expression

let ShoppingModule = (function() { 
	let data = 100;
	function doTask() {

	}
	return {
		doTask
	}
})();


let paymentModule = (function() { 
	let data = 999;
	let done = false;
	function doTask() {

	}
	return {
		done,
		data,
		doTask
	}
})();

ShoppingModule.data ==> 100 // not visible
paymentModule.data ==> 999


2) CommonJS module system ==> default  module system in NodeJS

	compute.js

	module.exports.add = function(){ 
	}

	function sub() {

	}

	other.js

	let compute = require('./compute');


	can access compute.add() but not compute.sub()

3) ESM ==> ES 6 module system

export const add = function() {}

other.js

import {add} from './compute';


4) AMD
5) System
6) UMD ==> wrapper for different module system to dynamically decide which module system has to be used


* NodeJS Threads concept

* NodeJS Async Operations
Network related operations doesn't use libuv Threads

==================================================

node.js Event Emitter

=================

* fs sync
* fs callback
* fs stream based
	
Where can i use NodeJS?
1) Real time application
2) Streaming API ==> Netflix
	Squid Game chunk of data has to pushed to client; client buffers
3) Traditional Web application ==> server rendered pages
4) build RESTful Web services
5) GraphQL services

==============

npm i -g learnyounode

learnyounode

========================

Day 2

Recap:
NodeJS --> What , Why [ Non blocking I/O ]
* Event loop, V8 and libuv
* MicroTask and MacroTask Callback Queue ==> Stack
* RSS --> Heap [ New Gen {SS1, SS2}, Old Generation], Stack, Large Objects, Code Segment

* CommonJS module system 

* Threads [ libuv Thread pool ]
* Async Operations [ Network ]
* crypto module
* EventEmitter [ emit(), on("event")] ==> Observer Observable pattern
* fs module [ readFileSync(), readFile() uses callback and createReadStream() ]



Observable object will be on Heap area and will have list of observers

emit()
	for(Observer os in ObserversList) {
		os.fn();
	}

===================

ab -c 100 -n 1000 http://localhost:9000/

npx autocannon -c 100 -p 10 http://localhost:9000/


/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}


===========

What if task is CPU  intensive operation?
Run cpu intense operation on seperate thread [ not libuv thread ]

==

cluster module

or

npm install pm2 -g

pm2 start server.js -i max

pm2 restart <id> / all

pm2 delete <id> / all

pm2 monit

pm2 ps

==========================








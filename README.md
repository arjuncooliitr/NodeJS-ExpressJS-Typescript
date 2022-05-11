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
 
Debug :

node --inspect-brk server.js


chrome browser

about:inspect in addressbar

===========================================


Node Application
Package Managers:
1) NPM
installs by default along with node installation
2) YARN
npm install yarn -g
3) PNPM
npm install pnpm -g


* download 3rd party dependencies from repo
* publish to repo
* to run scripts [ start, build, test, lint]

Node by default installs NPM

myapp> npm init --y

this initializes the node project
* creates "package.json"

{
	"scripts": {
		"start": "node ./app/server.js",
		"test" : "jest / mocha / jasmine ... command",
		"build" : "webpack "
	},
	"dependencies": {
		// dependency required in production env also
	},
	"devDependencies" : {
		// required only in development stage
		// testing, lint
	}
}

AAA ==> Assemble Action Assert

npm i -D mocha chai request

JS Unit Testing Framework:
* Mocha
* Jasmine
* JEST

https://www.chaijs.com/

 "devDependencies": {
    "chai": "^4.3.6",
    "mocha": "^10.0.0",
    "request": "^2.88.2"
  }



"mocha": "10.0.0", ==> exact version 10.0.0

"mocha": "~10.0.0", ==> major version has to be 10

"mocha": "^10.0.0", ==> any version equal or greater than 10.0.0

node_modules folder is created in application having dependecies

require('module') 

* checks is it builtin node module
* checks "node_modules" folder
* checks parent "node_modules" folder ==> YARN workspaces

==========

add node_modules to .gitignore

team member downloads and runs:

npm install

=============================================



TypeScript

JS engine understands only JS ==> ECMAScript 5

ES 6 / 7, TypeScript, DART, CoffeeScript, LiveScript


TransCompilers

Babel ==> ES6/ESNext of JS to downward compatable JS

TSC ==> .ts ==> .js

npm i -g typescript

tsc a.ts ==> a.js

===

tscexample> npm i typescipt 

=======================

Typescript:
* provide an optional type system for JavaScript
JS is loosely typed and dynamically typed

var x = "a"; // x behaves like string
x.toUpperCase();
x = 10; // number
x++;

* code quality and understandability

* catch errors at compile time instead of runtime

* sort of document

----------

Basic Types
* number
* string
* boolean

let x:number = 10;

x = "Test"; //error

let name:string = "Harry";

let flag:boolean = true;


Complex Types:
* enum
* array
* object

enum Directions {
	North = 'N',
	East = 'E',
	..
}

const direction:Directions = Directions.North;

let person: {
	name:string,
	age:number
} = {
	"name" : "a",
	"age" : 33
};

type Person = {
	name:string,
	age:number
};

let person:Person = {
	"name" : "a",
	"age" : 33
}

let people:Array<Person> = ...

let people:[Person] = [
{
	"name" : "a",
	"age" : 33
},
{
	"name" : "b",
	"age" : 31
}
]

let data:[number] = [5,2,11,4];

---

Union Types:

let course:string|number = "NodeJS";

course = 21;

-----------------

npm i -g typescript

Functions

function add(a:number, b: number): void {
	console.log("Result " + (a+b));
}

function add(a:number, b:number)   {
	return a + b;
}


function add(a:number, b:number) : number | string {
	return a + b;
}


add(4,5);

//add("a", "b"); ==> error


tsc file.ts ==> file.js

node file.js

========================================

Day 3

Recap:
* NodeJS application ==> Package managers [ NPM, YARN, PNPM ], package.json {dependecies, dev-dependecies, scripts}

node_modules:
npm i package [ dependencies]
npm i -D package [ devDep]


Any executable modules install it globally
npm i -g package [ global installation] ==> users folder/AppData/roaming/npm/...
Example:
npm i -g typescript
any prompt> tsc file.ts

JS testing Framework ==> Mocha
Assertion Library ==> Chai

describe(), it(), expect()

--

TypeScript

* number
* string
* boolean
* enum
* array
* object

"any" type

let myVar:any = 10; // valid

myVar = "Good" ; //valid

myVar = false; // valid

--

"unknown" type


let myVar:unknown = 10; // valid

myVar = "Good" ; //valid

myVar = false; // valid

-------------


"any" vs "unknown"

---

function doTask(callback:any) {
	callback();
}

doTask(100);

--> RuntimeError; TypeError: callback is not a function. 100 is a nuber cannot be invoked as function...


---

"unknown" ==> need to perform type checking before using "unknown" type

function doTask(callback:unknown) {
	if(typeof callback === 'function') {
		callback();
	}
}

doTask(100);

------------------------------------

JSON ==> JavaScript Object Notation

let obj = {
	"id": 1,
	"name": "Anil",
	"age": 32
}


* Optional Properties ?

function printUser(user: {firstName:string, lastName?:string}) {

}

printUser({"firstName": "Tom", "lastName": "Alter"});
printUser({"firstName": "Thomas"});

----------------------------------------------------------------
* type


type Person = {
	name:string,
	age:number
};


* interface Type

--> to define a shape similar to "type"
--> for behaviour contract ==> Realization relationship
--> extendable


interface Person {
	name:string,
	age:number
};

interface AppUser extends Person {
	password:string
	role:string
}

--

interface Renderable {
	render();
}

interface B {
	render();
}

class DomRender implements Renderable, B {
	..
	render() {

	}
}

class TestRenderer implements Renderable {
	..
	render() {

	}
}


class NativeRenderer implements Renderable {
	..
	render() {

	}
}

-------

* "as" ==> Type Assertions


interface Person {
	name:string,
	age:number
};


3rd party js function
function getPerson() {
	return {}
}

"typescript file"
let person = getPerson();
person.name   = "";  // Property "name" does not exist on type {}
person.age   = ""; 

Solution:
let person = getPerson() as Person;
person.name   = "";  // OK

------------------

const myDiv = document.getElementById("card") as HTMLDivElement;
myDiv.innerHTML = "";

----------------------------------

* not - null Assertion Operatior (Postfix!)

Without !:

function doTask(x: string | null) {
	if(x != null) {
		console.log("Hello " + x.toUpperCase());
	}
}

with !:
function doTask(x: string | null) {
	console.log(x!.toUpperCase());
}

--

function doTask(x: string | null) {
	console.log(x.toUpperCase());
}
tsc --strictNullChecks notnull1.ts
notnull1.ts:2:14 - error TS2531: Object is possibly 'null'.

2  console.log(x.toUpperCase());
               ~
Found 1 error.

responseData!.map(user => {

});

--------------------------

TypeScript Rest Parameters ==> o to n

function getTotal(...numbers: number[]): number {
	let total = 0;
	numbers.forEach(num => total += num);
	return total;
}

console.log(getTotal()); // 0
console.log(getTotal(5,2,5)); // 12
console.log(getTotal(100)); // 100

Without Rest Parameters:

function getTotal(numbers: number[]): number {

}

console.log(getTotal([])); // 0
console.log(getTotal([5,2,5])); // 12
console.log(getTotal([100])); // 100

====
// VARargs
function insert(msg:string, ...data:number[]) {

}

======

let data = [5,2,6,11,46,2];

let [v1,...others] = data;

======================================


! avoids not null assertions ==> to tell compiler i am sure that data is not null

data? ==> do this operation if not null

function doTask( ) {
	let x:string|null = null;
	console.log(x?.toUpperCase());
}

doTask();

========================


Function types:

let add:(x:number, y:number) => number;


add = function(x: number, y: number)  {
	return x + y;
}

---

Promise API in typescript


interface User {
	id:number,
	name:string
}

// Type alias
type FetchData = (id:number) => Promise<User>

function FetchData(id:number) {
	return new Promise<User> ( (resolve, reject) => {
		setTimeout(() => {
			resolve({"id":20, "name": "Peter"});
		},2000);
 	});
}
// sync call let res = FetchData(20); 

FetchData(20).then(
	data => console.log(data),
	err => console.log("Boom :-(", err)
);


tsc --lib ES2015,dom PromiseExample.ts

==

fetch("http://jsonplaceholder.typicode.com/users")
.then(
	response => response.json()
).then(data => {

})
.then( op => {

})
.then( result => {

})

===========

npm i -g typescript

====================================

High Order Functions in TypeScript
* function accepting function as argument
* function returning a function


let data = [6,3,2,11];

for(i = 0; i< data.length; i++) {
	console.log(data[i]);
}

for(i = 0; i< data.length; i++) {
	alert(data[i]);
}

HOF forEach

function forEach(elems, action) {
	for(i = 0; i< elems.length; i++) {
		action(elems[i]);
	}
}

forEach(data, console.log);
forEach(data, alert);


===

tsexample> tsc --init

creates tsconfig.json

 "outDir": "dist", 
  "lib": ["ES2015"]

 "sourceMap": true, ==> a.ts ==> a.map.js ==> a.js

=======

Generic Functions

npm run build
npm start
























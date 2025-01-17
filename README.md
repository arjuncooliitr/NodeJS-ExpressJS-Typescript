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

==

CamelCase ==> forEach, MonogdbConnection

interface, class, type ==> should start with UpperCase

Functions, variables ==> should start with lowercase

module of functions ==> lowercase

=========================

similar to filter HOF, create map() HOF
filter() ==> subset

Task to be done:

map() ==> transform the data
input:
 {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
    {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}

output:
["iPhone", "Onida", "OnePlus 6", "Hdmi connector", "Samsung"]

--

input:
 [5,6,2,11,4];

output:
[10, 12, 4, 22, 8];

=================================================================


* HOF => function returning a function ==> Closure

Closure ==> returned function can access all the members of outer function

function adder(base, value) {
	return base + value;
}

adder(5,2);
adder(5,3);

--


function adder(base) {
	return function(value) {
		return base + value;
	}
}

let fiveAdder = adder(5);
fiveAdder(2);
fiveAdder(7);
fiveAdder(1);

===

React.memo() ==> HOC ==> closure

=============

Cache the computed result ==> Memoization

<number,Product>

getProduct(4) ==> Product with {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"}

<number, number>	
fibanocci

=============================

ESLint:
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

-------------

Day 4

Recap: TypeScript
* basic types ==> string, number and boolean
* enum, array, object
* type, interface
* any, unknown types
* as, ?, !
* Rest operators ==> VarArgs
* HOF, generics <>
	forEach, filter, map ==> OCP ==> Open for extension and closed for Change

export function filter<T>(elems:T[], predicate:(elem:T) => boolean): T[] {
    let result:T[] = [];
    forEach(elems, elem => {
        if(predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
}


function test<T>(elem:T) {

}

test("a"); // T acts like string
test(10); // T acts like number

function merge<U, V> (obj1: U, obj2: V) {
	return {
		...obj1,
		...obj2
	}
}

let person = merge( {"name": "Jack"}, {"age": 25});

person will have {name: "Jack", "age": 25}

let p = merge({"name": "Jack"}, 25); // works



function merge<U extends object, V extends object> (obj1: U, obj2: V) {

==========================================

Product, Mobile is a Product, Tv is Product

function print<T extends Product>(elem:T) {

}

to print i can pass only Product or Mobile or Tv

================================================

Task ==> map()

=====================
ES 6 supports class

Typescript
* class

class Book {
	title:string; // instance variable
	price:number; // instance variable

	constructor(title:string = "", price:number = 0.0) {
		this.title = title;
		this.price = price;
	}

	// instance method
	getTitle() {
		return this.title;
	}

}

let b = new Book();

let b1 = new Book("typescript", 1200.00); ==> memory is allocated for title and price
let b2 = new Book("express", 4200.00); ==> memory is allocated for title and price
 
b1.getTitle(); // context is "b1" ==> within getTitle() "this" refers to b1

"this" => context

all fields and methods are "public" by default



class Book {
	private title:string; // instance variable
	private price:number; // instance variable

	constructor(title:string = "", price:number = 0.0) {
		this.title = title;
		this.price = price;
	}

	// instance method
	getTitle() {
		return this.title;
	}

}


let b1 = new Book("typescript", 1200.00); ==> memory is allocated for title and price
let b2 = new Book("express", 4200.00); ==> memory is allocated for title and price
 
b1.getTitle(); // is valid

console.log(b1.title); // error ==> title is private

console.log(b1["title"]); // accessable  ==> even if title is private

==

ES 6 introduced # to declare private fields

class Book {
	 #title:string; // private instance variable
	 private price:number; // instance variable

	constructor(title:string = "", price:number = 0.0) {
		this.#title = title;
		this.price = price;
	}

	// instance method
	getTitle() {
		return this.#title;
	}

}


let b1 = new Book("typescript", 1200.00); ==> memory is allocated for title and price
let b2 = new Book("express", 4200.00); ==> memory is allocated for title and price
 
b1.getTitle(); // is valid

console.log(b1.#title); // error ==> title is private

console.log(b1["#title"]); // error ==> title is private

=================

class Book {
	// instance var declare and intialize
	constructor(private title:string, private price:number = 0.0) {}
	// instance method
	getTitle() {
		return this.#title;
	}
}

============

class Product {
	constructor(public id:number, public name: string) {}
}

// inheritance
class Mobile extends Product {
	connectivity:string;
	constructor(id:number, name:string, con:string) {
		super(id,name); // chain to base class constructor
		this.connectivity  = con;
	}
}

let m = new Mobile(12,"iPhone", "4G");

==================

keyword: ==> "protected" ==> private to class and inherited class

==============================================

abstract class Product {
	constructor(public id:number, public name: string) {}
	getName() {
		return this.name;
	}
	abstract isExpensive():boolean;
}

let p1 = new Product(3,"Pixel2"); // error can't instante abstract class


class Mobile extends Product {
	connectivity:string;
	constructor(id:number, name:string, con:string) {
		super(id,name); // chain to base class constructor
		this.connectivity  = con;
	}
	isExpensive(): boolean {
		logic and return boolean type
	}
}

let m = new Mobile(12,"iPhone", "4G");
m.getName(); // valid
m.isExpensive(); 

================================================
static ==> class member

class BankingAccount {
	private static count:number = 0; // class variable
	constructor(private id:number, private name:string) {
		count++;
	}

	static getCount() {
		return count;
	}
}

console.log(BankingAccount.getCount()); // 0

let b1 = new BankingAccount(33,"a");
console.log(BankingAccount.getCount()); // 1
let b2 = new BankingAccount(34,"b");
console.log(BankingAccount.getCount()); // 2

====================================================

JavaScript modules in Typescript

1) npm i lodash

chart.js, nvd3.js

installs js library in node_modules

create src/typings.d.ts

declare module 'lodash' {
    export function random(min:number, max:number): number
}


index.ts
import {random} from 'lodash';

console.log(random(1,100));

2) Scenario where lodash is included as <script></script> in index.html

declare var random:any
console.log(random(1,100));

3) install typedefinitions
npm i @types/lodash -D

======

NodeJs modules using TS

npm i -D @types/node


server.ts

import fs, {ReadStream} from 'fs';
import {createServer, Server, IncomingMessage, ServerResponse} from 'http';

const server:Server = createServer((request:IncomingMessage, response: ServerResponse) => {
    switch(request.url) {
        case "/file" :
            const stream:ReadStream = fs.createReadStream("./src/server.ts");
            stream.on("data", (chunk:string) => {
                response.write(chunk);
            });
            stream.on("end", () => {
                response.end();
            });
            break;
        case "/":
            response.end("Hello World!!!");
    }
});

server.listen(1234);

===============================================
 // "allowJs": true,

Employee.js

export class Employee {

}


index.ts

import {Employee} from 'Employee';

=====================================================

Testing of "ts" files
JS unit testing libraries: mocha, jest, jasmine

npm i jest @types/jest ts-jest -D

============

import axios from 'axios';
const mockAxios = jest.mock(axios);

========================

Static code analysis ==> linting

ESLint, TSList [ no longer supported]

npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin


https://eslint.org/docs/rules/


Decorators ==> @ ==> Decorator Design Pattern
Angular, Mobx,

@Component({
	"selector": "card",
	"stleyUrl":
	"templateUrl" : './card.html'
})
class ProductComponent extends Component {
	products:Product[];
	addProduct() {}
}

@Component({
	"selector": "card",
	"styleUrl":
	"templateUrl" : './card.html'   <card/></card>
})
class CustomerComponent extends Component {
	customers:Customer[];
	
}

Mobx
@observable
public class Product {}

============

@Required()
private firstName:string;

@Required()
private lastName:string;

=============================================

Decorators are functions

function sealed(target:any) {
	Object.seal(target); // not allow any new fields / properties to be added to target
}

@sealed
class Product {
	id
	name
}

let p = new Product(...)


--

let p = {"id": 1, "name": "test"};

at runtime

p.price = 2222; // supports

Object.seal(p); // p.price = 2222; ==> ignored

==

{}

Commonly we write decorators as HOF with closure ==> Decorator factory

===============================
@Course({
	subject: "ExpressJS"
})
class Student {
	firstName
	lastName
}




student will have firstName, lastName and subject

===================


export function Course() {
    return function(target:any) {
        Object.defineProperty(target.prototype, "subject", {"value": "ExperssJS"})
    }
}

@Course()
class Student {
	firstName
	lastName
}

====================

function Student(fn, ln) {
	this.firstName = fn;
	this.lastName = ln;
}

Student.prototype.getName = function() {
	return this.firstName;
}



========


export function Course(config:any) {
    return function(target:any) {
        Object.defineProperty(target.prototype, "subject", {"value": config.name})
    }
}

@Course({
	name: 'NodeJS'
})
class Student {
	firstName
	lastName
}

==

class Some {
	get firstName() {
		return "test";
	}

	set firstName(a) {}
}

let s = new Some();
console.log(s.firstName); // get
s.firstName = "Ashok"; // set

===================================

https://www.typescriptlang.org/docs/handbook/decorators.html

==========

ExpressJS + MongoDB

MERN or MEAN

MongoDB
Express
React / Angular
Node

Docker Desktop

docker run --name some-mongo -d mongo:latest -p 27017:27017

docker cp employees.json some-mongo:/tmp/employees.json

docker exec -it some-mongo bash

# mongoimport --db sales_db --collections employees --file tmp/employees.json


============================

Day 5

Day 4: ==> Typescript, using JS in TS, JEST unit testing framework, class, Decorators

"ts-node"
npm i -g ts-node
ts-node script.ts

OR

npx ts-node script.ts

----

TSDX

npx tsdx create myproject

-------------------------------------------

https://createapp.dev/ ==> for scaffolding code 

---------------------------------------------------

JavaScript build tools
* Grunt == gruntfile.js
* Gulp == gulp
* Webpack == webpack.config.js

Automate running scripts ==> clean, compile, test, lint , minfify, uglify, bundle ...

--------------------------------

ExpressJS

expressapp> npm init --y
expressapp> npm i typescript dotenv body-parser cookie-parser express jsonwebtoken
expressapp> npm i -D @types/body-parser @types/cookie-parser @types/express ts-node
expressapp> tsc --init

=================================

ExpressJS
* middleware framework for NodeJS
* simplify application development
1) Traditional web application
	pages are rendered on server and sent to client
	SSR ==> data [representation of documents of mongoDB or Rows of MySQL] to presentation [ HTML]
2) Serve static pages
3) Build RESTful web services [ CSR ]
	representation of data is served to clients in various formats [ JSON / XML / ATOM /CSV ]
	seperatation of client-server 
	clients can be Web clients [ React, Angular, Vue], Swift, Android, Standalone app, WebOS,..
4) GraphQL services	==> Apollo Server


RESTful Web Services
* uses http protocol
* Uniform URI to identify a Resources [ plural nouns]
* actions are identified using HTTP verbs [ GET, POST, PUT, DELETE]

GET
http://localhost:8080/api/products

get all products

--
GET
http://localhost:8080/api/products/3

get product whose id is 3
pathparameter "/" to get by Unique id or sub resource

http://localhost:8080/api/customers/banu@gmail.com/orders

--
GET
to get subset / filterd ==> Query Parameter
http://localhost:8080/api/products?category=mobile
http://localhost:8080/api/products?page=2&size=20

------------


POST
http://localhost:8080/api/products

payload from client will contain data which is added to "products"
	

----------

PUT
http://localhost:8080/api/products/2

payload from client will contain data which is updated to "products" with id 2


--
DELETE
http://localhost:8080/api/products/2

delete a product whose id is 2

----------------------------------------


* POSTMAN
* Docker Desktop

--------------
"start" : "node dist/api/app.js"

npm run build
npm start

OR using ts-node

"start" : "ts-node ./api/app.ts",


http://localhost:3000/
http://localhost:3000/products
http://localhost:3000/products/1

--

Postman

POST http://localhost:3000/products

Headers:
Accept: text/plain
Content-type: application/json

Body:
select raw
incomplete:
{
	"price": 1234.33
}

or:
{
    "id": 10,
    "name": "Sony Tv",
	"price": 123492.33,
    "category" : "tv"
}

==============================

Session Tracking

Http protocol is a stateless protocol

Client Request ==> request, response objects are created; once response is commited to client they are destroyed

RESTful
* client - server
* Uniform Uri
* Stateless

JWT ==> Json Web Token

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

HEADER:
{
  "alg": "HS256",
  "typ": "JWT"
}

Payload: contains claims

{
  "sub": "1234567890", // who you are
  "name": "John Doe",
  "iat": 1516239022 // issued at
  "exp": 1516239099 // exp
  "iss": "adobe",
  "authorities": ["admin", "user"]
}

VERIFY:
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  mytopsecret
) secret base64 encoded

==============

npm i -D @types/jsonwebtoken


===
REgister a User

POST http://localhost:3000/register
Accept: application/json
Content-type: application/json

Body:
{
    "email": "me@gmail.com",
    "password": "secret123"
}

==

Login

POST http://localhost:3000/login
Accept: application/json
Content-type: application/json

Body:
{
    "email": "me@gmail.com",
    "password": "secret123"
}

Response:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtZUBnbWFpbC5jb20iLCJpc3MiOiJhZG9iZSIsImlhdCI6MTY1MjQyNzAwMH0.kVWr66NUFYVSJhmjgr60bed9EYbX40DzvcW4fShI3go"
}

===

Protected REsources

GET: http://localhost:3000/products
Accept: application/json

Header

Autorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtZUBnbWFpbC5jb20iLCJpc3MiOiJhZG9iZSIsImlhdCI6MTY1MjQyNzAwMH0.kVWr66NUFYVSJhmjgr60bed9EYbX40DzvcW4fShI3go


============================

express ==> MiddleWare ==> Route ==> MiddleWare ==> Controller ==> Service ==> Mongodb/mysql

jsonwebtoken ==>  token based authorization

===========================

http://localhost:3000/products?category=mobile

====

Day 6

Recap on ExpressJS
--> middleware web framework for NodeJS
--> Simplfies traditional web application dev [ SSR]
--> RESTful web services

new express(); 

Routes
ProductRoute.ts
UserRoute.ts

Middleware ==> (req:Request, res: Response, next: NextFunction) {}
next(); ==> next handler which matches URL pattern [ could be other middlerware or API]
Examples of built-in:
app.use(express.json()); // payload to json content-type:application/json JSON.parse(..);
app.use(cookieParser());
app.use(cors());

Jsonwebtoken ==> tokenGuard.ts as middleware [ Before Route ]
ProductValidatorMiddleware ==> [Route and Controller]

------------------------------------------------------
Docker Desktop

=================================

* Serve static pages
* SSR ==> Server Side Rendering
	data is read from backend and pages are rendered on Server and sent to client
	Librarires for SSR
	* EJS <%= data %>
	* JADE
	* PUG
	* Handlebars #data
	* Mustache {{data}}

expressapp> npm i ejs


====================

$ docker run --name some-mongo -d mongo -p 27017:27017

$ docker cp employees.json some-mongo:/tmp/employees.json

MongoDB ==> NoSQL database ==> It's not RDBMS [ tables with relationship using Foreign key]

MongoDB 		RDBMS
database 	    database
collection		table
document 		row
BSON

===



$ docker run --name some-mongo  -p 27017:27017 -d mongo

$ docker cp employees.json some-mongo:/tmp/employees.json

Access mongodb Container 
$ docker exec -it some-mongo bash
root@8c738f59839c:/# mongoimport --db employees_db --collection employees --file tmp/employees.json

root@8c738f59839c:/# mongosh
test> use employees_db
employees_db> show collections
employees
employees_db> db.employees.find()

Where clause
employees_db> db.employees.find({company:'Adobe'})

select name, company from employees where company='Adobe'
employees_db> db.employees.find({company:'Adobe'}, {name:1,company:1})

===

expressapp> npm i mongoose 

===================

http server ==> express ==> MongoDB Driver => MongoDB

MongoDB NodeJS Driver

Mongoose is a MongoDB object modeling tool ODM ==> similar to ORM

Object is JS object ==> map to Document of MongoDB 

Simplifies CRUD operations

===============================================

Schema:
Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection


model: for ==> CRUD operations

mongoose.model('Tank', schema);  

mongoose.connect('mongodb://localhost:27017/myapp');

==============================================================

npm i dotenv

====================================

Monorepo

NPM packages are developed in lots of small Github repos.

I am working in #5 and #6 repo, ignore pull requests from #8 repo

npm i repo_8

====

Monorepo ==> single repo will contain all the code for a given project

Advantages:
* Single soource of truth
* Code reuse
* Atomic changes

Project 1 refers Project 2 

============================================

Monorepo tools:
* Lerna
* Rush
* Manually configure using NPM / YARN

npm i -g @microsoft/rush

npm i -g pnpm

================================

rushexample>rush init

rushexample>md hello
rushexample>cd hello
rushexample/hello>pnpm init [ similar to npm init --y]
rush.json
 {
    "packageName": "hello",
    "projectFolder": "hello"
  }

run in any terminal
rush update

adding dependencies for hello project/module

rushexample/hello>rush add -p express   [npm i express]
rushexample/hello>rush add -p typescript --dev
rushexample/hello>rush add -p @types/express --dev
rushexample/hello>rush add -p @types/node --dev
rushexample/hello>tsc --init

rushexample/hello>rush add -p ts-node --dev


package.json
 "build" : "tsc",
  "start": "ts-node src/index.ts",


 hello/src/index.ts
 
 import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Rush!!!");
});

app.listen(3000, () => {
    console.log("server started!!!");
});

---

Running npm scritps with Rush

rushexample/hello>rushx start

----

Adding other modules into monorepo

md lib
cd lib
rushexample/lib>pnpm init
rushexample/lib>tsc --init
update rush.json to specify this project also
 {
    "packageName": "@shared/lib",
    "projectFolder": "lib"
  }

rush update ==> from any terminal of the project
rushexample/lib>rush add -p lodash
rushexample/lib>rush add -p @types/lodash --dev

in hello module
"dependencies": {
    "lib": "workspace:*",

rushexample/lib>tsc --init

====================

































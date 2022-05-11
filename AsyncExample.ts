
interface User {
	id:number,
	name:string
}

// Type alias
type FetchData = () => Promise<User[]>

async function FetchData() {
	 const result = await fetch("http://jsonplaceholder.typicode.com/users");
	 const json = await result.json();
	return json;
}


FetchData().then(
	data => console.log(data),
	err => console.log("Boom :-(", err)
);

console.log("End!!");

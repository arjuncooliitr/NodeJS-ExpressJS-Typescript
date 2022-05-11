
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



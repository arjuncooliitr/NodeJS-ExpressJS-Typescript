
const arr = [1,2,3,4,5,6,7,8,10];

arr.reverse();

const used = process.memoryUsage();

for(let key in used) {
	console.log(`${key} ${used[key]}`);
}
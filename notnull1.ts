function doTask(x: string | null) {
	console.log(x!.toUpperCase());
}

doTask("harry");

doTask(null);
function doTask(callback:unknown) {
	if(typeof callback === 'function') {
		callback();
	}
}

doTask(100);
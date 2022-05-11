function doTask(callback) {
    if (typeof callback === 'function') {
        callback();
    }
}
doTask(100);

function FetchData(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ "id": 20, "name": "Peter" });
        }, 2000);
    });
}
// sync call let res = FetchData(20); 
FetchData(20).then(function (data) { return console.log(data); }, function (err) { return console.log("Boom :-(", err); });

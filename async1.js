
const https = require('https');

const start = Date.now();

function doRequest() {
	https.request('https://www.google.com', response => {
		response.on('data', () => {});
		response.on('end', () => {
			console.log(Date.now() - start);
		});
	}).end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();


doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

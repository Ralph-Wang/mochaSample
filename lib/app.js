var http = require('http');

onRequest = function onRequest(req, res) {
    res.end('Hello World');
}

app = http.createServer(onRequest);

module.exports = app;

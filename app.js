var http = require('http');

onRequest = function onRequest(req, res) {
    res.end('Hello World');
}

app = http.createServer(onRequest);

if (module.parent) {
    module.exports = app;
} else {
    app.listen(8888);
}

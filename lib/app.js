var http = require('http');
var express = require('express');

app = express();

app.use(express.cookieParser());


app.get('/', function(req, res) {
    res.send('Hello');
});

app.get('/setCookie', function(req, res) {
    res.cookie('cookie', 'hey');
    res.send('setCookie');
});

app.get('/return', function(req, res) {
    if (req.cookies.cookie) {
        res.send(req.cookies.cookie);
    } else {
        res.send(':(');
    }
});

module.exports = app;

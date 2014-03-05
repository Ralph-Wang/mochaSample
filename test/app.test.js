var should = require('should');
var request = require('supertest');
var app = require('..').app

describe('#Web app Test', function() {
    before(function(done) {
        app.listen(0, done);
    });

    it('should response 200 and a "Hello"', function(done) {
        request(app)
        .get('/')
        .expect(200).
        end(function (err,res) {
            var util = require('util');
            //console.log(util.inspect(res));
            var body = res.text;
            body.should.include('Hello');
            done(err);
        });;
    });
});

describe('#url test', function() {
    it('should return 200', function(done) {
        request('http://www.baidu.com')
        .get('/')
        .end(function(err, res) {
            res.status.should.equal(200);
            done();
        });
    });
});

describe('#use agent to persist the connection', function() {
    before(function(done) {
        app.listen(0, done);
        //app.listen(8888, done);
    });
    //var agent = request.agent('http://localhost:8888');
    it('should save cookies', function(done) {
        agent
        .get('/setCookie')
        .expect('set-cookie', 'cookie=hey; Path=/', done);
    });

    it('should send cookies', function(done) {
        agent
        .get('/return')
        .end(function(err, res) {
            var body = res.text;
            body.should.equal('hey');
            done();
        });
    });
});

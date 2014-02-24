var should = require('should');
var request = require('supertest');
var app = require('../app.js');

describe('Web app Test', function() {
    before(function(done) {
        app.listen(0, done);
    });

    it('should response 200 and a "Hello"', function(done) {
        request(app)
        .get('/')
        .expect(200).
        end(function (err,res) {
            var body = res.text;
            body.should.include('Hello');
            done(err);
        });;
    });
});

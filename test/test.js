var should = require('should');
var testSample = require('..');

describe('testSample', function() {
    beforeEach(function() {
        console.log('before everyone');
    });
    afterEach(function() {
        console.log('after everyone');
    });
    describe('#Async read', function() {
        before(function() {
            console.log('before read');
        });
        it('should get 123\\n', function(done) {
            testSample.read('fileToRead.txt', function(err, data) {
                if (err) throw err;
                data.should.equal('123\n');
                data.should.be.a.string;
                done();
            });
        });
    });

    describe('#getTrue', function() {
        after(function() {
            console.log('after getTrue');
        });
        it('should return true', function() {
            testSample.getTrue().should.be.true;
        });
    });

    describe('#pending Test)', function() {
        it('should be something');
    });
});

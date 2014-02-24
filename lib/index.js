
exports.getTrue = function getTrue() {
    return true;
}

exports.read = function read(filename, callback) {
    var fs = require('fs');
    fs.readFile(filename, {encoding:'utf8'}, function(err, data) {
        return callback(err, data);
    });
}

var iniFiles = require('../js/ini_files');

var assert = require('assert');
var fs = require('fs');
var temp = require('temp').track();


describe('parseBundleIni', function() {
    var tempfile;
    beforeEach(function() {
        temp.open("test.ini", function(err, info) {
            if (!err) {
                fs.write(info.fd, "[test_plugin]\nentry_file = this.js\n");
                tempfile = info.path;
                fs.close(info.fd);
            }
        });
    });
    describe('output', function() {
        it('should have one entry', function () {
            assert(iniFiles.parseBundleIni(tempfile, []).length === 1);
        });
    });
});

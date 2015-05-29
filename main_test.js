var main = require('./main');

exports.testExample = function(test){
    test.strictEqual(main.example(), true);
    test.done();
}
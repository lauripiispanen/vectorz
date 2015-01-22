var context = function(scope) {
    this.instances = [];
    this.standalones = [];
    this.composables = [];

    this.test = function(name, assert, expected, param1, param2) {
        this.instances.push(function() {
            it(name, function() {
                assert(param1[name](param2), expected);
            });
        });
        this.standalones.push(function() {
            it(name, function() {
                assert(scope[name](param1, param2), expected);
            });
        });
        this.composables.push(function() {
            it(name, function() {
                assert(scope.comp[name](param2)(param1), expected);
            });
        });
    }

    this.run = function(tests) {
        tests.forEach(function(it) {
            it.call();
        });
    }
};

module.exports = function(scope) {
    return new context(scope);
}
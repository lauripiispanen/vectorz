module.exports = function(target) {
    var keys = Object.keys(target);
    target.comp = {};
    keys.forEach(function(key) {
        target.prototype[key] = function(other) {
            return target[key](this, other);
        };
        target.comp[key] = function(other) {
            return function(self) {
                return self[key](other);
            };
        };
    });

}
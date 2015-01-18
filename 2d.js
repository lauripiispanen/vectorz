function Vector2D(x, y) {
    if (this instanceof Vector2D) {
        this.x = x;
        this.y = y;
    } else {
        return new Vector2D(x, y);
    }
};

Vector2D.prototype.add = function(other) {
    return new Vector2D(this.x + other.x, this.y + other.y);
};
Vector2D.prototype.sub = function(other) {
    return new Vector2D(this.x - other.x, this.y - other.y);
};
Vector2D.prototype.multiply = function(other) {
    return new Vector2D(this.x * other.x, this.y * other.y);
};
Vector2D.prototype.divide = function(other) {
    return new Vector2D(this.x / other.x, this.y / other.y);
};
Vector2D.prototype.magnitude = function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
};
Vector2D.prototype.normalize = function() {
    var magnitude = this.magnitude();
    return new Vector2D(this.x / magnitude, this.y / magnitude);
};
Vector2D.prototype.dot = function(other) {
    return this.x * other.x + this.y * other.y;
};
Vector2D.prototype.angle = function(other) {
    return Math.acos(this.normalize().dot(other.normalize()));
};
Vector2D.prototype.angleDeg = function(other) {
     return this.angle(other) * (180 / Math.PI);
};
Vector2D.prototype.toArray = function() {
    return [this.x, this.y];
};
Vector2D.prototype.toObject = function() {
    return {
        x: this.x,
        y: this.y
    };
};

Vector2D.prototype.equals = function(other) {
    return this.x === other.x && this.y === other.y;
};
Vector2D.fromArray = function(arr) {
    return new Vector2D(arr[0], arr[1]);
};
Vector2D.fromObject = function(obj) {
    return new Vector2D(obj.x, obj.y);
};
Vector2D.up = new Vector2D(0, 1);
Vector2D.down = new Vector2D(0, -1);
Vector2D.left = new Vector2D(-1, 0);
Vector2D.right = new Vector2D(1, 0);
Vector2D.zero = new Vector2D(0, 0);
Vector2D.one = new Vector2D(1, 1);

module.exports = Vector2D;
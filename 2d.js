var compose = require('./compose');

function Vector2D(x, y) {
    if (this instanceof Vector2D) {
        this.x = x;
        this.y = y;
    } else {
        return new Vector2D(x, y);
    }
};

Vector2D.add = function(self, other) {
    return new Vector2D(self.x + other.x, self.y + other.y);
};
Vector2D.sub = function(self, other) {
    return new Vector2D(self.x - other.x, self.y - other.y);
};
Vector2D.multiply = function(self, other) {
    return new Vector2D(self.x * other.x, self.y * other.y);
};
Vector2D.divide = function(self, other) {
    return new Vector2D(self.x / other.x, self.y / other.y);
};
Vector2D.magnitude = function(self) {
    return Math.sqrt(Math.pow(self.x, 2) + Math.pow(self.y, 2));
};
Vector2D.scale = function(self, factor) {
    return self.multiply(Vector2D(factor, factor));
};
Vector2D.normalize = function(self) {
    return self.clamp(1);
};
Vector2D.dot = function(self, other) {
    return self.x * other.x + self.y * other.y;
};
Vector2D.angle = function(self, other) {
    return Math.acos(self.normalize().dot(other.normalize()));
};
Vector2D.angleDeg = function(self, other) {
    return self.angle(other) * (180 / Math.PI);
};
Vector2D.distance = function(self, other) {
    return self.sub(other).magnitude();
};
Vector2D.clamp = function(self, magnitude) {
    var ratio = (self.magnitude() / magnitude);
    return new Vector2D(self.x / ratio, self.y / ratio);
};
Vector2D.limit = function(self, magnitude) {
    if (magnitude < self.magnitude()) {
        return self.clamp(magnitude);
    } else {
        return self;
    }
};
Vector2D.toArray = function(self) {
    return [self.x, self.y];
};
Vector2D.toObject = function(self) {
    return {
        x: self.x,
        y: self.y
    };
};

Vector2D.equals = function(self, other) {
    return self.x === other.x && self.y === other.y;
};

compose(Vector2D);

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
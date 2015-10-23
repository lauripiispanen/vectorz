var compose = require('./compose');

function Vector3D(x, y, z) {
    if (this instanceof Vector3D) {
        this.x = x;
        this.y = y;
        this.z = z;
    } else {
        return new Vector3D(x, y, z);
    }
}

Vector3D.add = function(self, other) {
    return new Vector3D(self.x + other.x, self.y + other.y, self.z + other.z);
};
Vector3D.sub = function(self, other) {
    return new Vector3D(self.x - other.x, self.y - other.y, self.z - other.z);
};
Vector3D.multiply = function(self, other) {
    return new Vector3D(self.x * other.x, self.y * other.y, self.z * other.z);
};
Vector3D.divide = function(self, other) {
    return new Vector3D(self.x / other.x, self.y / other.y, self.z / other.z);
};
Vector3D.magnitude = function(self) {
    return Math.sqrt(Math.pow(self.x, 2) + Math.pow(self.y, 2) + Math.pow(self.z, 2));
};
Vector3D.scale = function(self, factor) {
    return self.multiply(Vector3D(factor, factor, factor));
};
Vector3D.normalize = function(self) {
    return self.clamp(1);
};
Vector3D.dot = function(self, other) {
    return self.x * other.x + self.y * other.y + self.z * other.z;
};
Vector3D.angle = function(self, other) {
    return Math.acos(self.normalize().dot(other.normalize()));
};
Vector3D.angleDeg = function(self, other) {
     return self.angle(other) * (180 / Math.PI);
};
Vector3D.distance = function(self, other) {
     return self.sub(other).magnitude();
};
Vector3D.clamp = function(self, magnitude) {
    var ratio = (self.magnitude() / magnitude);
    return new Vector3D(self.x / ratio, self.y / ratio, self.z / ratio);
};
Vector3D.limit = function(self, magnitude) {
    if (magnitude < self.magnitude()) {
        return self.clamp(magnitude);
    } else {
        return self;
    }
};

Vector3D.equals = function(self, other) {
    return self.x === other.x && self.y === other.y && self.z === other.z;
};

Vector3D.toArray = function(self) {
    return [self.x, self.y, self.z];
};
Vector3D.toObject = function(self) {
    return {
        x: self.x,
        y: self.y,
        z: self.z
    };
};

compose(Vector3D);

Vector3D.fromArray = function(arr) {
    return new Vector3D(arr[0], arr[1], arr[2]);
};
Vector3D.fromObject = function(obj) {
    return new Vector3D(obj.x, obj.y, obj.z);
};

Vector3D.back = new Vector3D(0, 0, -1);
Vector3D.forward = new Vector3D(0, 0, 1);
Vector3D.up = new Vector3D(0, 1, 0);
Vector3D.down = new Vector3D(0, -1, 0);
Vector3D.left = new Vector3D(-1, 0, 0);
Vector3D.right = new Vector3D(1, 0, 0);
Vector3D.zero = new Vector3D(0, 0, 0);
Vector3D.one = new Vector3D(1, 1, 1);

module.exports = Vector3D;
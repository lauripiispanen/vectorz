function Vector3D(x, y, z) {
    if (this instanceof Vector3D) {
        this.x = x;
        this.y = y;
        this.z = z;
    } else {
        return new Vector3D(x, y, z);
    }
}

Vector3D.prototype.add = function(other) {
    return new Vector3D(this.x + other.x, this.y + other.y, this.z + other.z);
};
Vector3D.prototype.sub = function(other) {
    return new Vector3D(this.x - other.x, this.y - other.y, this.z - other.z);
};
Vector3D.prototype.multiply = function(other) {
    return new Vector3D(this.x * other.x, this.y * other.y, this.z * other.z);
};
Vector3D.prototype.divide = function(other) {
    return new Vector3D(this.x / other.x, this.y / other.y, this.z / other.z);
};
Vector3D.prototype.magnitude = function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
};
Vector3D.prototype.normalize = function() {
    return this.limit(1);
};
Vector3D.prototype.dot = function(other) {
    return this.x * other.x + this.y * other.y + this.z * other.z;
};
Vector3D.prototype.angle = function(other) {
    return Math.acos(this.normalize().dot(other.normalize()));
};
Vector3D.prototype.angleDeg = function(other) {
     return this.angle(other) * (180 / Math.PI);
};
Vector3D.prototype.distance = function(other) {
     return this.sub(other).magnitude();
};
Vector3D.prototype.limit = function(magnitude) {
    var ratio = (this.magnitude() / magnitude);
    return new Vector3D(this.x / ratio, this.y / ratio, this.z / ratio);
};

Vector3D.prototype.equals = function(other) {
    return this.x === other.x && this.y === other.y && this.z === other.z;
};

Vector3D.prototype.toArray = function() {
    return [this.x, this.y, this.z];
};
Vector3D.prototype.toObject = function() {
    return {
        x: this.x,
        y: this.y,
        z: this.z
    };
};


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
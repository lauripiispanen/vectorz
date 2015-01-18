var assert  = require('assert'),
    Vector2 = require('../2d');

describe('Vector2', function() {
    it('add', function() {
        var vec1 = new Vector2(1, 2);
        var vec2 = new Vector2(3, 4);
        assert(vec1.add(vec2).equals(new Vector2(4, 6)));
    });
    it('sub', function() {
        var vec1 = new Vector2(1, 2);
        var vec2 = new Vector2(3, 4);
        assert(vec1.sub(vec2).equals(new Vector2(-2, -2)));
    });
    it('equals', function() {
        assert(!Vector2(1,2).equals(Vector2(2,2)));
        assert(Vector2(2,2).equals(Vector2(2,2)));
    });
    it('multiply', function() {
        var vec1 = new Vector2(1, 2);
        var vec2 = new Vector2(3, 4);
        assert.deepEqual(vec1.multiply(vec2), new Vector2(3, 8));
    });
    it('divide', function() {
        var vec1 = new Vector2(8, 2);
        var vec2 = new Vector2(4, 4);
        assert(vec1.divide(vec2).equals(new Vector2(2, 0.5)));
    });
    it('magnitude', function() {
        assert.equal(10, new Vector2(6, 8).magnitude());
    });
    it('dot', function() {
        var vec1 = new Vector2(8, 1);
        var vec2 = new Vector2(4, 4);
        assert.equal(36, vec1.dot(vec2));
    });
    it('normalize', function() {
        assert.deepEqual(Vector2(4, 8).normalize(), Vector2(1, 2).normalize());
        assert.deepEqual(Vector2(0.1, 0.2).normalize(), Vector2(1, 2).normalize());
    });
    it('angleDeg', function() {
        var vec1 = new Vector2(0, 1);
        var vec2 = new Vector2(4, 4);
        assert.equal(45, Math.round(vec1.angleDeg(vec2)));
    });
    it('distance', function() {
        var vec1 = new Vector2(0, 1);
        var vec2 = new Vector2(3, 1);
        assert.equal(3, vec1.distance(vec2));
    });
    it('clamp', function() {
        var vec1 = new Vector2(0, 3);
        assert.deepEqual(Vector2(0, 4.5), vec1.clamp(4.5));
    });
    it('limit', function() {
        assert.deepEqual(Vector2(0, 1.5), Vector2(0, 3).limit(1.5));
        assert.deepEqual(Vector2(0, 1), Vector2(0, 1).limit(1.5));
    });
    it('constructor', function() {
        assert(Vector2(2, 2).equals(new Vector2(2, 2)));
        assert(!Vector2(2, 3).equals(new Vector2(4, 5)));
    });
    it('fromArray', function() {
        assert(Vector2(3, 4).equals(Vector2.fromArray([3, 4])));
    });
    it('fromObject', function() {
        assert(Vector2(5, 6).equals(Vector2.fromObject({x: 5, y: 6})));
    });
    it('toArray', function() {
        assert.deepEqual([2, 3], Vector2(2, 3).toArray());
    });
    it('toObject', function() {
        assert.deepEqual({x: 1, y: 7}, Vector2(1, 7).toObject());
    });
    it('constants', function() {
        assert(Vector2(0,1).equals(Vector2.up));
        assert(Vector2(0,-1).equals(Vector2.down));
        assert(Vector2(-1,0).equals(Vector2.left));
        assert(Vector2(1,0).equals(Vector2.right));
        assert(Vector2(1,1).equals(Vector2.one));
        assert(Vector2(0,0).equals(Vector2.zero));
    });

});
var assert  = require('assert'),
    Vector3 = require('../3d');

describe('Vector3', function() {
    it('add', function() {
        var vec1 = new Vector3(1, 2, 3);
        var vec2 = new Vector3(4, 5, 6);
        assert.deepEqual(vec1.add(vec2), new Vector3(5, 7, 9));
    });
    it('sub', function() {
        var vec1 = new Vector3(1, 2, 3);
        var vec2 = new Vector3(4, 5, 6);
        assert.deepEqual(vec1.sub(vec2), new Vector3(-3, -3, -3));
    });
    it('equals', function() {
        assert(!Vector3(1,2).equals(Vector3(2,2)));
        assert(Vector3(2,2,3).equals(Vector3(2,2,3)));
    });
    it('multiply', function() {
        var vec1 = new Vector3(1, 2, 3);
        var vec2 = new Vector3(4, 5, 6);
        assert.deepEqual(vec1.multiply(vec2), new Vector3(4, 10, 18));
    });
    it('divide', function() {
        var vec1 = new Vector3(8, 2, 7);
        var vec2 = new Vector3(4, 4, 1);
        assert(vec1.divide(vec2).equals(new Vector3(2, 0.5, 7)));
    });
    it('magnitude', function() {
        assert.equal(34, Math.round(new Vector3(28, 12, 16).magnitude()));
    });
    it('dot', function() {
        var vec1 = new Vector3(8, 1, 5);
        var vec2 = new Vector3(4, 4, 8);
        assert.equal(76, vec1.dot(vec2));
    });
    it('normalize', function() {
        var vec1 = Vector3(4, 8, 12);
        assert.deepEqual(vec1.normalize(), Vector3(1, 2, 3).normalize());
    });
    it('angleDeg', function() {
        var vec1 = new Vector3(0, 1, 0);
        var vec2 = new Vector3(4, 4, 2);
        assert.equal(48, Math.round(vec1.angleDeg(vec2)));
    });
    it('distance', function() {
        var vec1 = new Vector3(0, 1, 2);
        var vec2 = new Vector3(3, 1, 2);
        assert.equal(3, vec1.distance(vec2));
    });
    it('limit', function() {
        var vec1 = new Vector3(0, 0, 3);
        assert.deepEqual(Vector3(0, 0, 1.5), vec1.limit(1.5));
    });
    it('constructor', function() {
        assert(Vector3(2, 2, 1).equals(new Vector3(2, 2, 1)));
        assert(!Vector3(2, 3, 1).equals(new Vector3(4, 5, 1)));
    });
    it('fromArray', function() {
        assert(Vector3(3, 4, 7).equals(Vector3.fromArray([3, 4, 7])));
    });
    it('fromObject', function() {
        assert(Vector3(5, 6).equals(Vector3.fromObject({x: 5, y: 6})));
    });
    it('toArray', function() {
        assert.deepEqual([2, 3, 4], Vector3(2, 3, 4).toArray());
    });
    it('toObject', function() {
        assert.deepEqual({x: 1, y: 7, z: 9}, Vector3(1, 7, 9).toObject());
    });
    it('constants', function() {
        assert(Vector3(0,0,1).equals(Vector3.forward));
        assert(Vector3(0,0,-1).equals(Vector3.back));
        assert(Vector3(0,1,0).equals(Vector3.up));
        assert(Vector3(0,-1,0).equals(Vector3.down));
        assert(Vector3(-1,0,0).equals(Vector3.left));
        assert(Vector3(1,0,0).equals(Vector3.right));
        assert(Vector3(1,1,1).equals(Vector3.one));
        assert(Vector3(0,0,0).equals(Vector3.zero));
    });


});
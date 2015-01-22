var assert  = require('assert'),
    Vector3 = require('../3d'),
    multi   = require('./multi_test')(Vector3);

function roundedEqual(actual, expected) {
    assert.equal(Math.round(actual), expected);
}

describe('Vector3', function() {
    multi.test('add', assert.deepEqual, Vector3(5,7,9), Vector3(1, 2, 3), Vector3(4, 5, 6));
    multi.test('sub', assert.deepEqual, Vector3(-3,-3,-3), Vector3(1, 2, 3), Vector3(4, 5, 6));
    multi.test('equals', assert.equal, true, Vector3(2,2,3), Vector3(2,2,3));
    multi.test('equals', assert.equal, false, Vector3(1,2,3), Vector3(2,2,3));
    multi.test('multiply', assert.deepEqual, Vector3(4, 10, 18), Vector3(1, 2, 3), Vector3(4,5,6));
    multi.test('divide', assert.deepEqual, Vector3(2, 0.5, 7), Vector3(8, 2, 7), Vector3(4,4,1));
    multi.test('magnitude', roundedEqual, 34, Vector3(28, 12, 16));
    multi.test('dot', assert.equal, 76, Vector3(8, 1, 5), Vector3(4, 4, 8));
    multi.test('normalize', assert.deepEqual, Vector3(1, 2, 3).normalize(), Vector3(4, 8, 12));
    multi.test('angle', roundedEqual, 1, Vector3(0, 1, 0), Vector3(4, 4, 2));
    multi.test('angleDeg', roundedEqual, 48, Vector3(0, 1, 0), Vector3(4, 4, 2));
    multi.test('distance', assert.equal, 3, Vector3(0, 1, 2), Vector3(3, 1, 2));
    multi.test('clamp', assert.deepEqual, Vector3(0, 0, 1.5), Vector3(0, 0, 3), 1.5);
    multi.test('clamp', assert.deepEqual, Vector3(0, 0, 1.5), Vector3(0, 0, 1), 1.5);
    multi.test('limit', assert.deepEqual, Vector3(0, 0, 1.5), Vector3(0, 0, 3), 1.5);
    multi.test('limit', assert.deepEqual, Vector3(0, 0,   1), Vector3(0, 0, 1), 1.5);
    multi.test('toArray', assert.deepEqual, [2, 3, 4], Vector3(2, 3, 4));
    multi.test('toObject', assert.deepEqual, {x: 1, y: 7, z: 9}, Vector3(1, 7, 9));

    describe('instance functions', function() {
        multi.run(multi.instances);

        it('constructor', function() {
            assert(Vector3(2, 2, 1).equals(new Vector3(2, 2, 1)));
            assert(!Vector3(2, 3, 1).equals(new Vector3(4, 5, 1)));
        });
    });

    describe('standalone functions', function() {
        multi.run(multi.standalones);

        it('fromArray', function() {
            assert(Vector3(3, 4, 7).equals(Vector3.fromArray([3, 4, 7])));
        });
        it('fromObject', function() {
            assert(Vector3(5, 6).equals(Vector3.fromObject({x: 5, y: 6})));
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

    describe('composable instance functions', function() {
        multi.run(multi.composables);

        var vec = [
            Vector3(1, 1, 1),
            Vector3(1, 2, 3),
            Vector3(3, 1, 3),
        ];

        it('verify composability - multiply', function() {
            var res = vec.map(Vector3.comp.multiply(Vector3(3, 3, 3)));

            assert.deepEqual([
                Vector3(3, 3, 3),
                Vector3(3, 6, 9),
                Vector3(9, 3, 9)
            ], res);
        });
        it('verify composability - magnitude', function() {
            var res = vec.map(Vector3.comp.magnitude()).map(Math.round).reduce(function(a, b) { return a + b; });
            assert.deepEqual(10, res);
        });
    });

});
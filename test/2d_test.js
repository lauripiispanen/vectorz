var assert  = require('assert'),
    Vector2 = require('../2d'),
    multi   = require('./multi_test')(Vector2);

function roundedEqual(actual, expected) {
    assert.equal(Math.round(actual), expected);
}

describe('Vector2', function() {
    multi.test('add', assert.deepEqual, Vector2(5, 7), Vector2(1, 2), Vector2(4, 5));
    multi.test('sub', assert.deepEqual, Vector2(-2, -2), Vector2(1, 2), Vector2(3, 4));
    multi.test('equals', assert.equal, true, Vector2(2,2), Vector2(2,2));
    multi.test('equals', assert.equal, false, Vector2(1,2), Vector2(2,2));
    multi.test('multiply', assert.deepEqual, Vector2(4, 10), Vector2(1, 2), Vector2(4,5));
    multi.test('divide', assert.deepEqual, Vector2(2, 0.5), Vector2(8, 2), Vector2(4,4));
    multi.test('magnitude', assert.equal, 10, Vector2(6, 8));
    multi.test('dot', assert.equal, 36, Vector2(8, 1), Vector2(4, 4));
    multi.test('normalize', assert.deepEqual, Vector2(1, 2).normalize(), Vector2(4, 8));
    multi.test('angle', roundedEqual, 1, Vector2(0, 1), Vector2(4, 4));
    multi.test('angleDeg', roundedEqual, 45, Vector2(0, 1), Vector2(4, 4));
    multi.test('distance', assert.equal, 3, Vector2(0, 1), Vector2(3, 1));
    multi.test('clamp', assert.deepEqual, Vector2(0, 1.5), Vector2(0, 3), 1.5);
    multi.test('clamp', assert.deepEqual, Vector2(0, 1.5), Vector2(0, 1), 1.5);
    multi.test('limit', assert.deepEqual, Vector2(0, 1.5), Vector2(0, 3), 1.5);
    multi.test('limit', assert.deepEqual, Vector2(0,   1), Vector2(0, 1), 1.5);
    multi.test('toArray', assert.deepEqual, [2, 3], Vector2(2, 3));
    multi.test('toObject', assert.deepEqual, {x: 1, y: 7}, Vector2(1, 7));


    describe('instance functions', function() {
        multi.run(multi.instances);

        it('constructor', function() {
            assert(Vector2(2, 2).equals(new Vector2(2, 2)));
            assert(!Vector2(2, 3).equals(new Vector2(4, 5)));
        });
    });

    describe('standalone functions', function() {
        multi.run(multi.standalones);

        it('fromArray', function() {
            assert(Vector2(3, 4).equals(Vector2.fromArray([3, 4])));
        });
        it('fromObject', function() {
            assert(Vector2(5, 6).equals(Vector2.fromObject({x: 5, y: 6})));
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

    describe('composable instance functions', function() {
        multi.run(multi.composables);

        var vec = [
            Vector2(1, 1),
            Vector2(1, 2),
            Vector2(3, 1)
        ];

        it('verify composability - multiply', function() {
            var res = vec.map(Vector2.comp.multiply(Vector2(3, 3)));

            assert.deepEqual([
                Vector2(3, 3),
                Vector2(3, 6),
                Vector2(9, 3)
            ], res);
        });
        it('verify composability - magnitude', function() {
            var res = vec.map(Vector2.comp.magnitude()).map(Math.round).reduce(function(a, b) { return a + b; });
            assert.deepEqual(6, res);
        });
    });

});
vectorz
=============

a 2d/3d vector library inspired by Unity

Installation
------------

``` bash
npm install vectorz
```

Usage
-----

Require either "vectorz/2d", "vectorz/3d", or just "vectorz" for both.

Call the constructor with or without the `new` keyword. Both return a new Vector2 or Vector3 instance.

All operations return new copies instead of mutation, and they're available in three forms: standalone, instance, or composable.

``` javascript
Vector2(1, 2).add(Vector2(3, 4))
Vector2.add(Vector2(1, 2), Vector2(3, 4))
Vector2.comp.add(Vector2(3, 4))(Vector2(1, 2))
```

Composable forms are particularly useful with functors:

``` javascript
[Vector2(1, 2), Vector2(3, 4)].map(Vector2.comp.add(Vector2(5, 6)))

==  [Vector2(6, 8), Vector2(8, 10)]
```

Available operations
--------------------

**add(other)**

Returns a new vector by adding two vectors' corresponding components together.

**sub(other)**

Returns a new vector by subtracting two vectors' corresponding components from each other.

**multiply(other)**

Returns a new vector by multiplying two vectors' corresponding components together.

**divide(other)**

Returns a new vector by dividing two vectors' corresponding components.

**magnitude()**

Returns the length of a vector.

**normalize()**

Returns a vector with the same direction, but length of 1. Same as `.clamp(1)`.

**dot(other)**

Returns the dot product of two vectors.

**angle(other)**

Returns the angle in radians between two vectors.

**angleDeg(other)**

Returns the angle in degrees between two vectors.

**distance(other)**

Returns the distance between two vectors. Same as `.minus(other).magnitude()`.

**clamp(magnitude)**

Returns a vector with the same direction, but specified length.

**limit(magnitude)**

Limits the vector's length to a maximum of `magnitude`.

**toArray()**

Returns the vector components in an array.

**toObject()**

Returns the vector as a plain Javascript object.
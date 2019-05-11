/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/has.js TAP array > must match snapshot 1`] = `
--- expected
+++ actual
 Object {
   "a": Array [
     1,
     2,
     3,
   ],
 }
`

exports[`test/has.js TAP array > must match snapshot 2`] = `
--- expected
+++ actual
 Object {
   "a": Array [
     1,
     2,
   ],
 }
`

exports[`test/has.js TAP array > must match snapshot 3`] = `
--- expected
+++ actual
 Object {
   "a": Array [],
 }
`

exports[`test/has.js TAP array > must match snapshot 4`] = `
--- expected
+++ actual
 Object {
   "ea": Array [],
 }
`

exports[`test/has.js TAP array > must match snapshot 5`] = `
--- expected
+++ actual
 Object {
   "ea": Array [
-    1,
   ],
 }
`

exports[`test/has.js TAP array > must match snapshot 6`] = `
--- expected
+++ actual
 Object {
   "a": Array [
     1,
     2,
     3,
-    4,
   ],
 }
`

exports[`test/has.js TAP array likes > must match snapshot 1`] = `
--- expected
+++ actual
 Object {
   "i": Object [
     1,
     2,
     3,
   ],
 }
`

exports[`test/has.js TAP array likes > must match snapshot 2`] = `
--- expected
+++ actual
 Object {
   "i": Object [
     1,
     2,
     3,
   ],
 }
`

exports[`test/has.js TAP array likes > must match snapshot 3`] = `
--- expected
+++ actual
 Object {
   "i": Object [
     1,
     2,
     3,
   ],
 }
`

exports[`test/has.js TAP array likes > must match snapshot 4`] = `
--- expected
+++ actual
 Object {
   "a": Array [
     1,
     2,
   ],
 }
`

exports[`test/has.js TAP array likes > must match snapshot 5`] = `
--- expected
+++ actual
 Object {
   "i": Object [
     1,
     2,
   ],
 }
`

exports[`test/has.js TAP array likes > must match snapshot 6`] = `
--- expected
+++ actual
 Array {
-  "foo": "bar",
 }
`

exports[`test/has.js TAP buffer > must match snapshot 1`] = `
--- expected
+++ actual
 Object {
   "b": Buffer <61 73 64 66>,
 }
`

exports[`test/has.js TAP buffer > must match snapshot 2`] = `
--- expected
+++ actual
 Object {
-  "b": Buffer <61 73 64>,
+  "b": Buffer <61 73 64 66>,
 }
`

exports[`test/has.js TAP complex object > must match snapshot 1`] = `
--- expected
+++ actual
 Object {
   "c": Object {},
 }
`

exports[`test/has.js TAP complex object > must match snapshot 2`] = `
--- expected
+++ actual
 Object {
   "c": Object {
     "s": Set {},
   },
 }
`

exports[`test/has.js TAP complex object > must match snapshot 3`] = `
--- expected
+++ actual
 Object {
   "c": Object {
     "s": Set {
       Map {},
     },
   },
 }
`

exports[`test/has.js TAP complex object > must match snapshot 4`] = `
--- expected
+++ actual
 Object {
   "c": Object {
     "s": Set {
       Map {
         undefined => undefined,
       },
     },
   },
 }
`

exports[`test/has.js TAP complex object > must match snapshot 5`] = `
--- expected
+++ actual
 Object {
-  "xyz": true,
 }
`

exports[`test/has.js TAP complex object > must match snapshot 6`] = `
--- expected
+++ actual
 Object {
   "c": Object {
     "s": Set {
       Map {
         undefined => undefined,
       },
     },
   },
 }
`

exports[`test/has.js TAP date > must match snapshot 1`] = `
--- expected
+++ actual
 Object {
   "d": 2019-02-14T07:41:12.747Z,
 }
`

exports[`test/has.js TAP date > must match snapshot 2`] = `
--- expected
+++ actual
 Object {
-  "d": 1979-07-01T00:00:00.000Z,
+  "d": 2019-02-14T07:41:12.747Z,
 }
`

exports[`test/has.js TAP errors > must match snapshot 1`] = `
--- expected
+++ actual
 Error: foo {
   "code": 1,
 }
`

exports[`test/has.js TAP errors > must match snapshot 2`] = `
--- expected
+++ actual
 Error: foo {
   "signal": "blerg",
   "name": "Error",
   "message": "foo",
 }
`

exports[`test/has.js TAP errors > must match snapshot 3`] = `
--- expected
+++ actual
 Error: foo
`

exports[`test/has.js TAP errors > must match snapshot 4`] = `
--- expected
+++ actual
-TypeError: foo
+Error: foo {
+  "code": 1,
+  "signal": "blerg",
+}

`

exports[`test/has.js TAP errors > must match snapshot 5`] = `
--- expected
+++ actual
 Error: foo
`

exports[`test/has.js TAP errors > must match snapshot 6`] = `
--- expected
+++ actual
 RangeError: hello {
   "name": "RangeError",
   "foo": "bar",
 }
`

exports[`test/has.js TAP map > must match snapshot 1`] = `
--- expected
+++ actual
 Object {
   "m": Map {
     1 => 2,
   },
 }
`

exports[`test/has.js TAP map > must match snapshot 10`] = `
--- expected
+++ actual
 Object {
   "em": Map {
-    1 => 2,
   },
 }
`

exports[`test/has.js TAP map > must match snapshot 11`] = `
--- expected
+++ actual
 Object {
   "em": Map {},
 }
`

exports[`test/has.js TAP map > must match snapshot 2`] = `
--- expected
+++ actual
 Object {
   "m": Map {
     3 => 4,
   },
 }
`

exports[`test/has.js TAP map > must match snapshot 3`] = `
--- expected
+++ actual
 Object {
   "m": Map {
     3 => 4,
   },
 }
`

exports[`test/has.js TAP map > must match snapshot 4`] = `
--- expected
+++ actual
 Object {
   "cm": Map {
     Object {
       "a": 1,
     } => 1,
     Object {
       "a": 1,
     } => 1,
   },
 }
`

exports[`test/has.js TAP map > must match snapshot 5`] = `
--- expected
+++ actual
 Object {
   "m": Map {
     3 => 4,
-    "3" => 4,
   },
 }
`

exports[`test/has.js TAP map > must match snapshot 6`] = `
--- expected
+++ actual
 Object {
   "m": Map {
     3 => 4,
     1 => 2,
   },
 }
`

exports[`test/has.js TAP map > must match snapshot 7`] = `
--- expected
+++ actual
 Object {
   "m": Map {
     1 => 2,
     3 => 4,
   },
 }
`

exports[`test/has.js TAP map > must match snapshot 8`] = `
--- expected
+++ actual
 Object {
   "m": Map {
     1 => 2,
-    4 => 3,
   },
 }
`

exports[`test/has.js TAP map > must match snapshot 9`] = `
--- expected
+++ actual
 Object {
   "em": Map {
-    1 => 2,
   },
 }
`

exports[`test/has.js TAP set > must match snapshot 1`] = `
--- expected
+++ actual
 Object {
   "s": Set {
     3,
     2,
   },
 }
`

exports[`test/has.js TAP set > must match snapshot 2`] = `
--- expected
+++ actual
 Object {
   "es": Set {},
 }
`

exports[`test/has.js TAP set > must match snapshot 3`] = `
--- expected
+++ actual
 Object {
   "s": Set {},
 }
`

exports[`test/has.js TAP set > must match snapshot 4`] = `
--- expected
+++ actual
 Object {
   "s": Set {
+    1,
     2,
     3,
     4,
-    5,
   },
 }
`

exports[`test/has.js TAP set > must match snapshot 5`] = `
--- expected
+++ actual
 Object {
   "cs": Set {
     Object {
       "a": 1,
     },
     Object {
       "a": 1,
     },
   },
 }
`

exports[`test/has.js TAP set > must match snapshot 6`] = `
--- expected
+++ actual
 Object {
   "cs": Set {
     Object {
       "a": 1,
     },
     Object {
       "a": 1,
     },
-    Object {
-      "a": 1,
-    },
   },
 }
`
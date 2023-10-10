/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > bignum.tap > bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 136211425,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 2,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 136211426,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 2,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 136211425,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 2,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 136211426,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 2,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > bignum.tap > bail > stringified 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)

`

exports[`test/parse-stringify.ts > TAP > bignum.tap > bail > stringified flat 1`] = `
1..0
ok 1
ok 2
ok 3
ok 4
# test count(4) != plan(2)

`

exports[`test/parse-stringify.ts > TAP > bignum.tap > default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 136211425,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 2,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 136211426,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 2,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 136211425,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 2,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 136211426,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 2,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > bignum.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 3,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 2,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 2,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 4,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 3,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 2,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 4,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 2,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > bignum.tap > default settings > stringified 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)

`

exports[`test/parse-stringify.ts > TAP > bignum.tap > default settings > stringified flat 1`] = `
1..0
ok 1
ok 2
ok 3
ok 4
# test count(4) != plan(2)

`

exports[`test/parse-stringify.ts > TAP > bignum.tap > strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 136211425,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 2,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 136211426,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 2,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 136211425,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 2,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 136211426,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 2,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > bignum.tap > strict > stringified 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)

`

exports[`test/parse-stringify.ts > TAP > bignum.tap > strict > stringified flat 1`] = `
1..0
ok 1
ok 2
ok 3
ok 4
# test count(4) != plan(2)

`

exports[`test/parse-stringify.ts > TAP > bignum.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 136211425,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 2,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "",
      "id": 136211426,
      "name": "",
      "ok": true,
      "plan": Plan {
        "comment": "",
        "end": 2,
        "start": 1,
      },
      "previous": null,
      "skip": false,
      "tapError": "id greater than plan end",
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "comment",
    "# test count(4) != plan(2)\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 4,
      "fail": 2,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 136211425,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 2,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "",
          "id": 136211426,
          "name": "",
          "ok": true,
          "plan": Plan {
            "comment": "",
            "end": 2,
            "start": 1,
          },
          "previous": null,
          "skip": false,
          "tapError": "id greater than plan end",
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 4,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "skips": Array [],
      "time": null,
      "todo": 0,
      "todos": Array [],
    },
  ],
  Array [
    "finish",
  ],
  Array [
    "close",
  ],
]
`

exports[`test/parse-stringify.ts > TAP > bignum.tap > strictBail > stringified 1`] = `
1..2
ok 1
ok 2
ok 136211425
ok 136211426
# test count(4) != plan(2)

`

exports[`test/parse-stringify.ts > TAP > bignum.tap > strictBail > stringified flat 1`] = `
1..0
ok 1
ok 2
ok 3
ok 4
# test count(4) != plan(2)

`

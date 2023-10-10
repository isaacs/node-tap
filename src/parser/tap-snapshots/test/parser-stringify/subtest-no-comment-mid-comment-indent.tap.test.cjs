/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > subtest-no-comment-mid-comment-indent.tap > bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
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
                  "fullname": "nesting > true is ok",
                  "id": 1,
                  "name": "true is ok",
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
                  "fullname": "nesting > doag is also okay",
                  "id": 2,
                  "name": "doag is also okay",
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
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 2,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 2,
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
                  "time": 8.987,
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
            ],
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": true,
              "diag": null,
              "fullname": "nesting > first",
              "id": 1,
              "name": "first",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 8.987,
              "todo": false,
            },
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "closingTestPoint": false,
                  "diag": null,
                  "fullname": "nesting > but that is ok",
                  "id": 1,
                  "name": "but that is ok",
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
                  "fullname": "nesting > this passes",
                  "id": 2,
                  "name": "this passes",
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
                  "fullname": "nesting > nested ok",
                  "id": 3,
                  "name": "nested ok",
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
                "plan",
                Plan {
                  "comment": "",
                  "end": 3,
                  "start": 1,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 3,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 3,
                  "passes": undefined,
                  "plan": FinalPlan {
                    "comment": "",
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "start": 1,
                  },
                  "skip": 0,
                  "skips": Array [],
                  "time": 5.988,
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
            ],
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": true,
              "diag": null,
              "fullname": "nesting > second",
              "id": 2,
              "name": "second",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 5.988,
              "todo": false,
            },
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
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
              "time": 28.647,
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "nesting",
          "id": 1,
          "name": "nesting",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 28.647,
          "todo": false,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "this passes",
          "id": 2,
          "name": "this passes",
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
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
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
          "time": 205.826,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "../tap/test/test/ok.js",
      "id": 1,
      "name": "../tap/test/test/ok.js",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 205.826,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parse-stringify.ts > TAP > subtest-no-comment-mid-comment-indent.tap > bail > stringified 1`] = `
TAP version 13
# Subtest
    # Subtest: nesting
        # Subtest
            1..2
            ok 1 - true is ok
            ok 2 - doag is also okay
        ok 1 - first # time=8.987ms
        # Subtest
            ok 1 - but that is ok
            ok 2 - this passes
            ok 3 - nested ok
            1..3
        ok 2 - second # time=5.988ms
        1..2
    ok 1 - nesting # time=28.647ms
    ok 2 - this passes
    1..2
ok 1 - ../tap/test/test/ok.js # time=205.826ms
1..1

`

exports[`test/parse-stringify.ts > TAP > subtest-no-comment-mid-comment-indent.tap > bail > stringified flat 1`] = `
TAP version 13
# Subtest
# Subtest: nesting
# Subtest
ok 1 - nesting > true is ok
ok 2 - nesting > doag is also okay
ok 3 - nesting > first # time=8.987ms
# Subtest
ok 4 - nesting > but that is ok
ok 5 - nesting > this passes
ok 6 - nesting > nested ok
ok 7 - nesting > second # time=5.988ms
ok 8 - nesting # time=28.647ms
ok 9 - this passes
ok 10 - ../tap/test/test/ok.js # time=205.826ms
1..10

`

exports[`test/parse-stringify.ts > TAP > subtest-no-comment-mid-comment-indent.tap > default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
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
                  "fullname": "nesting > true is ok",
                  "id": 1,
                  "name": "true is ok",
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
                  "fullname": "nesting > doag is also okay",
                  "id": 2,
                  "name": "doag is also okay",
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
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 2,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 2,
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
                  "time": 8.987,
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
            ],
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": true,
              "diag": null,
              "fullname": "nesting > first",
              "id": 1,
              "name": "first",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 8.987,
              "todo": false,
            },
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "closingTestPoint": false,
                  "diag": null,
                  "fullname": "nesting > but that is ok",
                  "id": 1,
                  "name": "but that is ok",
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
                  "fullname": "nesting > this passes",
                  "id": 2,
                  "name": "this passes",
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
                  "fullname": "nesting > nested ok",
                  "id": 3,
                  "name": "nested ok",
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
                "plan",
                Plan {
                  "comment": "",
                  "end": 3,
                  "start": 1,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 3,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 3,
                  "passes": undefined,
                  "plan": FinalPlan {
                    "comment": "",
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "start": 1,
                  },
                  "skip": 0,
                  "skips": Array [],
                  "time": 5.988,
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
            ],
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": true,
              "diag": null,
              "fullname": "nesting > second",
              "id": 2,
              "name": "second",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 5.988,
              "todo": false,
            },
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
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
              "time": 28.647,
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "nesting",
          "id": 1,
          "name": "nesting",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 28.647,
          "todo": false,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "this passes",
          "id": 2,
          "name": "this passes",
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
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
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
          "time": 205.826,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "../tap/test/test/ok.js",
      "id": 1,
      "name": "../tap/test/test/ok.js",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 205.826,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parse-stringify.ts > TAP > subtest-no-comment-mid-comment-indent.tap > default settings > parsed flat 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "nesting > true is ok",
      "id": 1,
      "name": "nesting > true is ok",
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
      "fullname": "nesting > doag is also okay",
      "id": 2,
      "name": "nesting > doag is also okay",
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "nesting > first",
      "id": 3,
      "name": "nesting > first",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 8.987,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "nesting > but that is ok",
      "id": 4,
      "name": "nesting > but that is ok",
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
      "fullname": "nesting > this passes",
      "id": 5,
      "name": "nesting > this passes",
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
      "fullname": "nesting > nested ok",
      "id": 6,
      "name": "nesting > nested ok",
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "nesting > second",
      "id": 7,
      "name": "nesting > second",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 5.988,
      "todo": false,
    },
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": false,
      "diag": null,
      "fullname": "this passes",
      "id": 8,
      "name": "this passes",
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
      "closingTestPoint": true,
      "diag": null,
      "fullname": "../tap/test/test/ok.js",
      "id": 9,
      "name": "../tap/test/test/ok.js",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 205.826,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 9,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parse-stringify.ts > TAP > subtest-no-comment-mid-comment-indent.tap > default settings > stringified 1`] = `
TAP version 13
# Subtest
    # Subtest: nesting
        # Subtest
            1..2
            ok 1 - true is ok
            ok 2 - doag is also okay
        ok 1 - first # time=8.987ms
        # Subtest
            ok 1 - but that is ok
            ok 2 - this passes
            ok 3 - nested ok
            1..3
        ok 2 - second # time=5.988ms
        1..2
    ok 1 - nesting # time=28.647ms
    ok 2 - this passes
    1..2
ok 1 - ../tap/test/test/ok.js # time=205.826ms
1..1

`

exports[`test/parse-stringify.ts > TAP > subtest-no-comment-mid-comment-indent.tap > default settings > stringified flat 1`] = `
TAP version 13
# Subtest
# Subtest: nesting
# Subtest
ok 1 - nesting > true is ok
ok 2 - nesting > doag is also okay
ok 3 - nesting > first # time=8.987ms
# Subtest
ok 4 - nesting > but that is ok
ok 5 - nesting > this passes
ok 6 - nesting > nested ok
ok 7 - nesting > second # time=5.988ms
ok 8 - nesting # time=28.647ms
ok 9 - this passes
ok 10 - ../tap/test/test/ok.js # time=205.826ms
1..10

`

exports[`test/parse-stringify.ts > TAP > subtest-no-comment-mid-comment-indent.tap > strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
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
                  "fullname": "nesting > true is ok",
                  "id": 1,
                  "name": "true is ok",
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
                  "fullname": "nesting > doag is also okay",
                  "id": 2,
                  "name": "doag is also okay",
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
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 2,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 2,
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
                  "time": 8.987,
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
            ],
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": true,
              "diag": null,
              "fullname": "nesting > first",
              "id": 1,
              "name": "first",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 8.987,
              "todo": false,
            },
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "closingTestPoint": false,
                  "diag": null,
                  "fullname": "nesting > but that is ok",
                  "id": 1,
                  "name": "but that is ok",
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
                  "fullname": "nesting > this passes",
                  "id": 2,
                  "name": "this passes",
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
                  "fullname": "nesting > nested ok",
                  "id": 3,
                  "name": "nested ok",
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
                "plan",
                Plan {
                  "comment": "",
                  "end": 3,
                  "start": 1,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 3,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 3,
                  "passes": undefined,
                  "plan": FinalPlan {
                    "comment": "",
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "start": 1,
                  },
                  "skip": 0,
                  "skips": Array [],
                  "time": 5.988,
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
            ],
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": true,
              "diag": null,
              "fullname": "nesting > second",
              "id": 2,
              "name": "second",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 5.988,
              "todo": false,
            },
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
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
              "time": 28.647,
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "nesting",
          "id": 1,
          "name": "nesting",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 28.647,
          "todo": false,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "this passes",
          "id": 2,
          "name": "this passes",
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
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
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
          "time": 205.826,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "../tap/test/test/ok.js",
      "id": 1,
      "name": "../tap/test/test/ok.js",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 205.826,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parse-stringify.ts > TAP > subtest-no-comment-mid-comment-indent.tap > strict > stringified 1`] = `
TAP version 13
# Subtest
    # Subtest: nesting
        # Subtest
            1..2
            ok 1 - true is ok
            ok 2 - doag is also okay
        ok 1 - first # time=8.987ms
        # Subtest
            ok 1 - but that is ok
            ok 2 - this passes
            ok 3 - nested ok
            1..3
        ok 2 - second # time=5.988ms
        1..2
    ok 1 - nesting # time=28.647ms
    ok 2 - this passes
    1..2
ok 1 - ../tap/test/test/ok.js # time=205.826ms
1..1

`

exports[`test/parse-stringify.ts > TAP > subtest-no-comment-mid-comment-indent.tap > strict > stringified flat 1`] = `
TAP version 13
# Subtest
# Subtest: nesting
# Subtest
ok 1 - nesting > true is ok
ok 2 - nesting > doag is also okay
ok 3 - nesting > first # time=8.987ms
# Subtest
ok 4 - nesting > but that is ok
ok 5 - nesting > this passes
ok 6 - nesting > nested ok
ok 7 - nesting > second # time=5.988ms
ok 8 - nesting # time=28.647ms
ok 9 - this passes
ok 10 - ../tap/test/test/ok.js # time=205.826ms
1..10

`

exports[`test/parse-stringify.ts > TAP > subtest-no-comment-mid-comment-indent.tap > strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: nesting\\n",
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
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
                  "fullname": "nesting > true is ok",
                  "id": 1,
                  "name": "true is ok",
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
                  "fullname": "nesting > doag is also okay",
                  "id": 2,
                  "name": "doag is also okay",
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
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 2,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 2,
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
                  "time": 8.987,
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
            ],
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": true,
              "diag": null,
              "fullname": "nesting > first",
              "id": 1,
              "name": "first",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 8.987,
              "todo": false,
            },
          ],
          Array [
            "child",
            Array [
              Array [
                "comment",
                "# Subtest\\n",
              ],
              Array [
                "assert",
                Result {
                  "buffered": false,
                  "closingTestPoint": false,
                  "diag": null,
                  "fullname": "nesting > but that is ok",
                  "id": 1,
                  "name": "but that is ok",
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
                  "fullname": "nesting > this passes",
                  "id": 2,
                  "name": "this passes",
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
                  "fullname": "nesting > nested ok",
                  "id": 3,
                  "name": "nested ok",
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
                "plan",
                Plan {
                  "comment": "",
                  "end": 3,
                  "start": 1,
                },
              ],
              Array [
                "complete",
                FinalResults {
                  "bailout": false,
                  "count": 3,
                  "fail": 0,
                  "failures": Array [],
                  "ok": true,
                  "pass": 3,
                  "passes": undefined,
                  "plan": FinalPlan {
                    "comment": "",
                    "end": 3,
                    "skipAll": false,
                    "skipReason": "",
                    "start": 1,
                  },
                  "skip": 0,
                  "skips": Array [],
                  "time": 5.988,
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
            ],
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "closingTestPoint": true,
              "diag": null,
              "fullname": "nesting > second",
              "id": 2,
              "name": "second",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": 5.988,
              "todo": false,
            },
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 2,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 2,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 2,
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
              "time": 28.647,
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
        ],
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "nesting",
          "id": 1,
          "name": "nesting",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": 28.647,
          "todo": false,
        },
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": null,
          "fullname": "this passes",
          "id": 2,
          "name": "this passes",
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
        "plan",
        Plan {
          "comment": "",
          "end": 2,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 2,
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
          "time": 205.826,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "../tap/test/test/ok.js",
      "id": 1,
      "name": "../tap/test/test/ok.js",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": 205.826,
      "todo": false,
    },
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
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

exports[`test/parse-stringify.ts > TAP > subtest-no-comment-mid-comment-indent.tap > strictBail > stringified 1`] = `
TAP version 13
# Subtest
    # Subtest: nesting
        # Subtest
            1..2
            ok 1 - true is ok
            ok 2 - doag is also okay
        ok 1 - first # time=8.987ms
        # Subtest
            ok 1 - but that is ok
            ok 2 - this passes
            ok 3 - nested ok
            1..3
        ok 2 - second # time=5.988ms
        1..2
    ok 1 - nesting # time=28.647ms
    ok 2 - this passes
    1..2
ok 1 - ../tap/test/test/ok.js # time=205.826ms
1..1

`

exports[`test/parse-stringify.ts > TAP > subtest-no-comment-mid-comment-indent.tap > strictBail > stringified flat 1`] = `
TAP version 13
# Subtest
# Subtest: nesting
# Subtest
ok 1 - nesting > true is ok
ok 2 - nesting > doag is also okay
ok 3 - nesting > first # time=8.987ms
# Subtest
ok 4 - nesting > but that is ok
ok 5 - nesting > this passes
ok 6 - nesting > nested ok
ok 7 - nesting > second # time=5.988ms
ok 8 - nesting # time=28.647ms
ok 9 - this passes
ok 10 - ../tap/test/test/ok.js # time=205.826ms
1..10

`

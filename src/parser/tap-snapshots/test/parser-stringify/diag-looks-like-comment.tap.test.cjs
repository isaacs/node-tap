/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-stringify.ts > TAP > diag-looks-like-comment.tap > bail > parsed 1`] = `
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
        "# Subtest: -t 0.2\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": Object {
            "found": String(
              
              # Subtest: nope
              
                  not ok 1 - nope
                    ---
                    still: the string
                    ...
              
                  1..1 # nope
              not ok 1 - nope # time=123
                ---
                this: is fine
                ...
              
              1..1
              
            ),
            "pattern": "/SIGTERM/",
          },
          "fullname": "-t 0.2 > should match pattern provided",
          "id": 1,
          "name": "should match pattern provided",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      Array [
        "bailout",
        "should match pattern provided",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "should match pattern provided",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": Object {
                "found": String(
                  
                  # Subtest: nope
                  
                      not ok 1 - nope
                        ---
                        still: the string
                        ...
                  
                      1..1 # nope
                  not ok 1 - nope # time=123
                    ---
                    this: is fine
                    ...
                  
                  1..1
                  
                ),
                "pattern": "/SIGTERM/",
              },
              "fullname": "-t 0.2 > should match pattern provided",
              "id": 1,
              "name": "should match pattern provided",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "start": null,
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
    ],
  ],
  Array [
    "bailout",
    "should match pattern provided",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "should match pattern provided",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
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

exports[`test/parse-stringify.ts > TAP > diag-looks-like-comment.tap > bail > stringified 1`] = `
TAP version 13
# Subtest: -t 0.2
    not ok 1 - should match pattern provided
      ---
      found: |
        
        # Subtest: nope
      
            not ok 1 - nope
              ---
              still: the string
              ...
      
            1..1 # nope
        not ok 1 - nope # time=123
          ---
          this: is fine
          ...
      
        1..1
      pattern: /SIGTERM/
      ...
    Bail out! should match pattern provided
Bail out! should match pattern provided

`

exports[`test/parse-stringify.ts > TAP > diag-looks-like-comment.tap > bail > stringified flat 1`] = `
TAP version 13
# Subtest: -t 0.2
not ok 1 - -t 0.2 > should match pattern provided
  ---
  found: |
    
    # Subtest: nope
  
        not ok 1 - nope
          ---
          still: the string
          ...
  
        1..1 # nope
    not ok 1 - nope # time=123
      ---
      this: is fine
      ...
  
    1..1
  pattern: /SIGTERM/
  ...
Bail out! should match pattern provided
Bail out! should match pattern provided

`

exports[`test/parse-stringify.ts > TAP > diag-looks-like-comment.tap > default settings > parsed 1`] = `
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
        "# Subtest: -t 0.2\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": Object {
            "found": String(
              
              # Subtest: nope
              
                  not ok 1 - nope
                    ---
                    still: the string
                    ...
              
                  1..1 # nope
              not ok 1 - nope # time=123
                ---
                this: is fine
                ...
              
              1..1
              
            ),
            "pattern": "/SIGTERM/",
          },
          "fullname": "-t 0.2 > should match pattern provided",
          "id": 1,
          "name": "should match pattern provided",
          "ok": false,
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
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": Object {
                "found": String(
                  
                  # Subtest: nope
                  
                      not ok 1 - nope
                        ---
                        still: the string
                        ...
                  
                      1..1 # nope
                  not ok 1 - nope # time=123
                    ---
                    this: is fine
                    ...
                  
                  1..1
                  
                ),
                "pattern": "/SIGTERM/",
              },
              "fullname": "-t 0.2 > should match pattern provided",
              "id": 1,
              "name": "should match pattern provided",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          "ok": false,
          "pass": 0,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "-t 0.2",
      "id": 1,
      "name": "-t 0.2",
      "ok": false,
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
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "-t 0.2",
          "id": 1,
          "name": "-t 0.2",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
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

exports[`test/parse-stringify.ts > TAP > diag-looks-like-comment.tap > default settings > parsed flat 1`] = `
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
      "diag": Object {
        "found": String(
          
          # Subtest: nope
          
              not ok 1 - nope
                ---
                still: the string
                ...
          
              1..1 # nope
          not ok 1 - nope # time=123
            ---
            this: is fine
            ...
          
          1..1
          
        ),
        "pattern": "/SIGTERM/",
      },
      "fullname": "-t 0.2 > should match pattern provided",
      "id": 1,
      "name": "-t 0.2 > should match pattern provided",
      "ok": false,
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
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "-t 0.2",
          "id": 1,
          "name": "-t 0.2",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
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

exports[`test/parse-stringify.ts > TAP > diag-looks-like-comment.tap > default settings > stringified 1`] = `
TAP version 13
# Subtest: -t 0.2
    not ok 1 - should match pattern provided
      ---
      found: |
        
        # Subtest: nope
      
            not ok 1 - nope
              ---
              still: the string
              ...
      
            1..1 # nope
        not ok 1 - nope # time=123
          ---
          this: is fine
          ...
      
        1..1
      pattern: /SIGTERM/
      ...
    1..1
not ok 1 - -t 0.2
1..1

`

exports[`test/parse-stringify.ts > TAP > diag-looks-like-comment.tap > default settings > stringified flat 1`] = `
TAP version 13
# Subtest: -t 0.2
not ok 1 - -t 0.2 > should match pattern provided
  ---
  found: |
    
    # Subtest: nope
  
        not ok 1 - nope
          ---
          still: the string
          ...
  
        1..1 # nope
    not ok 1 - nope # time=123
      ---
      this: is fine
      ...
  
    1..1
  pattern: /SIGTERM/
  ...
not ok 2 - -t 0.2
1..2

`

exports[`test/parse-stringify.ts > TAP > diag-looks-like-comment.tap > strict > parsed 1`] = `
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
        "# Subtest: -t 0.2\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": Object {
            "found": String(
              
              # Subtest: nope
              
                  not ok 1 - nope
                    ---
                    still: the string
                    ...
              
                  1..1 # nope
              not ok 1 - nope # time=123
                ---
                this: is fine
                ...
              
              1..1
              
            ),
            "pattern": "/SIGTERM/",
          },
          "fullname": "-t 0.2 > should match pattern provided",
          "id": 1,
          "name": "should match pattern provided",
          "ok": false,
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
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": Object {
                "found": String(
                  
                  # Subtest: nope
                  
                      not ok 1 - nope
                        ---
                        still: the string
                        ...
                  
                      1..1 # nope
                  not ok 1 - nope # time=123
                    ---
                    this: is fine
                    ...
                  
                  1..1
                  
                ),
                "pattern": "/SIGTERM/",
              },
              "fullname": "-t 0.2 > should match pattern provided",
              "id": 1,
              "name": "should match pattern provided",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          "ok": false,
          "pass": 0,
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
    ],
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "closingTestPoint": true,
      "diag": null,
      "fullname": "-t 0.2",
      "id": 1,
      "name": "-t 0.2",
      "ok": false,
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
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "buffered": false,
          "closingTestPoint": true,
          "diag": null,
          "fullname": "-t 0.2",
          "id": 1,
          "name": "-t 0.2",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      "ok": false,
      "pass": 0,
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

exports[`test/parse-stringify.ts > TAP > diag-looks-like-comment.tap > strict > stringified 1`] = `
TAP version 13
# Subtest: -t 0.2
    not ok 1 - should match pattern provided
      ---
      found: |
        
        # Subtest: nope
      
            not ok 1 - nope
              ---
              still: the string
              ...
      
            1..1 # nope
        not ok 1 - nope # time=123
          ---
          this: is fine
          ...
      
        1..1
      pattern: /SIGTERM/
      ...
    1..1
not ok 1 - -t 0.2
1..1

`

exports[`test/parse-stringify.ts > TAP > diag-looks-like-comment.tap > strict > stringified flat 1`] = `
TAP version 13
# Subtest: -t 0.2
not ok 1 - -t 0.2 > should match pattern provided
  ---
  found: |
    
    # Subtest: nope
  
        not ok 1 - nope
          ---
          still: the string
          ...
  
        1..1 # nope
    not ok 1 - nope # time=123
      ---
      this: is fine
      ...
  
    1..1
  pattern: /SIGTERM/
  ...
not ok 2 - -t 0.2
1..2

`

exports[`test/parse-stringify.ts > TAP > diag-looks-like-comment.tap > strictBail > parsed 1`] = `
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
        "# Subtest: -t 0.2\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "closingTestPoint": false,
          "diag": Object {
            "found": String(
              
              # Subtest: nope
              
                  not ok 1 - nope
                    ---
                    still: the string
                    ...
              
                  1..1 # nope
              not ok 1 - nope # time=123
                ---
                this: is fine
                ...
              
              1..1
              
            ),
            "pattern": "/SIGTERM/",
          },
          "fullname": "-t 0.2 > should match pattern provided",
          "id": 1,
          "name": "should match pattern provided",
          "ok": false,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      Array [
        "bailout",
        "should match pattern provided",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": "should match pattern provided",
          "count": 1,
          "fail": 1,
          "failures": Array [
            Result {
              "buffered": false,
              "closingTestPoint": false,
              "diag": Object {
                "found": String(
                  
                  # Subtest: nope
                  
                      not ok 1 - nope
                        ---
                        still: the string
                        ...
                  
                      1..1 # nope
                  not ok 1 - nope # time=123
                    ---
                    this: is fine
                    ...
                  
                  1..1
                  
                ),
                "pattern": "/SIGTERM/",
              },
              "fullname": "-t 0.2 > should match pattern provided",
              "id": 1,
              "name": "should match pattern provided",
              "ok": false,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          "ok": false,
          "pass": 0,
          "passes": undefined,
          "plan": FinalPlan {
            "comment": "",
            "end": null,
            "skipAll": false,
            "skipReason": "",
            "start": null,
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
    ],
  ],
  Array [
    "bailout",
    "should match pattern provided",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "should match pattern provided",
      "count": 0,
      "fail": 0,
      "failures": Array [],
      "ok": false,
      "pass": 0,
      "passes": undefined,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
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

exports[`test/parse-stringify.ts > TAP > diag-looks-like-comment.tap > strictBail > stringified 1`] = `
TAP version 13
# Subtest: -t 0.2
    not ok 1 - should match pattern provided
      ---
      found: |
        
        # Subtest: nope
      
            not ok 1 - nope
              ---
              still: the string
              ...
      
            1..1 # nope
        not ok 1 - nope # time=123
          ---
          this: is fine
          ...
      
        1..1
      pattern: /SIGTERM/
      ...
    Bail out! should match pattern provided
Bail out! should match pattern provided

`

exports[`test/parse-stringify.ts > TAP > diag-looks-like-comment.tap > strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: -t 0.2
not ok 1 - -t 0.2 > should match pattern provided
  ---
  found: |
    
    # Subtest: nope
  
        not ok 1 - nope
          ---
          still: the string
          ...
  
        1..1 # nope
    not ok 1 - nope # time=123
      ---
      this: is fine
      ...
  
    1..1
  pattern: /SIGTERM/
  ...
Bail out! should match pattern provided
Bail out! should match pattern provided

`

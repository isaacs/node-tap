import chalk from './fixtures/chalk.js'
import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import React from 'react'
import t from 'tap'

const { ResultDetails } = (await t.mockImport(
  '../dist/esm/result-details.js',
  {
    chalk,
    '../dist/esm/stack.js': {
      Stack: ({ stack }: { stack: string }) => (
        <Box>
          <Text>STACK {stack}</Text>
        </Box>
      ),
    },
    '../dist/esm/source.js': {
      Source: ({ at, source }: { at: any; source: string }) => (
        <Box flexDirection="column">
          <Text>AT {JSON.stringify(at)}</Text>
          <Text>SOURCE {source}</Text>
        </Box>
      ),
    },
    '../dist/esm/diff.js': {
      Diff: ({ diff }: { diff: string }) => (
        <Box>
          <Text>DIFF {diff}</Text>
        </Box>
      ),
    },
  }
)) as typeof import('../dist/esm/result-details.js')

import { Result } from 'tap-parser'

t.test('result without diags, nothing to print', t => {
  const res = {
    ok: true,
    name: 'fake result',
    id: 1,
    buffered: false,
    skip: false,
    previous: null,
    plan: null,
    diag: null,
    time: null,
    fullname: 'test name > fake result',
  } as Result
  t.equal(
    render(<ResultDetails result={res} />).lastFrame(),
    '',
    'no diags, no details'
  )
  t.end()
})

t.test('result with only known diags', t => {
  const res = {
    ok: true,
    name: 'fake result',
    id: 1,
    buffered: false,
    skip: false,
    previous: null,
    plan: null,
    diag: {
      at: {
        mock: 'callsite',
      },
      stack: 'mock stack',
      source: 'mock source',
      diff: 'mock diff',
      error: 'message',
      code: 'ERR_EXPECTED',
    },
    time: null,
    fullname: 'test name > fake result',
  } as Result
  t.matchSnapshot(
    render(<ResultDetails result={res} />).lastFrame(),
    'diags and details'
  )
  t.end()
})

t.test('error without code', t => {
  const res = {
    ok: true,
    name: 'fake result',
    id: 1,
    buffered: false,
    skip: false,
    previous: null,
    plan: null,
    diag: {
      at: {
        mock: 'callsite',
      },
      stack: 'mock stack',
      source: 'mock source',
      diff: 'mock diff',
      error: 'message',
    },
    time: null,
    fullname: 'test name > fake result',
  } as Result
  t.matchSnapshot(
    render(<ResultDetails result={res} />).lastFrame(),
    'diags and details'
  )
  t.end()
})

t.test('diff', t => {
  const res = {
    ok: true,
    name: 'fake result',
    id: 1,
    buffered: false,
    skip: false,
    previous: null,
    plan: null,
    diag: {
      at: {
        mock: 'callsite',
      },
      stack: 'mock stack',
      source: 'mock source',
      diff: 'mock diff',
      compare: '===',
      some: {
        other: {
          diags: true,
        },
      },
    },
    time: null,
    fullname: 'test name > fake result',
  } as Result
  t.matchSnapshot(
    render(<ResultDetails result={res} />).lastFrame(),
    'diags and details'
  )
  t.end()
})

t.test('no diff, but expected and actual', t => {
  // this handles node assert errors similarly
  const res = {
    ok: true,
    name: 'fake result',
    id: 1,
    buffered: false,
    skip: false,
    previous: null,
    plan: null,
    diag: {
      at: {
        mock: 'callsite',
      },
      stack: 'mock stack',
      source: 'mock source',
      operator: 'deepEqual',
      actual: {
        some: {
          thing: true,
        },
      },
      expected: {
        something: true
      },
    },
    time: null,
    fullname: 'test name > fake result',
  } as Result
  t.matchSnapshot(
    render(<ResultDetails result={res} />).lastFrame(),
    'generated diff'
  )
  t.end()
})

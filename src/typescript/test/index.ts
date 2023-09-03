import * as core from '@tapjs/core'
import { resolve } from 'path'
import t from 'tap'
import { config, loader } from '../dist/mjs/index.js'
t.equal(loader, 'ts-node/esm')
t.matchSnapshot(config)

t.test('no typecheck setting, no effect', async t => {
  const mock = {
    '@tapjs/core': t.createMock(core, {
      env: {
        TS_NODE_TRANSPILE_ONLY: undefined,
        TAP_TYPECHECK: undefined,
      },
    }),
  }
  const {
    '@tapjs/core': { env },
  } = mock
  const { plugin } = (await t.mockImport(
    '../dist/mjs/index.js',
    mock
  )) as typeof import('../dist/mjs/index.js')
  plugin(t)
  plugin(t)
  t.equal(env.TS_NODE_TRANSPILE_ONLY, undefined)
  t.end()
})

t.test('typecheck true => transpile only false', async t => {
  const mock = {
    '@tapjs/core': t.createMock(core, {
      env: {
        TS_NODE_TRANSPILE_ONLY: undefined,
        TAP_TYPECHECK: '1',
      },
    }),
  }
  const {
    '@tapjs/core': { env },
  } = mock
  const { plugin } = (await t.mockImport(
    '../dist/mjs/index.js',
    mock
  )) as typeof import('../dist/mjs/index.js')
  plugin(t)
  plugin(t)
  t.equal(env.TS_NODE_TRANSPILE_ONLY, '0')
  t.end()
})

t.test('typecheck false => transpile only true', async t => {
  const mock = {
    '@tapjs/core': t.createMock(core, {
      env: {
        TS_NODE_TRANSPILE_ONLY: undefined,
        TAP_TYPECHECK: '0',
      },
    }),
  }
  const {
    '@tapjs/core': { env },
  } = mock
  const { plugin } = (await t.mockImport(
    '../dist/mjs/index.js',
    mock
  )) as typeof import('../dist/mjs/index.js')
  plugin(t)
  plugin(t)
  t.equal(env.TS_NODE_TRANSPILE_ONLY, '1')
  t.end()
})

t.test('--tsconfig option', async t => {
  const cwd = t.testdirName
  const mock = {
    '@tapjs/core': t.createMock(core, {
      env: {
        TS_NODE_PROJECT: undefined,
        TAP_TSCONFIG: 'tsconfig.foo.json',
        TAP_CWD: cwd,
      },
    }),
  }
  const {
    '@tapjs/core': { env },
  } = mock
  const { plugin } = (await t.mockImport(
    '../dist/mjs/index.js',
    mock
  )) as typeof import('../dist/mjs/index.js')
  plugin(t)
  plugin(t)
  t.equal(env.TS_NODE_PROJECT, resolve(cwd, 'tsconfig.foo.json'))
  t.end()
})

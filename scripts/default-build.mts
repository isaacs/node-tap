import { spawnSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = resolve(fileURLToPath(import.meta.url), '..')

const builtins = readFileSync(
  __dirname + '/default-plugins.txt',
  'utf8'
)
  .trim()
  .split('\n')
  .map(p => `@tapjs/${p}`)

console.log('building Test class with:')
console.log(builtins.map(b => `  ${b}`).join('\n'))

const build = resolve(__dirname, '../src/test/scripts/build.mts')

const defaultPluginsFile = resolve(
  __dirname,
  '../src/test/src/default-plugins.ts'
)
writeFileSync(
  defaultPluginsFile,
  `export const defaultPlugins = ${JSON.stringify(builtins, null, 2)
    .replace(/"/g, `'`)
    .replace(/'\n\]/, `',\n]`)}\n`
)

const prepare = (...p: string[]) => {
  const res = spawnSync(
    'npx',
    [
      'nx',
      'run-many',
      '-t',
      'prepare',
      '--projects={' + p.join(',') + '}',
    ],
    { stdio: 'inherit' }
  )
  if (res.status || res.signal) throw res
}

// make sure core and then all the builtins are built
prepare('src/core', ...builtins)

spawnSync(
  process.execPath,
  [
    '--loader=ts-node/esm',
    '--no-warnings',
    build,
    ...builtins,
  ],
  {
    stdio: 'inherit',
  }
)

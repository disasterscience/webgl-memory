import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('package.json', {encoding: 'utf8'}));
const banner = `/* webgl-memory@${pkg.version}, license MIT */`;

export default [
  {
    input: 'src/index.ts',
    plugins: [
      resolve({
        modulesOnly: true,
      }),
      typescript(),
    ],
    output: [
      {
        format: 'es',
        file: 'dist/webgl-memory.js',
        indent: '  ',
        banner,
        sourcemap: true,
      },
    ],
  },
];

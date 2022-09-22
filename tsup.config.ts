import { defineConfig } from 'tsup';

const files = [
  'src/index.ts',
  'src/number.ts',
  'src/string.ts',
  'src/pipi.ts',
  'src/types.ts',
  'src/merge.ts',
  'src/random/index.ts',
  'src/random/mersenne.ts'
];

export default defineConfig({
  entry: files,
  format: ['esm'],
  clean: true,
  bundle: true,
  splitting: true,
  dts: true
});

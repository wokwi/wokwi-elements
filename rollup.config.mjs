// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';

export default {
  input: 'dist/esm/index.js',
  output: {
    file: 'dist/wokwi-elements.bundle.js',
    name: 'elements',
    format: 'iife',
  },
  context: 'window',
  plugins: [
    resolve(),
    commonJS({
      include: 'node_modules/**',
    }),
  ],
};

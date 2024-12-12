// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import path from 'path';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js', // Output dla CommonJS
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js', // Output dla ES Modules
      format: 'es',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom', '@headlessui/react'],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // Obsługa różnych rozszerzeń
    }),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.json',
      useTsconfigDeclarationDir: true, // Użyj declarationDir z tsconfig.json
      clean: true, // Wyczyść poprzednie deklaracje przed budowaniem
      exclude: ['**/*.stories.tsx'], // Wykluczenie plików testowych i Storybook
    }),
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
      extensions: ['.css', '.scss'], // Obsługa różnych rozszerzeń
    }),
  ],
};

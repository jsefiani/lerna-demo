import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

const extensions = ['.ts', '.tsx'];
const packageJson = require('./package.json');

export default {
	input: packageJson.source,
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript({ useTsconfigDeclarationDir: true }),
		babel({
			exclude: 'node_modules/**',
			extensions,
			babelHelpers: 'bundled',
		}),
		terser(),
	],
};

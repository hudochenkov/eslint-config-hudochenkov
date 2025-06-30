import { defineConfig } from 'eslint/config';
import { configs } from './index.js';
import globals from 'globals';

export default defineConfig([
	configs.main,
	{
		languageOptions: {
			globals: {
				...globals.commonjs,
			},
		},
	},
	{
		files: ['*.js'],
		rules: {
			'import/no-default-export': 'off',
		},
	},
]);

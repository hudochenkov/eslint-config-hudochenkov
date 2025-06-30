import { defineConfig } from 'eslint/config';
import { configs } from './index.js';

export default defineConfig([
	configs.main,
	{
		files: ['*.js'],
		rules: {
			'import/no-default-export': 'off',
		},
	},
]);

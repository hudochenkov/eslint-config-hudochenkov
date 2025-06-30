import { defineConfig } from 'eslint/config';

export const stylisticIssues = defineConfig([
	{
		rules: {
			camelcase: 'warn',
			'func-names': ['warn', 'as-needed'],
			'func-style': ['warn', 'declaration'],
			'max-params': ['warn', { max: 3 }],
			'no-bitwise': 'warn',
			'no-lonely-if': 'warn',
			'no-multi-assign': 'error',
			'no-nested-ternary': 'warn',
			'no-unneeded-ternary': 'warn',
			'one-var': ['warn', 'never'],
			'prefer-object-spread': 'warn',
		},
	},
]);

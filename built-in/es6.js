import { defineConfig } from 'eslint/config';

export const es6 = defineConfig([
	{
		rules: {
			'constructor-super': 'error',
			'no-class-assign': 'error',
			'no-confusing-arrow': 'warn',
			'no-const-assign': 'error',
			'no-dupe-class-members': 'warn',
			'no-duplicate-imports': 'warn',
			'no-new-symbol': 'error',
			'no-this-before-super': 'error',
			'no-useless-computed-key': 'warn',
			'no-useless-constructor': 'warn',
			'no-useless-rename': 'warn',
			'no-var': 'error',
			'object-shorthand': 'warn',
			'prefer-arrow-callback': 'off',
			'prefer-const': 'off',
			'prefer-rest-params': 'warn',
			'prefer-spread': 'warn',
			'prefer-template': 'off',
		},
	},
]);

export const stylisticIssues = {
	rules: {
		camelcase: 'warn',
		'func-names': ['warn', 'as-needed'],
		'func-style': ['warn', 'declaration'],
		'lines-between-class-members': 'warn',
		'max-params': ['warn', { max: 3 }],
		'no-bitwise': 'warn',
		'no-lonely-if': 'warn',
		'no-multi-assign': 'error',
		'no-nested-ternary': 'warn',
		'no-tabs': 'off',
		'no-unneeded-ternary': 'warn',
		'one-var': ['warn', 'never'],
		'padding-line-between-statements': [
			'warn',
			// Require blank lines after all directive prologues (e. g. 'use strict')
			{
				blankLine: 'always',
				prev: 'directive',
				next: '*',
			},
			{
				blankLine: 'never',
				prev: 'directive',
				next: 'directive',
			},
			// Require blank lines after every sequence of variable declarations
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
			// Require blank lines before all return statements
			{
				blankLine: 'always',
				prev: '*',
				next: 'return',
			},
			// Require blank lines before and after all following statements
			{
				blankLine: 'always',
				prev: '*',
				next: ['for', 'function', 'if', 'switch', 'try', 'do', 'while'],
			},
			{
				blankLine: 'always',
				prev: ['for', 'function', 'if', 'switch', 'try', 'do', 'while'],
				next: '*',
			},
		],
		'prefer-object-spread': 'warn',
		'spaced-comment': 'warn',
	},
};

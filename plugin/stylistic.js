import stylisticPlugin from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

export const stylistic = defineConfig([
	{
		plugins: {
			'@stylistic': stylisticPlugin,
		},

		rules: {
			'@stylistic/lines-between-class-members': 'warn',
			'@stylistic/no-confusing-arrow': 'warn',
			'@stylistic/no-extra-semi': 'warn',
			'@stylistic/no-floating-decimal': 'warn',
			'@stylistic/no-tabs': 'off',
			'@stylistic/padding-line-between-statements': [
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
			'@stylistic/spaced-comment': 'warn',
			'@stylistic/wrap-iife': ['error', 'any'],
		},
	},
]);

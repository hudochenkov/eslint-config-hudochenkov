module.exports = {
	plugins: ['jest'],

	env: {
		'jest/globals': true,
	},

	overrides: [
		{
			files: ['**/*.test.[jt]s?(x)'],
			rules: {
				'jest/no-conditional-in-test': 'error',
				'jest/no-deprecated-functions': 'error',
				'jest/no-done-callback': 'warn',
				'jest/no-duplicate-hooks': 'error',
				'jest/no-mocks-import': 'error',
				'jest/no-test-return-statement': 'error',
				'jest/prefer-comparison-matcher': 'warn',
				'jest/prefer-equality-matcher': 'warn',
				'jest/prefer-expect-resolves': 'error',
				'jest/prefer-hooks-in-order': 'warn',
				'jest/prefer-hooks-on-top': 'warn',
				'jest/prefer-mock-promise-shorthand': 'warn',
				'jest/prefer-spy-on': 'error',
				'jest/prefer-to-be': 'warn',
				'jest/prefer-to-contain': 'warn',
				'jest/prefer-to-have-length': 'warn',
				'jest/valid-describe-callback': 'error',
				'jest/valid-expect-in-promise': 'error',
				'jest/valid-expect': 'error',
				'jest/valid-title': 'warn',
			},
		},
	],
};

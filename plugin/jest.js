module.exports = {
	plugins: ['jest'],

	env: {
		'jest/globals': true,
	},

	overrides: [
		{
			files: ['**/*.test.[jt]s?(x)'],
			rules: {
				'jest/no-done-callback': 'warn',
				'jest/no-duplicate-hooks': 'error',
				'jest/no-mocks-import': 'error',
				'jest/no-test-return-statement': 'error',
				'jest/prefer-hooks-on-top': 'warn',
				'jest/prefer-spy-on': 'error',
				'jest/prefer-to-be-null': 'warn',
				'jest/prefer-to-be-undefined': 'warn',
				'jest/prefer-to-contain': 'warn',
				'jest/prefer-to-have-length': 'warn',
				'jest/valid-expect-in-promise': 'error',
			},
		},
	],
};

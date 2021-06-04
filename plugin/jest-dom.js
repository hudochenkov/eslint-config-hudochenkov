module.exports = {
	plugins: ['jest-dom'],

	overrides: [
		{
			files: ['**/*.test.[jt]s?(x)'],
			rules: {
				'jest-dom/prefer-checked': 'warn',
				'jest-dom/prefer-empty': 'warn',
				'jest-dom/prefer-enabled-disabled': 'warn',
				'jest-dom/prefer-focus': 'warn',
				'jest-dom/prefer-in-document': 'warn',
				'jest-dom/prefer-required': 'warn',
				'jest-dom/prefer-to-have-attribute': 'warn',
				'jest-dom/prefer-to-have-class': 'warn',
				'jest-dom/prefer-to-have-style': 'warn',
				'jest-dom/prefer-to-have-text-content': 'warn',
				'jest-dom/prefer-to-have-value': 'warn',
			},
		},
	],
};

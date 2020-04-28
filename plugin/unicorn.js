module.exports = {
	plugins: ['unicorn'],

	rules: {
		'unicorn/error-message': 'warn',
		'unicorn/no-array-instanceof': 'warn',
		'unicorn/no-console-spaces': 'warn',
		'unicorn/no-for-loop': 'warn',
		'unicorn/no-unused-properties': 'warn',
		'unicorn/prefer-add-event-listener': 'warn',
		'unicorn/prefer-dataset': 'warn',
		'unicorn/prefer-event-key': 'error',
		'unicorn/prefer-includes': 'warn',
		'unicorn/prefer-modern-dom-apis': 'warn',
		'unicorn/prefer-negative-index': 'warn',
		'unicorn/prefer-node-append': 'warn',
		'unicorn/prefer-node-remove': 'warn',
		'unicorn/prefer-query-selector': 'warn',
		'unicorn/prefer-starts-ends-with': 'warn',
		'unicorn/throw-new-error': 'off',
		'unicorn/better-regex': 'warn',
	},
};

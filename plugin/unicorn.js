module.exports = {
	plugins: ['unicorn'],

	rules: {
		'unicorn/better-regex': 'warn',
		'unicorn/error-message': 'warn',
		'unicorn/no-array-reduce': 'error',
		'unicorn/no-await-expression-member': 'error',
		'unicorn/no-console-spaces': 'warn',
		'unicorn/no-for-loop': 'warn',
		'unicorn/no-instanceof-array': 'warn',
		'unicorn/no-invalid-remove-event-listener': 'error',
		'unicorn/no-object-as-default-parameter': 'warn',
		'unicorn/no-unused-properties': 'warn',
		'unicorn/no-useless-fallback-in-spread': 'warn',
		'unicorn/no-useless-length-check': 'warn',
		'unicorn/no-useless-promise-resolve-reject': 'warn',
		'unicorn/no-useless-spread': 'warn',
		'unicorn/no-useless-undefined': ['warn', { checkArguments: false }],
		'unicorn/prefer-add-event-listener': 'warn',
		'unicorn/prefer-array-find': 'warn',
		'unicorn/prefer-array-flat-map': 'warn',
		'unicorn/prefer-array-flat': 'warn',
		'unicorn/prefer-array-index-of': 'warn',
		'unicorn/prefer-array-some': 'warn',
		'unicorn/prefer-at': 'warn',
		'unicorn/prefer-date-now': 'warn',
		'unicorn/prefer-default-parameters': 'error',
		'unicorn/prefer-dom-node-append': 'warn',
		'unicorn/prefer-dom-node-dataset': 'warn',
		'unicorn/prefer-dom-node-remove': 'warn',
		'unicorn/prefer-event-key': 'error',
		'unicorn/prefer-export-from': 'error',
		'unicorn/prefer-includes': 'warn',
		'unicorn/prefer-modern-dom-apis': 'warn',
		'unicorn/prefer-native-coercion-functions': 'warn',
		'unicorn/prefer-negative-index': 'warn',
		'unicorn/prefer-object-from-entries': 'warn',
		'unicorn/prefer-query-selector': 'warn',
		'unicorn/prefer-regexp-test': 'warn',
		'unicorn/prefer-spread': 'warn',
		'unicorn/prefer-string-starts-ends-with': 'warn',
		'unicorn/prefer-top-level-await': 'error',
		'unicorn/require-array-join-separator': 'error',
		'unicorn/throw-new-error': 'off',
	},
};

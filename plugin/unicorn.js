import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export const unicorn = {
	plugins: {
		unicorn: eslintPluginUnicorn,
	},

	rules: {
		'unicorn/consistent-empty-array-spread': 'error',
		'unicorn/consistent-existence-index-check': 'warn',
		'unicorn/error-message': 'warn',
		'unicorn/no-anonymous-default-export': 'warn',
		'unicorn/no-array-reduce': 'error',
		'unicorn/no-await-expression-member': 'error',
		'unicorn/no-await-in-promise-methods': 'error',
		'unicorn/no-console-spaces': 'warn',
		'unicorn/no-for-loop': 'warn',
		'unicorn/no-instanceof-array': 'warn',
		'unicorn/no-invalid-fetch-options': 'error',
		'unicorn/no-invalid-remove-event-listener': 'error',
		'unicorn/no-length-as-slice-end': 'warn',
		'unicorn/no-negation-in-equality-check': 'error',
		'unicorn/no-object-as-default-parameter': 'warn',
		'unicorn/no-single-promise-in-promise-methods': 'error',
		'unicorn/no-typeof-undefined': 'warn',
		'unicorn/no-unnecessary-await': 'error',
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
		'unicorn/prefer-math-min-max': 'warn',
		'unicorn/prefer-modern-dom-apis': 'warn',
		'unicorn/prefer-native-coercion-functions': 'warn',
		'unicorn/prefer-negative-index': 'warn',
		'unicorn/prefer-object-from-entries': 'warn',
		'unicorn/prefer-query-selector': 'warn',
		'unicorn/prefer-regexp-test': 'warn',
		'unicorn/prefer-spread': 'warn',
		'unicorn/prefer-string-starts-ends-with': 'warn',
		'unicorn/prefer-structured-clone': 'error',
		'unicorn/prefer-top-level-await': 'error',
		'unicorn/require-array-join-separator': 'error',
		'unicorn/switch-case-braces': 'warn',
		'unicorn/throw-new-error': 'off',
	},
};

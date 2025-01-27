export const variables = {
	rules: {
		'init-declarations': 'off',
		'no-delete-var': 'error',
		'no-shadow': 'warn',
		'no-shadow-restricted-names': 'error',
		'no-undef': 'error',
		'no-undef-init': 'warn',
		'no-unused-vars': [
			'warn',
			{
				args: 'after-used',
				ignoreRestSiblings: true,
			},
		],
		'no-use-before-define': ['error', { functions: false }],
	},
};

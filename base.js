module.exports = {
	rules: {
		// Possible Errors
		'no-cond-assign': ['error'],
		'no-console': ['error'],
		'no-constant-condition': ['error'],
		'no-control-regex': ['error'],
		'no-debugger': ['error'],
		'no-dupe-args': ['error'],
		'no-dupe-keys': ['error'],
		'no-duplicate-case': ['error'],
		'no-empty': ['error'],
		'no-empty-character-class': ['error'],
		'no-ex-assign': ['error'],
		'no-extra-boolean-cast': ['error'],
		'no-extra-semi': ['error'],
		'no-func-assign': ['error'],
		'no-inner-declarations': ['error'],
		'no-invalid-regexp': ['error'],
		'no-irregular-whitespace': ['error'],
		'no-unsafe-negation': ['error'],
		'no-obj-calls': ['error'],
		'no-regex-spaces': ['error'],
		'no-sparse-arrays': ['error'],
		'no-unexpected-multiline': ['error'],
		'no-unreachable': ['error'],
		'use-isnan': ['error'],
		'valid-typeof': ['error'],

		// Best Practices
		'curly': ['error'],
		'default-case': ['error'],
		'dot-location': ['error', 'property'],
		'dot-notation': ['error'],
		'eqeqeq': ['error', 'allow-null'],
		'no-alert': ['error'],
		'no-case-declarations': ['error'],
		'no-div-regex': ['error'],
		'no-else-return': ['error'],
		'no-empty-function': ['error'],
		'no-empty-pattern': ['error'],
		'no-eq-null': ['error'],
		'no-eval': ['error'],
		'no-extend-native': ['error'],
		'no-extra-label': ['error'],
		'no-fallthrough': ['error'],
		'no-floating-decimal': ['error'],
		'no-implicit-coercion': ['error'],
		'no-implied-eval': ['error'],
		'no-iterator': ['error'],
		'no-labels': ['error'],
		'no-lone-blocks': ['error'],
		'no-loop-func': ['error'],
		'no-multi-spaces': ['error'],
		'no-global-assign': ['error'],
		'no-new': ['error'],
		'no-new-func': ['error'],
		'no-new-wrappers': ['error'],
		'no-octal': ['error'],
		'no-octal-escape': ['error'],
		'no-proto': ['error'],
		'no-redeclare': ['error'],
		'no-return-assign': ['error'],
		'no-script-url': ['error'],
		'no-self-assign': ['error'],
		'no-self-compare': ['error'],
		'no-sequences': ['error'],
		'no-throw-literal': ['error'],
		'no-unmodified-loop-condition': ['error'],
		'no-unused-expressions': ['error'],
		'no-unused-labels': ['error'],
		'no-useless-call': ['error'],
		'no-useless-concat': ['error'],
		'no-useless-escape': ['error'],
		'no-useless-return': ['error'],
		'no-void': ['error'],
		'no-warning-comments': ['error'],
		'no-with': ['error'],
		'radix': ['error'],
		'wrap-iife': ['error', 'any'],
		'yoda': ['error'],

		// Variables
		'no-catch-shadow': ['error'],
		'no-delete-var': ['error'],
		'no-label-var': ['error'],
		'no-restricted-globals': ['error'],
		'no-shadow': ['error'],
		'no-shadow-restricted-names': ['error'],
		'no-undef': ['error'],
		'no-undef-init': ['error'],
		'no-unused-vars': ['error'],

		// Stylistic Issues
		'array-bracket-spacing': ['error', 'never'],
		'block-spacing': ['error', 'always'],
		'brace-style': ['error'],
		'camelcase': ['error'],
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': ['error'],
		'comma-style': ['error'],
		'computed-property-spacing': ['error'],
		'eol-last': ['error'],
		'func-call-spacing': ['error', 'never'],
		'func-name-matching': ['error'],
		'indent': ['error', 'tab', { SwitchCase: 1 }],
		'key-spacing': ['error'],
		'keyword-spacing': ['error'],
		'linebreak-style': ['error'],
		'lines-around-directive': ['error', { before: 'never', after: 'always' }],
		'newline-after-var': ['error'],
		'newline-before-return': ['error'],
		'no-bitwise': ['error'],
		'no-lonely-if': ['error'],
		'no-mixed-operators': ['error'],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-multi-assign': ['error'],
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
		'no-nested-ternary': ['error'],
		'no-new-object': ['error'],
		'no-trailing-spaces': ['error'],
		'no-unneeded-ternary': ['error'],
		'no-whitespace-before-property': ['error'],
		'object-curly-spacing': ['error', 'always'],
		'one-var': ['error', 'never'],
		'one-var-declaration-per-line': ['error'],
		'padded-blocks': ['error', 'never'],
		'quote-props': ['error', 'consistent-as-needed'],
		'quotes': ['error', 'single', { allowTemplateLiterals: true }],
		'semi': ['error', 'always'],
		'semi-spacing': ['error'],
		'space-before-blocks': ['error'],
		'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
		'space-in-parens': ['error'],
		'space-infix-ops': ['error'],
		'space-unary-ops': ['error'],
		'spaced-comment': ['error'],
		'wrap-regex': ['error'],
	},
};

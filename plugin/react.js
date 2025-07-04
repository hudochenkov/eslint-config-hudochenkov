import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

export const react = defineConfig([
	{
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
		},

		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		settings: {
			react: {
				version: 'detect',
			},
		},

		rules: {
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			'react/button-has-type': 'error',
			'react/default-props-match-prop-types': 'off',
			'react/destructuring-assignment': 'off',
			'react/forward-ref-uses-ref': 'error',
			'react/function-component-definition': [
				'warn',
				{
					namedComponents: 'function-declaration',
					unnamedComponents: 'arrow-function',
				},
			],
			'react/no-access-state-in-setstate': 'error',
			'react/no-array-index-key': 'error',
			'react/no-children-prop': 'error',
			'react/no-danger': 'warn',
			'react/no-danger-with-children': 'error',
			'react/no-deprecated': 'warn',
			'react/no-did-mount-set-state': 'warn',
			'react/no-did-update-set-state': 'warn',
			'react/no-direct-mutation-state': 'error',
			'react/no-find-dom-node': 'warn',
			'react/no-object-type-as-default-prop': 'warn',
			'react/no-redundant-should-component-update': 'warn',
			'react/no-render-return-value': 'error',
			'react/no-set-state': 'off',
			'react/no-string-refs': 'warn',
			'react/no-this-in-sfc': 'error',
			'react/no-typos': 'warn',
			'react/no-unknown-property': 'warn',
			'react/no-unsafe': 'warn',
			'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
			'react/no-unused-prop-types': 'warn',
			'react/no-unused-state': 'warn',
			'react/no-will-update-set-state': 'error',
			'react/prefer-es6-class': 'off',
			'react/prefer-stateless-function': 'warn',
			'react/prop-types': 'warn',
			'react/react-in-jsx-scope': 'error',
			'react/require-default-props': 'off',
			'react/require-optimization': 'off',
			'react/require-render-return': 'error',
			'react/self-closing-comp': 'warn',
			'react/void-dom-elements-no-children': 'error',

			'react/jsx-boolean-value': ['warn', 'never'],
			'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
			'react/jsx-filename-extension': ['warn', { extensions: ['.js'] }],
			'react/jsx-max-depth': 'off',
			'react/jsx-no-bind': 'off',
			'react/jsx-no-comment-textnodes': 'warn',
			'react/jsx-no-constructed-context-values': 'error',
			'react/jsx-no-duplicate-props': 'error',
			'react/jsx-no-literals': 'off',
			'react/jsx-no-script-url': 'error',
			'react/jsx-no-target-blank': 'warn',
			'react/jsx-no-undef': 'error',
			'react/jsx-no-useless-fragment': 'warn',
			'react/jsx-pascal-case': 'warn',
			'react/jsx-props-no-spreading': 'off',
			'react/jsx-sort-props': 'off',
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
		},
	},
]);

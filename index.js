module.exports = {
	extends: [
		'./base',
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
	rules: {
		// ECMAScript 6
		'arrow-body-style': ['warn', 'as-needed'],
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': ['error'],
		'no-confusing-arrow': ['error'],
		'no-const-assign': ['error'],
		'no-duplicate-imports': ['error'],
		'no-useless-computed-key': ['error'],
		'no-useless-rename': ['error'],
		'object-shorthand': ['warn', 'always'],
		'prefer-const': ['warn', {
			destructuring: 'all',
		}],
		'prefer-template': ['warn'],
		'template-curly-spacing': ['error', 'never'],
	},
};

module.exports = {
	extends: ['./base', './common-plugins'],
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
};

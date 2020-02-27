module.exports = {
	plugins: ['import'],

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.json'],
			},
		},
		'import/ignore': ['node_modules', '\\.(css|pcss|scss|svg|json)$'],
	},

	rules: {
		// Static analysis
		'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
		'import/named': 'error',
		'import/no-dynamic-require': 'warn',
		'import/no-webpack-loader-syntax': 'error',
		'import/no-self-import': 'error',
		'import/no-cycle': 'error',
		'import/no-useless-path-segments': ['warn', { commonjs: true, noUselessIndex: true }],
		'import/no-relative-parent-imports': 'off',

		// Helpful warnings
		'import/export': 'warn',
		'import/no-named-as-default': 'warn',
		'import/no-named-as-default-member': 'warn',
		'import/no-deprecated': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'tests/**', // also common npm pattern
					'**/__tests__/**', // jest pattern
					'**/__mocks__/**', // jest pattern
					'test.js', // repos with a single test file
					'test-*.js', // repos with multiple top-level test files
					'**/*{.,_}test.js', // tests where the extension or filename suffix denotes that it is a test
					'**/jest.config.js', // jest config
					'**/jest.setup.js', // jest setup
					'**/webpack.config.js', // webpack config
					'**/webpack.config.*.js', // webpack config
					'**/rollup.config.js', // rollup config
					'**/rollup.config.*.js', // rollup config
					'**/gulpfile.js', // gulp config
					'**/Gruntfile.js', // grunt config
				],
				optionalDependencies: false,
			},
		],
		'import/no-mutable-exports': 'error',
		// 'import/no-unused-modules': [
		// 	'warn',
		// 	{
		// 		missingExports: true,
		// 		unusedExports: true,
		// 	},
		// ],

		// Style guide
		'import/first': 'warn',
		'import/no-duplicates': 'warn',
		'import/newline-after-import': 'warn',
		'import/prefer-default-export': 'warn',
		'import/no-named-default': 'warn',
		'import/no-default-export': 'off',
		'import/no-named-export': 'off',
	},
};

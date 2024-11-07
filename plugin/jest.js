import jestPlugin from 'eslint-plugin-jest';
import globals from 'globals';

export const jest = {
	files: ['**/*.test.[jt]s?(x)'],
	plugins: {
		jest: jestPlugin,
	},
	languageOptions: {
		globals: {
			...globals.jest,
		},
	},
	rules: {
		'jest/no-alias-methods': 'error',
		'jest/no-conditional-in-test': 'error',
		'jest/no-confusing-set-time': 'error',
		'jest/no-deprecated-functions': 'error',
		'jest/no-done-callback': 'warn',
		'jest/no-duplicate-hooks': 'error',
		'jest/no-mocks-import': 'error',
		'jest/no-test-return-statement': 'error',
		'jest/padding-around-all': 'warn',
		'jest/padding-around-expect-groups': 'off',
		'jest/prefer-comparison-matcher': 'warn',
		'jest/prefer-each': 'warn',
		'jest/prefer-equality-matcher': 'warn',
		'jest/prefer-expect-resolves': 'error',
		'jest/prefer-hooks-in-order': 'warn',
		'jest/prefer-hooks-on-top': 'warn',
		'jest/prefer-jest-mocked': 'error',
		'jest/prefer-mock-promise-shorthand': 'warn',
		'jest/prefer-spy-on': 'error',
		'jest/prefer-to-be': 'warn',
		'jest/prefer-to-contain': 'warn',
		'jest/prefer-to-have-length': 'warn',
		'jest/valid-describe-callback': 'error',
		'jest/valid-expect-in-promise': 'error',
		'jest/valid-expect': 'error',
		'jest/valid-title': 'warn',
	},
};

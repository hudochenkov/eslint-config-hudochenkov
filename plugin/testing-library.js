import testingLibraryPlugin from 'eslint-plugin-testing-library';

export const testingLibrary = {
	files: ['**/*.test.[jt]s?(x)'],

	plugins: {
		'testing-library': testingLibraryPlugin,
	},

	rules: {
		'testing-library/await-async-queries': 'error',
		'testing-library/await-async-utils': 'error',
		'testing-library/no-await-sync-events': 'error',
		'testing-library/no-await-sync-queries': 'error',
		'testing-library/no-debugging-utils': 'warn',
		'testing-library/no-global-regexp-flag-in-query': 'error',
		'testing-library/no-promise-in-fire-event': 'error',
		'testing-library/no-unnecessary-act': 'error',
		'testing-library/no-wait-for-multiple-assertions': 'error',
		'testing-library/no-wait-for-side-effects': 'error',
		'testing-library/no-wait-for-snapshot': 'error',
		'testing-library/prefer-find-by': 'warn',
		'testing-library/prefer-presence-queries': 'error',
		'testing-library/prefer-query-by-disappearance': 'error',
		'testing-library/prefer-screen-queries': 'warn',
		'testing-library/prefer-user-event': 'error',
	},
};

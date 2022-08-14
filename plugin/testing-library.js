module.exports = {
	plugins: ['testing-library'],

	overrides: [
		{
			files: ['**/*.test.[jt]s?(x)'],
			rules: {
				'testing-library/await-async-query': 'error',
				'testing-library/await-async-utils': 'error',
				'testing-library/no-await-sync-events': 'error',
				'testing-library/no-await-sync-query': 'error',
				'testing-library/no-debugging-utils': 'warn',
				'testing-library/no-global-regexp-flag-in-query': 'error',
				'testing-library/no-promise-in-fire-event': 'error',
				'testing-library/no-unnecessary-act': 'error',
				'testing-library/no-wait-for-empty-callback': 'error',
				'testing-library/no-wait-for-multiple-assertions': 'error',
				'testing-library/no-wait-for-side-effects': 'error',
				'testing-library/no-wait-for-snapshot': 'error',
				'testing-library/prefer-find-by': 'warn',
				'testing-library/prefer-presence-queries': 'error',
				'testing-library/prefer-query-by-disappearance': 'error',
				'testing-library/prefer-screen-queries': 'warn',
				'testing-library/prefer-user-event': 'error',
				'testing-library/prefer-wait-for': 'error',
			},
		},
	],
};

import { defineConfig } from 'eslint/config';
import globals from 'globals';
import { possibleProblems } from './built-in/possibleProblems.js';
import { suggestions } from './built-in/suggestions.js';
import { importRules } from './plugin/import.js';
import { jest } from './plugin/jest.js';
import { jestDom } from './plugin/jest-dom.js';
import { jsxA11y } from './plugin/jsx-a11y.js';
import { react as reactPlugin } from './plugin/react.js';
import { stylistic } from './plugin/stylistic.js';
import { testingLibrary } from './plugin/testing-library.js';
import { unicorn } from './plugin/unicorn.js';

const base = defineConfig([possibleProblems, suggestions]);

const commonPlugins = defineConfig([stylistic, unicorn, jest, importRules]);

const react = defineConfig([jsxA11y, reactPlugin]);

const reactTesting = defineConfig([jestDom, testingLibrary]);

const main = defineConfig([
	{
		languageOptions: {
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
			},
			globals: {
				...globals.builtin,
				...globals.browser,
			},
		},
	},
	base,
	commonPlugins,
]);

export const configs = {
	main,
	base,
	commonPlugins,
	react,
	reactTesting,
};

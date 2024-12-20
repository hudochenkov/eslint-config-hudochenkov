import globals from 'globals';
import { bestPractices } from './built-in/bestPractices.js';
import { es6 } from './built-in/es6.js';
import { importRules } from './plugin/import.js';
import { jest } from './plugin/jest.js';
import { jestDom } from './plugin/jest-dom.js';
import { jsxA11y } from './plugin/jsx-a11y.js';
import { possibleErrors } from './built-in/possibleErrors.js';
import { react as reactPlugin } from './plugin/react.js';
import { stylisticIssues } from './built-in/stylisticIssues.js';
import { testingLibrary } from './plugin/testing-library.js';
import { unicorn } from './plugin/unicorn.js';
import { variables } from './built-in/variables.js';

const base = [possibleErrors, bestPractices, variables, stylisticIssues, es6];

const commonPlugins = [unicorn, jest, ...importRules];

const react = [jsxA11y, reactPlugin];

const reactTesting = [jestDom, testingLibrary];

const main = [
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
	...base,
	...commonPlugins,
];

export const configs = {
	main,
	base,
	commonPlugins,
	react,
	reactTesting,
};

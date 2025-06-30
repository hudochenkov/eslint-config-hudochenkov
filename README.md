# eslint-config-hudochenkov

My configs for [ESLint].

Available configs:

* `main` — default config which includes following configs:
	* `base` — config with only ESLint core rules.
	* `commonPlugins` — config with [@stylistic/eslint-plugin], [eslint-plugin-unicorn], and [eslint-plugin-import]. Applies both for browser and Node.js projects.
* `react` — config for React applications. Includes [eslint-plugin-react], [eslint-plugin-react-hooks], and [eslint-plugin-jsx-a11y] plugins.
* `reactTesting` — config for tesing React apps with [React Testing Library]. Includes [eslint-plugin-jest-dom] and [eslint-plugin-testing-library] plugins.
* `jest` — config with [eslint-plugin-jest].

## Installation

Install config:

```
npm install --save-dev eslint-config-hudochenkov
```

## Usage

Add chosen config to your [ESLint configuration](https://eslint.org/docs/latest/use/configure/combine-configs):

```js
import { configs } from 'eslint-config-hudochenkov';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	configs.main,
	configs.react,
	configs.reactTesting,
	// other configuration objects
]);
```

[ESLint]: https://eslint.org/
[@stylistic/eslint-plugin]: https://eslint.style/
[eslint-plugin-import]: https://github.com/import-js/eslint-plugin-import
[eslint-plugin-react]: https://github.com/jsx-eslint/eslint-plugin-react
[eslint-plugin-react-hooks]: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
[eslint-plugin-jsx-a11y]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
[eslint-plugin-unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn
[eslint-plugin-jest]: https://github.com/jest-community/eslint-plugin-jest
[React Testing Library]: https://testing-library.com/docs/react-testing-library/intro/
[eslint-plugin-jest-dom]: https://github.com/testing-library/eslint-plugin-jest-dom
[eslint-plugin-testing-library]: https://github.com/testing-library/eslint-plugin-testing-library

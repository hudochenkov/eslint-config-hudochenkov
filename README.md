# eslint-config-hudochenkov

My configs for [ESLint].

Available configs:

* `eslint-config-hudochenkov` — default config which includes following configs:
	* `eslint-config-hudochenkov/base` — config with only ESLint core rules.
	* `eslint-config-hudochenkov/common-plugins` — config with [eslint-plugin-unicorn], [eslint-plugin-import], and [eslint-plugin-jest]. Applies both for browser and Node.js projects.
* `eslint-config-hudochenkov/react` — config for React applications. Includes [eslint-plugin-react], [eslint-plugin-react-hooks], and [eslint-plugin-jsx-a11y] plugins.
* `eslint-config-hudochenkov/react-testing` — config for tesing React apps with [React Testing Library]. Includes [eslint-plugin-jest-dom] and [eslint-plugin-testing-library] plugins.

## Installation

Install config:

```
npm install --save-dev eslint-config-hudochenkov
```

## Usage

Add chosen config to the [`extends` section](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) of your ESLint configuration:

```json
{
	"extends": ["eslint-config-hudochenkov"]
}
```

```json
{
	"extends": [
		"eslint-config-hudochenkov/react",
		"eslint-config-hudochenkov/react-testing"
	]
}
```

[ESLint]: https://eslint.org/
[eslint-plugin-import]: https://github.com/import-js/eslint-plugin-import
[eslint-plugin-react]: https://github.com/jsx-eslint/eslint-plugin-react
[eslint-plugin-react-hooks]: https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
[eslint-plugin-jsx-a11y]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
[eslint-plugin-unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn
[eslint-plugin-jest]: https://github.com/jest-community/eslint-plugin-jest
[React Testing Library]: https://testing-library.com/docs/react-testing-library/intro/
[eslint-plugin-jest-dom]: https://github.com/testing-library/eslint-plugin-jest-dom
[eslint-plugin-testing-library]: https://github.com/testing-library/eslint-plugin-testing-library

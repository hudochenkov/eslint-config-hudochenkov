# eslint-config-hudochenkov

My configs for [ESLint].

Available configs:

* `eslint-config-hudochenkov` — default config which includes following configs:
	* `eslint-config-hudochenkov/base` — config with only ESLint core rules.
	* `eslint-config-hudochenkov/common-plugins` — config with [eslint-plugin-unicorn] and [eslint-plugin-import]. Applies both for browser and Node.js projects.
* `eslint-config-hudochenkov/react` — config for React applications. Includes [eslint-plugin-react], [eslint-plugin-react-hooks], and [eslint-plugin-jsx-a11y] plugins.

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
	"extends": ["eslint-config-hudochenkov/react"]
}
```

[ESLint]: https://eslint.org/
[eslint-plugin-import]: https://github.com/benmosher/eslint-plugin-import
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-react-hooks]: https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
[eslint-plugin-jsx-a11y]: https://github.com/evcohen/eslint-plugin-jsx-a11y
[eslint-plugin-unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn

# eslint-config-hudochenkov [![Build Status][ci-img]][ci]

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

Install required plugins, which are listed as peer dependencies in this config:

```
npx install-peerdeps --dev eslint-config-hudochenkov
```

If you're using `eslint-config-hudochenkov/react`, install additional plugins:

```
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

They're not listed as `peerDependencies`, because not every project is a React project. npm will shows warning after each `npm install` if not all `peerDependencies` are installed.

## Usage

Add chosen config to the [`extends` section](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) of your ESLint configuration:

```
{
	"extends": ["eslint-config-hudochenkov"]
}
```

```
{
	"extends": ["eslint-config-hudochenkov/react"]
}
```

[ci-img]: https://travis-ci.org/hudochenkov/eslint-config-hudochenkov.svg
[ci]: https://travis-ci.org/hudochenkov/eslint-config-hudochenkov
[ESLint]: https://eslint.org/

[eslint-plugin-import]: https://github.com/benmosher/eslint-plugin-import
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-react-hooks]: https://github.com/facebook/react/tree/master/packageseslint-plugin-react-hooks)
[eslint-plugin-jsx-a11y]: https://github.com/evcohen/eslint-plugin-jsx-a11y
[eslint-plugin-unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn

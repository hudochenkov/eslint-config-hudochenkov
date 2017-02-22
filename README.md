# eslint-config-hudochenkov [![Build Status][ci-img]][ci]

My configs for [ESLint].

## Installation

```
npm install eslint-config-hudochenkov
```

Additionally install [`eslint-plugin-react`] for `react` config.

```
npm install eslint-plugin-react
```

## Usage

### eslint-config-hudochenkov

Default config contains all rules including ES6.

Add `"extends": "eslint-config-hudochenkov"` to your `.eslintrc`.

### eslint-config-hudochenkov/base

Config contains all rules not including ES6 (ES5). 

Add `"extends": "eslint-config-hudochenkov/base"` to your `.eslintrc`.

### eslint-config-hudochenkov/react

Config contains all rules including ES6. Also contains rules for React (uses [`eslint-plugin-react`]).

Add `"extends": "eslint-config-hudochenkov/react"` to your `.eslintrc`.

[ci-img]: https://travis-ci.org/hudochenkov/eslint-config-hudochenkov.svg
[ci]: https://travis-ci.org/hudochenkov/eslint-config-hudochenkov
[ESLint]: http://eslint.org/
[`eslint-plugin-react`]: https://github.com/yannickcr/eslint-plugin-react

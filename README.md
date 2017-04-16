<h1 align="center">is-itf14</h1>
<div align="center">
  <strong>Check if value valid ITF14 barcode</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/is-itf14">
    <img src="https://img.shields.io/npm/v/is-itf14.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/is-itf14">
  <img src="https://img.shields.io/npm/dm/is-itf14.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/is-itf14">
    <img src="https://img.shields.io/travis/tiaanduplessis/is-itf14.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fis-itf14">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fis-itf14.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/is-itf14">
    <img src="https://dependencyci.com/github/tiaanduplessis/is-itf14/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/is-itf14/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/is-itf14.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/is-itf14/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/is-itf14.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/is-itf14/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/is-itf14.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20is-itf14!%20https://github.com/tiaanduplessis/is-itf14%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/is-itf14.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaan.beer">Tiaan</a> and <a href="https://github.com/tiaanduplessis/is-itf14/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#cli">CLI</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install --save is-itf14
# OR
$ yarn add is-itf14
```

## Usage

Module exports a single function that takes a `string` as argument and returns `bool`.

```js
const isItf14 = require('is-itf14')

console.log(isItf14('00123456789012')) // true

// Without checksum
console.log(isItf14('0012345678901')) // true

console.log(isItf14('foobarbaz')) // false
```

## CLI

```sh
$ npm install --global is-itf14
# OR
$ yarn global add is-itf14
```

Then:

```sh
$ isItf14 00123456789012
# true
```

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.

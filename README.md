# get-fqdn

[![build status](https://github.com/forwardemail/get-fqdn/actions/workflows/ci.yml/badge.svg)](https://github.com/forwardemail/get-fqdn/actions/workflows/ci.yml)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/forwardemail/get-fqdn.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/get-fqdn.svg)](https://npm.im/get-fqdn)

> Lookup the fully qualified domain name ("FQDN") of the current server's IP (default) or a custom IP.  90x faster than `hostname -f` and works with Node v14+.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Performance](#performance)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install get-fqdn
```


## Usage

```js
const getFQDN = require('get-fqdn');

// async/await usage
(async () => {
  try {
    const fqdn = await getFQDN();
    console.log('fqdn', fqdn);
  } catch (err) {
    console.error(err);
  }
});

// then/catch usage
getFQDN().then(fqdn => console.log('fqdn', fqdn)).catch(console.error);
```

Note that you can also pass a custom IP:

```js
const fqdn = await getFQDN('1.1.1.1');
console.log('fqdn', fqdn);
```


## Performance

This package runs approximately 90x faster than the alternative of using `hostname -f`.

It was built to ensure that [ForwardEmail.net](https://forwardemail.net) is as optimized as possible.

Others packages [were written in CoffeeScript](https://github.com/CliffS/fqdn-promise/blob/master/src/fqdn.coffee), used [deasync](https://github.com/rsrdesarrollo/node-fqdn/blob/master/index.js), or used the [hostname -f](https://github.com/fatelei/js-fqdn/blob/ffec496afb07559fb64dc5e6b78b50c6339d78c5/lib/fqdn.js) approach (also see the [fqdn][] package that uses the wrong approach too).


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


##

[npm]: https://www.npmjs.com/

[fqdn]: https://www.npmjs.com/package/fqdn

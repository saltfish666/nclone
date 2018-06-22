# Ensure-path
[![Build Status](https://travis-ci.org/saltfish666/ensure-path.svg?branch=master)](https://travis-ci.org/saltfish666/ensure-path)
[![codecov](https://codecov.io/gh/saltfish666/ensure-path/branch/master/graph/badge.svg)](https://codecov.io/gh/saltfish666/ensure-path)
[![npm version](https://badge.fury.io/js/ensure-path.svg)](https://badge.fury.io/js/ensure-path)
![npm](https://img.shields.io/npm/dm/ensure-path.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## What does this do?
If you use `fs.mkdir('./foo/bar',callback)`,it will throws error if `foo` does not exist or `bar`
already esists.

`ensure-path` make a simple and safe way to cerate a dir or file.

## How to use?

`npm i ensure-path --save`
```
const {ensureDirSync, ensureFileSync} = require('ensure-path')
 
 //ensure there have a dir
 ensureDirSync('./foo/bar')
 
 //ensure there hava a file
 ensureFileSync('./hello/world.txt')
 // if file already exists, it will keep file abiding
```

## notice
you need use super user to create dir or file on root dir.

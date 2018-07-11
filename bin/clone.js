#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const argv = require('yargs').argv

if (argv['_'].length === 0 || argv['h'] || argv['help']) {
    fs.createReadStream(path.join(__dirname, 'usage.txt')).pipe(process.stdout);
    return null
}

if (argv['v']) {
	return console.log(require('../package.json').version)
}

const github = require('octonode')
const downloadDir = require('../lib/downloadDir')

let token = argv['t'] || argv['token'] || 'be7f6099cba4524c4208d99e89f75a719346dd3b'
const client = github.client(token)

let dirDepth = argv['d'] || 10
let fileDepth = argv['f'] || 1
let url = 'https://api.github.com/repos/' + argv['_'][0] + '/contents'
let dirLocation = path.normalize(argv['_'][1] || '.')
//downloadDir(client, dirLocation, url, dirDepth, fileDepth)

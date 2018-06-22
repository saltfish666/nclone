#!/usr/bin/env node
const path = require('path')
const argv = require('yargs').argv
const github = require('octonode')

const downloadDir = require('../lib/downloadDir')

let token = argv['t'] || argv['token'] || '7ca7fb6bc74aff0c00c7fee0793c425d143cf1c2'
const client = github.client(token)

let dirDepth = argv['d'] || 10
let fileDepth = argv['f'] || 1
let url = 'https://api.github.com/repos/' + argv['_'][0] + '/contents'
let dirLocation = path.normalize(argv['_'][1])
downloadDir(client, dirLocation, url, dirDepth, fileDepth)

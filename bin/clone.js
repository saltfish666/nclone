#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const argv = require('yargs').argv

if (argv['v']) {
  console.log(require('../package.json').version)
  process.exit(0)
}

if (argv['_'].length === 0 || argv['h'] || argv['help']) {
  fs.createReadStream(path.join(__dirname, 'usage.txt')).pipe(process.stdout)
  process.exit(0)
}

const github = require('octonode')
const downloadDir = require('../lib/downloadDir')

let token = argv['t'] || argv['token']
if (!token) {
  console.log('unauthorization user limte to github api 60/pre_hour')
  token = 'be7f6099cba4524c4208d99e89f75a719346dd3b'
}
const client = github.client(token)

let dirDepth = argv['d'] || 10
let fileDepth = argv['f'] || 1

let repo = require('../lib/getRepo.js')(argv['_'][0])

let url = 'https://api.github.com/repos/' + repo + '/contents'
let repoName = repo.split('/')[1]
let dirLocation = path.normalize(argv['_'][1] || `./${repoName}`)
downloadDir(client, dirLocation, url, dirDepth, fileDepth)

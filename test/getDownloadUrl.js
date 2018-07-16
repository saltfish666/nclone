const assert = require('assert')
const getDownloadUrl = require('../lib/getDownloadUrl')

describe('getDownloadUrl', () => {
  it('should parse [name/repo] ', () => {
    let s = 'saltfish666/nclone'
    assert.equal(getDownloadUrl(s), 'https://api.github.com/repos/saltfish666/nclone/contents')
  })
  it('should parse [https://github.com/saltfish666/nclone] ', () => {
    let s = 'https://github.com/saltfish666/nclone'
    assert.equal(getDownloadUrl(s), 'https://api.github.com/repos/saltfish666/nclone/contents/?ref=master')
  })
  it('should parse [https://github.com/saltfish666/nclone/tree/master/bin] ', () => {
    let s = 'https://github.com/saltfish666/nclone/tree/master/bin'
    assert.equal(getDownloadUrl(s), 'https://api.github.com/repos/saltfish666/nclone/contents/bin?ref=master')
  })
  it('should parse [https://github.com/saltfish666/nclone/blob/master/bin/clone.js] ', () => {
    let s = 'https://github.com/saltfish666/nclone/blob/master/bin/clone.js'
    assert.equal(getDownloadUrl(s), 'https://api.github.com/repos/saltfish666/nclone/contents/bin/clone.js?ref=master')
  })
})

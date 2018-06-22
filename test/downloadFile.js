const path = require('path')
const fs = require('fs')
const assert = require('assert')
const downloadFile = require('../lib/downloadFile')

/* global describe:false, it:false */
describe('ensureDirSync', () => {
  it('should make a file when give a not exist relative file path', async () => {
    let file = path.normalize('./test/notExist/test__LICENSE')
    await downloadFile(file, 'https://raw.githubusercontent.com/saltfish666/ensure-path/master/LICENSE')
    assert(fs.existsSync(file) && fs.statSync(file).isFile())
  })
})

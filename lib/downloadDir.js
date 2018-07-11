const path = require('path')
const URL = require('url').URL
const {ensureDirSync} = require('ensure-path')
const downloadFile = require('./downloadFile')

function downloadDir (client, dirLocation, url, dirDepth = 10, fileDepth = 1) {
  url = new URL(url)
  ensureDirSync(dirLocation)
  client.get(url.pathname, {}, (err, status, body, headers) => {
    if (err) return console.error(err)
    for (let info of body) {
      console.log('it is ', info)
      if (info.type === 'file' && fileDepth >= 1) downloadFile(path.join(dirLocation, info.name), info.download_url)
      if (info.type === 'dir' && dirDepth >= 1) downloadDir(client, path.join(dirLocation, info.name), info.url, dirDepth - 1, fileDepth - 1)
    }
  })
}

module.exports = downloadDir

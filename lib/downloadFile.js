const fs = require('fs')

const request = require('request')
const {ensureFileSync} = require('ensure-path')

module.exports = (fileLocation, url) => {
  ensureFileSync(fileLocation)

  if (fs.existsSync(fileLocation)) {
    return null
  }

  request(url, (err, res, body) => {
    if (err) return console.log(err)
    fs.writeFile(fileLocation, body, () => {})
  })
}

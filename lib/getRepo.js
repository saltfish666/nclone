let url = require('url')

module.exports = (s) => {
  if (/^[a-zA-Z0-9]+\/[a-zA-Z0-9]+$/.test(s)) {
    return s
  }
  let u = url.parse(s)
  console.log(u)
  if (u.hostname !== 'github.com') {
    throw new Error('url should format like "https://github.com/saltfish666/nclone"')
  }
  if (/^\/[a-zA-Z0-9]+\/[a-zA-Z0-9]+$/.test(u.pathname)) {
    return u.pathname.slice(1)
  }

  throw new Error('url should format like "https://github.com/saltfish666/nclone"\nor "saltfish666/nclone"')
}

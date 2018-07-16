let url = require('url')

/*
 * @param {String} Url or {String} repo  from first args
 * such as 'https://github.com/saltfish666/nclone' or 'saltfish666/nclone'
 * this func will get repo from a github url
*/

module.exports = (s) => {
  if (/^[a-zA-Z0-9]+\/[a-zA-Z0-9]+$/.test(s)) {
    return `https://api.github.com/repos/${s}/contents`
  }
  let u = url.parse(s)

  if (u.hostname !== 'github.com') {
    throw new Error('url should format like "https://github.com/saltfish666/nclone"')
  }
  let path = u.pathname.split('/')
  // '/hua1995116/git-down-repo/blob/master/.gitignore'.split('/') => ["", "hua1995116", "git-down-repo", "blob", "master", ".gitignore"]
  path.shift()

  let name = path[0]
  let repo = path[1]
  let isDir = (path[2] === 'blob')
  let branch = path[3] || 'master'
  let filePath = path.slice(4).join('/')

  return `https://api.github.com/repos/${name}/${repo}/contents/${filePath}?ref=${branch}`

  // throw new Error('url should format like "https://github.com/saltfish666/nclone"\nor "saltfish666/nclone"')
}

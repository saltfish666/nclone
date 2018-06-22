# Ensure-path
![npm](https://img.shields.io/npm/dm/nclone.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## What does this do?
There are many project template cli, you may confuse which tem or cli should choose.

In my experience, I my dreamed project template always exist in GitHub.

This cli can copy a github project's dir-tree and file.  

## How to use?

```
$ npm i nclone -g
$ nclone [repo] [targetDir] [-t=YOU_ACCESS_TOKEN] [-d=10] [-f=1]
```
`repo` is a github repo ,must format as USER/REPO such as  saltfish666/nclone

`targetDir` is where you want to save files default as current dir.

**warnning: it will rewirte file if file already exists**

`-t` should be you access token to touch api.github.com

`-d` is dir depth that you want to copy defalut as 10

`-f` is file depth that you want to copy defalut as 1 

## next-release
- should not rewirte file if it already exist
- use git-clone if access_token does not exist

## history
null

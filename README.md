# Gazer

> Watch some files, do a thing

A simple wrapper for [Shama's gaze
module](https://github.com/shama/gaze) that performs an arbitrary
command when files change. Like
[watchify](https://github.com/substack/watchify), but for everything.

### Installation

```shell
$ npm install -g gazer
```

## Usage

```shell
$ gazer --patern "readme.md" echo "blorp"

[readme.md changes]

> "blorp"
```



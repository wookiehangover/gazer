# Gazer

> Watch some files, do a thing

A simple wrapper for [Shama's gaze
module](https://github.com/shama/gaze) that performs an arbitrary
command when files change. Like
[watchify](https://github.com/substack/watchify), but for everything.

## Installation

```shell
$ npm install -g gazer
```

## Usage

```shell
$ gazer --pattern "readme.md" echo "blorp"

[readme.md changes]

> "blorp"
```

### Arbitrary watch tasks with npm run

If you haven't read substack's [post describing lightweight build steps
with `npm run`](http://substack.net/task_automation_with_npm_run), I'll
give you a moment to get up to speed.

Here's how you might use `gazer` to run a build task every time a file
changes:

```javascript
{
  "scripts": {
    "build-less": "lessc public/less/main.less public/css/main.css",
    "watch-less": "gazer -p 'public/less/**/*.less' npm run build-less"
  }
}
```

And then start the watcher:

```shell
$ npm run watch-less
```

### Double dash

If you need to pass a -p argument to the command you're running, use
`--` to separate the option arguments from the positional arguments:

```shell
$ gazer -p readme.md -- echo -p
```

This feature is provided [for free](http://c2.com/cgi/wiki?ForFree)
by [optimist](https://github.com/substack/node-optimist).


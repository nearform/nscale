
# nscale

<img align="right" width="150" src="https://raw.githubusercontent.com/nearform/nscale/master/docs/images/logo.png">

> A toolkit for application deployments and container management

__nscale__ is an open source project to configure, build and deploy a set of connected containers to constitute a working platform for distributed applications.

## Install

```sh
$ npm install -g nscale
```

__nscale__ depends on [nodejs](http://nodejs.org/), [npm](http://npmjs.org/) and [git](http://git-scm.com/).

## Running nscale

```sh
$ nsd-server -c /path/to/config.json
```

## Getting started

### Run boot2docker

Depends on [boot2docker](https://github.com/boot2docker/boot2docker)

```sh
boot2docker up
```

### Clone nfd demo

```sh
nsd system clone git@github.com:nearform/nfddemo.git
```

### Build web container

```sh
nsd container build nfdemo web
```

### Deploy nfdemo

```sh
nsd system deploy nfdemo
```

### Open nfdemo in the browser

[http://localhost:8000](http://localhost:8000)

## License

Copyright (c) 2014 Nearform and other contributors

Licensed under the Artistic License 2.0

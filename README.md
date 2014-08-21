
# nfd

<img align="right" width="150" src="https://raw.githubusercontent.com/nearform/nfd/master/docs/images/logo.png">

> A toolkit for application deployments and container management

nfd is an open source project to configure, build and deploy a set of connected containers to constitute a working platform for distributed applications.

## Install

```sh
$ npm install -g nfd
```

nfd depends on [nodejs](http://nodejs.org/), [npm](http://npmjs.org/) and [git](http://git-scm.com/).

## Running nfd

```sh
$ nfd-server -c /path/to/config.json
```

## Getting started

### Run boot2docker

Depends on [boot2docker](https://github.com/boot2docker/boot2docker)

```sh
boot2docker up
```

### Clone nfd demo

```sh
nfd system clone git@github.com:nearform/nfddemo.git
```

### Build web container

```sh
nfd container build nfdemo web
```

### Deploy nfdemo

```sh
nfd system deploy nfdemo
```

### Open nfdemo in the browser

[http://localhost:8000](http://localhost:8000)

## License

Copyright (c) 2014 Nearform and other contributors

Licensed under the MIT License

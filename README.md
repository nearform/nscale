
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
$ nsd-server -c /usr/local/etc/nscale/config.json
```

## Getting started

### Run boot2docker

Depends on [boot2docker](https://github.com/boot2docker/boot2docker)

```sh
boot2docker up
```

### Login

By default, login uses the email defined in ~/.gitconfig and that is all that is required.

```sh
nsd login
```

### Clone nfd demo

```sh
nsd system clone git@github.com:nearform/nfddemo.git
```

### Build web container

```sh
nsd container build nfddemo web
```

### Deploy nfd demo

Replace \<revision_id\> with the latest revision shown by the revision list command.

```sh
nsd revision list nfddemo
nsd revision deploy nfddemo <revision_id>
```

### Open nfd demo in the browser

```sh
open http://$(boot2docker ip):8000
```

## License

Copyright (c) 2014 Nearform and other contributors

Licensed under the Artistic License 2.0

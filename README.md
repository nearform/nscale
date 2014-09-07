
# nscale

<img align="right" width="150" src="https://raw.githubusercontent.com/nearform/nscale/master/docs/images/logo.png">

> A toolkit for application deployments and container management

__nscale__ is an open source project to configure, build and deploy a set of connected containers to constitute a working platform for distributed applications.

## Install

```sh
sudo npm install -g nscale
```

__nscale__ depends on [nodejs](http://nodejs.org/), [npm](http://npmjs.org/) and [git](http://git-scm.com/).

## Running nscale

```sh
nsd server start
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

### Clone nscale demo

```sh
nsd system clone git@github.com:nearform/nscaledemo.git
```

### Build web container

```sh
nsd container build nscaledemo web
```

### Deploy nscale demo

Replace \<revision_id\> with the latest revision shown by the revision list command.

```sh
nsd revision list nscaledemo
nsd revision deploy nscaledemo <revision_id>
```

### Open nscale demo in the browser

```sh
open http://$(boot2docker ip):8000
```

### Open web gui

```sh
open http://localhost:9000
```

### Logs

```sh
nsd server logs
nsd server logs api.log
nsd server logs web.log
```

### Help

```sh
nsd help
```

## License

Copyright (c) 2014 Nearform and other contributors

Licensed under the Artistic License 2.0

# Direct setup

A _direct_ environment is composed by a group of servers that can be
controlled via SSH and have Docker installed, plus a machine that runs
the __nscale__ daemon.
You can run the direct setup on Digital Ocean, pure metal, and from any
Cloud provider from which you can buy virtual machines.

## Target machines

In order to deploy containers, we need to access these machines using
[passwordless SSH authentication](passwordless) (great how-to from Digital Ocean).
However, be sure to __not enter a passphrase for the newly minted key__.
We suggest you to create a specific key for nscale, and not to use one
of your personal ones.

On the target machines, you need:

1. [docker installed](docker-install)
2. The ability to access `/var/run/docker.sock` from your user, you can
   easily fix that by issuing: `sudo usermod -G docker -a <yourusername>`.

[docker-install]: https://docs.docker.com/installation/
[passwordless]: https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2

## nscale machine

The nscale machine needs to have some free GB (we reccommend at least
100GB), as building containers eat disk space very quickly.
To configure this machine, please follow the [development
guide](development-guide.md).

After this you should have nscale up and running on the build machine!

### Configure nscale

In order to configure the nscale analyzer to accurately detect the
containers running on the target machine, you need to edit the
`~/.nscale/config/config.json` file and replace:

```
{
  ...
  "modules": {
    ...
    "analysis": {
      "require": "nscale-local-analyzer",
      "specific": {
      }
    }
  }
  ...
}
```

to:


```
{
  ...
  "modules": {
    ...
    "analysis": {
      "require": "nscale-direct-analyzer",
      "specific": {
        "user": "<the user for the target machines>"
        "identityFile": "<path to the private ssh key>"
      }
    }
  }
  ...
}
```

Then stop and restart nscale with:

```bash
nsd server stop; nsd server start
```

## Configure a system for direct deployment

Build a system as you are used to do, and change the relevant
part of `system.js` to:

```js
exports.topology = {
  // other environments

  direct: {
    machine: {
      contains: ['redis'],
      specific: {
        user: 'matteo', // the user to use to connect
        ipAddress: '192.168.59.104', // the IP of the machine
        identityFile: 'my-key' // path to the key to use
      }
    }
  }
};
```

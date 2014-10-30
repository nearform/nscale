# Setup guide

## Dependencies

### Node

First we need to ensure we have the latest stable version of
Node installed. A quick way to check is to open a terminal and run:

```sh
node -v
```

If the command isn't found or the version is less than 0.10.x
then we'll need install or upgrade Node. To do that, head over to
[Node.js homepage][nodejs] and install the package for your operating system.

If you wish to install Node using a package manager, follow
[those instructions](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)
instead.

### Git

`nscale` also depends on Git, we can check whether this is installed
by opening a terminal and typing

```
git --version
```

If the command isn't found, install git, either using your operating system's
package manager or binaries available at [Git homepage][git]. Next, make sure
to configure your identity, as `nscale` uses it to identify the user:

```
git config --global user.name "<user name>"
git config --global user.email "<email>"
```

If you want to use GitHub, make sure that your account has the right key added.
Follow [those instructions][generate-ssh-keys] to generate and add a new key.

### Docker

Docker provides containers, that can be thought of as isolated environments
that provide the benefits of running virtual machines but at much lower resource
cost (see [What is Docker][] for more).

If you don't have Docker installed, install it following the [instructions](docker-install)
for your operating system and make sure to start it afterwards.

### Build tools
`nscale` makes use of compiled addons which you will need build tools to
compile.

On OS X you will need to install Xcode with command line tools. On Linux, your
distribution should provide a package with them.

## `nscale`

The main NPM module for `nscale` is called `nscale`. 

To install `nscale` we simply run

```sh
sudo npm i -g nscale
```

This will provide an executable named `nsd` (standing for `nscale` Deployer), 
which is the main tool for managing distributed systems deployment. 

We can test that the install was successful by attempting to run the executable:

```
nsd
```

This should show the help output.

Next, run `nsd login` to make `nscale` pick up your git config.

# Next Steps

* [Development guide][development-guide]

[nodejs]: http://nodejs.org
[git]: http://git-scm.org
[generate-ssh-keys]: https://help.github.com/articles/generating-ssh-keys/
[What is Docker]: https://www.docker.com/whatisdocker/
[docker-install]: https://docs.docker.com/installation/
[development-guide]: development-guide.md

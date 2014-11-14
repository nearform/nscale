## Vagrant setup

### Install dependencies

* [VirtualBox][virtualbox] 4.3.10 or greater.
* [Vagrant][vagrant] 1.6 or greater.

[virtualbox]: https://www.virtualbox.org/
[vagrant]: https://www.vagrantup.com/downloads.html

### Setup vagrant box

Replace \<name\> and \<email\> with your git username and email.

```
vagrant init nscale/docker
vagrant up
vagrant ssh
sudo apt-get update
sudo apt-get install nodejs npm
sudo ln -s /usr/bin/nodejs /usr/bin/node
sudo chown -R vagrant:vagrant /usr/local
sudo chown -R vagrant:vagrant /var/run/docker.sock
git config --global user.name "<name>"
git config --global user.email <email>
echo 'export DOCKER_HOST=tcp://127.0.0.1:4243' >> ~/.profile && . ~/.profile
```

### Add SSH key to Github

Replace \<email\> with your git email and press enter when asked for a passphrase:
```
ssh-keygen -t rsa -C "<email>"
```

Copy the contents of /home/vagrant/.ssh/id_rsa.pub to github:
 * [Add SSH key to Github](https://help.github.com/articles/generating-ssh-keys#step-3-add-your-ssh-key-to-github)

Test it works:
```
ssh -T git@github.com
```

### Install nscale

```sh
npm install -g nscale
```

### Run nscale server

SSH into the vagrant box and run the following to start the kernel server

```sh
nsd server start
```

### Login

By default, login uses the email defined in ~/.gitconfig and that is all that is required.

```sh
nsd login
```

### Clone nfd demo

```sh
nsd system clone git@github.com:nearform/nscaledemo.git
```

### Build web container

```sh
nsd container build nscaledemo web
```

### Deploy nfd demo

Replace \<revision_id\> with the latest revision shown by the revision list command.

```sh
nsd revision list nscaledemo
nsd revision deploy nscaledemo <revision_id>
```

### Test nfd demo is up and running

```sh
curl http://127.0.0.1:8000
```

Changelog
=========

v0.8.0
------
* Improved support for AWS
* AWS plugins now compatible with compilation process
* Compiler support for addtitional attirbutes in topology section

v0.7.1
------

* Support for docker over TLS
* Support for boot2docker 1.3.0

v0.7.0
------

* Improved dockerBuilder
* Added docker-registry-container to use stock images from Docker Hub
* Updated the workshop to avoid the 'missing libssl-dev' issue
  https://github.com/nearform/nscale-workshop/issues/16
* Moved the documentation from the wiki to the repository

v0.6.0
------

* Fixed `nsd cont buildall`
* Refactoring and added tests of nscale-kernel

v0.5.0
------

* nscale no longer deletes docker containers and images during build
* introduced the new system compiler to avoid messing with system.json
* added process containers
* refactored of the analyzers to generalize the docker parts
* improved the client output during build and deploy
* added `nsd sys link <path>` command
* added `nsd cont buildall` command
* moved the checkout folders for containers repositories from `.nscale`
  to `<system>/workspace`
* moved the build folders for containers repositories from `.nscale`
  to `<system>/builds`
* improved system create, now using a better project generator

v0.4.0
------

* sudo arguments removed, now relies on membership of docker group
* fixed git clone issue on hypenated urls
* fixed hardcoded localhost in webapp
* client code cleanup


v0.3.0
------

* filters added to local docker analyzer
* nscale-system tag filter for AWS analyzer
* system name tag added on AWS instance boot
* improved error reporting for system commands
* Refactor for common nscale docker analyzer


v0.2.0
------

* Remove virtualbox-container and use blank-container instead.
* Merged boot2docker-container and docker-container,
  Linux and Mac OS X can now run the same examples.
* Customizable kernel logging.
* Correctly quoting paths with spaces.
* Automatic system detection for nscale-client
* SSH pre-connect to fix known\_hosts problems
* Error handling for missing github keys
* Improved crash reports.
* Added release policy.

v0.1.38
------

* Initial public release for nodeconf.eu 2014.


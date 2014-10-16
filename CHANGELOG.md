Changelog
=========

v0.5.0
------

* nscale no longer deletes docker containers and images during build
* introduced the new system compiler to avoid messing with system.json
* added process containers
* refactored of the analyzers to have generalize the docker part
* improved the client output during build and deploy
* added `nsd sys link <path>` command
* added `nsd cont buildall` command
* moved the checkout folders for containers repositories from `.nscale`
  to `<system>/workspace`
* moved the build folders for containers repositories from `.nscale`
  to `<system>/builds`

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


---
title: "ZAP Docker User Guide"
tags: 
- docker
- guide
type: docker
---

# Introduction
Docker image with Zed Attack Proxy preinstalled.

Please note that ZAP Docker images are available on Docker Hub as well as GitHub Container Registry (GHCR).
While the `docker run` commands on this page use the Docker Hub images, either can be used interchangeably.

# Details

## Install Instructions

#### Stable

The stable image is updated whenever there is a ZAP full release.
It is also regenerated monthly, typically on the first Monday of the month.
The monthly updates pull in the latest base Docker image and also any updated ZAP add-ons - no ZAP 'core'
changes are included.

```bash
docker pull ghcr.io/zaproxy/zaproxy:stable
docker pull zaproxy/zap-stable
```

#### Weekly

The weekly image is typically updated every Monday, and includes the very latest changes to the ZAP
core and add-ons. It is the same as the [Cross Platform Weekly Release](/download/#weekly).

```bash
docker pull ghcr.io/zaproxy/zaproxy:weekly
docker pull zaproxy/zap-weekly
```

#### Nightly

The nightly image is updated at least once a day, and includes the very latest changes to the ZAP
core and add-ons.

```bash
docker pull ghcr.io/zaproxy/zaproxy:nightly
docker pull zaproxy/zap-nightly
```

#### Bare

The bare image is a very small Docker image and contains only the necessary required dependencies to run ZAP, ideal for CI environments. 
It is updated on the same schedule as the stable image.

```bash
docker pull ghcr.io/zaproxy/zaproxy:bare
docker pull zaproxy/zap-bare
```
The Dockerfiles can be found [here](https://github.com/zaproxy/zaproxy/tree/main/docker).

### Healthcheck
All of the images support the [healthcheck](https://docs.docker.com/engine/reference/builder/#healthcheck). 
If you are running ZAP with port other than the default `8080`, you need to set the `ZAP_PORT` environment variable. Otherwise, the healthcheck will fail.

## Usage Instructions

### Mounting the Current Directory
Many of the examples require that you mount the `/zap/wrk` directory, and these examples show how you can mount your **[current working directory](https://en.wikipedia.org/wiki/Working_directory) (CWD)**.
One can _get_ the CWD using various forms of _printing_ the (current) working directory (PWD).

```bash
# ...linux / MacOS / PowerShell
#    The $(pwd) command substitution will get the current directory as a variable
#    The classic form `pwd` must be used for csh and tsch / is still supported in bash/zsh/etc.
docker run -v $(pwd):/zap/wrk/:rw -t zaproxy/zap-stable zap.sh ...

# ...linux / MacOS / PowerShell
#    The ${PWD} _environment variable_ is your current directory
docker run -v ${PWD}:/zap/wrk/:rw -t zaproxy/zap-stable zap.sh ...

# ...windows CMD
#    The %cd% Windows CMD environment variable is your current directory
docker run -v %cd%:/zap/wrk/:rw -t zaproxy/zap-stable zap.sh ...
```

The examples use `$(pwd)` [command substitution](https://en.wikipedia.org/wiki/Command_substitution), which runs the `pwd` command, substituting the _result_.
Command substitution, and the `pwd` command works in _most_ Linux and MacOS shells (bash, zsh, fish(>3.4.0), etc), and in Windows PowerShell.

Many environments _also_ support the $PWD / ${PWD} _environment variable_.

Finding working solutions for _all_ environments is outside the scope of this document.

### Packaged Scans
All of the docker images (apart from the 'bare' one) provide a set of packaged scan scripts:

* [Baseline Scan](../baseline-scan/) which runs the ZAP spider against the target for (by default) 1 minute followed by an optional ajax spider scan before reporting the results of the passive scanning.
* [Full Scan](../full-scan/) which runs the ZAP spider against the target (by default with no time limit) followed by an optional ajax spider scan and then a full active scan before reporting the results.
* [API Scan](../api-scan/) which performs an active scan against APIs defined by OpenAPI, or GraphQL (post 2.9.0) via either a local file or a URL.

The packaged scans are the simplest way to automate ZAP in docker, but also see the GitHub actions if you already use GitHub.

In all cases the scans are tuned by:

* Disabling the Db recovery log
* Disabling all tags
* Reporting a maximum of 10 passive scan alert instances 

The `zap_tuned()` [Scan Hook](../scan-hooks/) is called after these changes have been made so you can undo them or apply other changes at this point if you want.

### GitHub Actions
The following GitHub Actions wrap the above packaged scans and also support raising GitHub issues for potential vulnerabilities found:

* [ZAP Baseline Scan](https://github.com/marketplace/actions/zap-baseline-scan)
* [ZAP Full Scan](https://github.com/marketplace/actions/zap-full-scan)
* [ZAP API Scan](https://github.com/marketplace/actions/zap-api-scan)
  
For more details see the blog posts:

* [Automate Security Testing with ZAP and GitHub Actions](/blog/2020-04-09-automate-security-testing-with-zap-and-github-actions/)
* [Dynamic Application Security Testing with ZAP and GitHub Actions](/blog/2020-05-15-dynamic-application-security-testing-with-zap-and-github-actions/)

These GitHub actions are a simple way to run the packaged scans, especially if you already use GitHub.

### Automation Framework
The [Automation Framework](/docs/automate/automation-framework/) allows you to control ZAP via a single YAML file.
It is under active development and will in time exceed the capabilities of the packaged scans and become the recommended option
for people who want more control over ZAP. The packaged scans will not be removed but are being migrated to use the Automation Framework.

You can run the Automation Framework in docker using the zap.yaml file in the current directory using:

```bash
docker run -v $(pwd):/zap/wrk/:rw -t zaproxy/zap-stable zap.sh -cmd -autorun /zap/wrk/zap.yaml
```

Note that `$(pwd)` is supported on Linux, MacOS and PowerShell.
See [Docker About - Mounting the current directory](/docs/docker/about/#mounting-the-current-directory) for Windows, etc.

Remaining examples use the Linux approach.

If you want to make sure that ZAP is up to date before running the yaml file then the recommended approach is:

```bash
docker run -v $(pwd):/zap/wrk/:rw -t zaproxy/zap-stable bash -c "zap.sh -cmd -addonupdate; zap.sh -cmd -autorun /zap/wrk/zap.yaml"
```

The latest version of the Automation Framework will set the ZAP exit value based on the result of the plan, in order to have access to this you need to use a command like:

```bash
docker container run -v $(pwd):/zap/wrk/:rw -t zaproxy/zap-weekly zap.sh -cmd -autorun /zap/wrk/zap.yaml
```

### ZAP GUI in a Browser
Yes, you can run the ZAP Desktop GUI in a browser. You can use it in just the same way as the Swing UI and can even proxy via it.  
See the [Webswing](../webswing/) page for details.

### ZAP Headless
You can also start the ZAP in headless mode with following command:
```bash
docker run -u zap -p 8080:8080 -i zaproxy/zap-stable zap.sh -daemon -host 0.0.0.0 -port 8080 -config api.addrs.addr.name=.* -config api.addrs.addr.regex=true -config api.key=<api-key>
```
**Note**: `-config api.addrs.addr.name=.*` opens the API up for connections from any other host, it is prudent to configure this more specifically for your network/setup.

### ZAP Headless with xvfb
You can start the ZAP in headless mode with xvfb following command:

```bash
docker run -u zap -p 8080:8080 -i zaproxy/zap-stable zap-x.sh -daemon -host 0.0.0.0 -port 8080 -config api.addrs.addr.name=.* -config api.addrs.addr.regex=true
```
**Note**: `-config api.addrs.addr.name=.*` opens the API up for connections from any other host, it is prudent to configure this more specifically for your network/setup.

This first starts xvfb (X virtual frame buffer) which allows add-ons that use Selenium (like the Ajax Spider and DOM XSS scanner) to run in a headless environment. Firefox is also installed so can be used with these add-ons.
Note that by default add-ons which use Selenium will default to using headless browsers when running in docker so this option is not usually required.

### Accessing the API from outside of the Docker container

Docker appears to assign 'random' IP addresses, so an approach that appears to work is:

Run ZAP as a daemon listening on "0.0.0.0":

```bash
docker run -p 8090:8090 -i zaproxy/zap-stable zap.sh -daemon -port 8090 -host 0.0.0.0
```
Find out the container id:
```bash
docker ps
```
Find out which address has been assigned to it:
```bash
docker inspect <CONTAINER ID> | grep IPAddress
```
You should be then able to point your browser at the specified host/port and access the ZAP API, eg http://172.17.0.8:8090/

Note that on Macs the IP will be the IP of the Docker VM host.  This is accessible with:  
```bash
docker-machine ip <host>
```

### Scanning an app running on the host OS

IP addresses like localhost and 127.0.0.1 cannot be used to access an app running on the host OS from within a docker container.
To get around this you can use the following code to get an IP address that will work:
```bash
$(ip -f inet -o addr show docker0 | awk '{print $4}' | cut -d '/' -f 1)
```
For example:
```bash
docker run -t zaproxy/zap-weekly zap-baseline.py -t http://$(ip -f inet -o addr show docker0 | awk '{print $4}' | cut -d '/' -f 1):10080
```

### Scanning an app running in another Docker container

By default Docker does not allow apps running in one container to access an app running in another container.
To get around this restriction create a Docker network using:
```bash
docker network create zapnet
```
And then include the Docker option `--net zapnet` when starting both your target app and the ZAP packaged scan.

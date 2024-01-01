---
title: "Diagnosing Docker Problems"
tags: 
- docker
- guide
type: docker
---

Docker is a great way to run ZAP in a CI/CD pipeline, but diagnosing problems can be tricky.

## ZAP Cannot Connect to the Target

If ZAP cannot connect to your target app then the first thing to do is to see if this is a 'Docker' networking issue.

To do that you can just use the `curl` command to make a request to the target. Change the Docker image name if you are not using the stable one:

```bash
docker run -t ghcr.io/zaproxy/zaproxy:stable curl https://www.example.com
```

If `curl` cannot access your target app then this is a Docker networking issue rather than a problem with ZAP.

If you are running your target app in another Docker container then see the ZAP Docker User Guide: 
[Scanning an app running in another Docker container](../about/#scanning-an-app-running-in-another-docker-container). 

## Cannot Access Created Files

Any files created in a docker image will be lost when that image stops unless you map a local drive using the Docker `-v` option.

For the packaged scans you need to map a drive to `/zap/wrk`.

On Linux / MacOS you can do this using the Docker option `-v $(pwd):/zap/wrk/:rw`.

Note that `$(pwd)` is supported on Linux, MacOS and PowerShell.
See [Docker About - Mounting the current directory](/docs/docker/about/#mounting-the-current-directory) for Windows, etc.

If you cannot see files that should be being created then first check to make sure they are created in the mapped drive.

If they are then check that any file can be created - the following command should create the file `test.txt` in the CWD on Linux / MacOS.

```bash
docker run -v $(pwd):/zap/wrk/:rw -t ghcr.io/zaproxy/zaproxy:stable touch /zap/wrk/test.txt
```

If this does not work then there is a permission issue in your environment - no ZAP options will be able to work around that.


## ZAP Fails for Another Reason

If ZAP is failing for another reason then you will need to look in the log file.
This is not so easy if you are running one of the packaged scans.

Instead of specifying the packaged scan when you start Docker you will need to start a bash shell and then run the packaged scan from there.
Once that has completed you will be able to access the ZAP log file.

So instead of running:

```bash
docker run -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t https://www.example.com
```

You need to run:

```bash
docker run -i -t ghcr.io/zaproxy/zaproxy:stable bash 
```

From the bash prompt then your command, e.g.:

```bash
./zap-baseline.py -t https://www.example.com
```

And when that has finished you can display the ZAP log file:

```bash
cat ~/.ZAP/zap.log
```

Note that if you are using the weekly or live Docker images then the log file is in a different directory:

```bash
cat ~/.ZAP_D/zap.log
```

## Investigating Non-trivial Issues

If you are having problems which prove difficult to diagnose (for example related to authentication) then we strongly advise doing this in the ZAP Desktop as it is much easier to see what's going on.

If this is not possible, or if it works in the Desktop but not in Docker, then you will need to examine the relevant requests and responses.

### Packaged Scans

If you are using one of the Packaged Scans then you just need to:

1. Copy the following files to your CWD
    * [LogMessagesHook.py](https://github.com/zaproxy/community-scripts/blob/main/other/scan-hooks/LogMessagesHook.py)
    * [LogMessages.js](https://github.com/zaproxy/community-scripts/blob/main/httpsender/LogMessages.js)
2. Run your packaged scan mapping the CWD to `/zap/wrk/` and passing in the above scan hook, e.g.
   ```bash
    docker run -v $(pwd):/zap/wrk/:rw -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t https://www.example.com --hook=LogMessagesHook.py
    ```
    
All of the requests and responses made by or proxied through ZAP will be written to the `req-resp-log.txt` file in your CWD.

You can edit the `LogMessages.js` file to only log the requests and responses you are really interested in.

### Daemon

If you are using the ZAP daemon in docker and controlling it via the API then you will need to:

1. Copy the following file to your CWD
   * [LogMessages.js](https://github.com/zaproxy/community-scripts/blob/main/httpsender/LogMessages.js)
2. Run the ZAP daemon mapping the CWD to `/zap/wrk/` when you start docker
3. Load and enable the script via the API before making any requests, e.g.
   ```bash
   zap.script.load('LogMessages.js', 'httpsender', 'Oracle Nashorn', '/zap/wrk/LogMessages.js')
   zap.script.enable('LogMessages.js')
   ```

All of the requests and responses made by or proxied through ZAP will be written to the `req-resp-log.txt` file in your CWD as above.

### Automation Framework

If you are using the Automation Framework then you will need to:

1. Copy the following file to your CWD
   * [LogMessages.js](https://github.com/zaproxy/community-scripts/blob/main/httpsender/LogMessages.js)
2. Modify your YAML plan file to add the script, e.g.
   ```bash
   jobs:
   ...
   - parameters:
       action: "add"
       type: "httpsender"
       engine: "Oracle Nashorn"
       name: "LogMessages.js"
       file: "/zap/wrk/LogMessages.js"
     name: "script"
     type: "script"
   ...
   ```
3. Run your plan, making sure that your environment maps the CWD to `/zap/wrk/`, e.g.
   ```bash
    ./zap.sh -cmd -autorun zap.yaml
    ```
    
All of the requests and responses made by or proxied through ZAP will be written to the `req-resp-log.txt` file in your CWD as above.

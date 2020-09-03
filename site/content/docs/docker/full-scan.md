---
title: "ZAP - Full Scan"
tags: 
- docker
- guide
- packaged_scan
type: docker
---

The ZAP full scan is a script that is available in the ZAP [Docker](../about/) images.

It runs the ZAP spider against the specified target (by default with no time limit) followed by an optional ajax spider scan and then a full active scan before reporting the results.

This means that the script does perform actual 'attacks' and can potentially run for a long period of time.

By default it reports all alerts as WARNings but you can specify a config file which can change any rules to FAIL or IGNORE.
The configuration works in a very similar way as the [Baseline Scan](../baseline-scan/) so see the Baseline page for more details.

### Usage
```
Usage: zap-full-scan.py -t <target> [options]
    -t target         target URL including the protocol, eg https://www.example.com
Options:
    -h                print this help message
    -c config_file    config file to use to INFO, IGNORE or FAIL warnings
    -u config_url     URL of config file to use to INFO, IGNORE or FAIL warnings
    -g gen_file       generate default config file(all rules set to WARN)
    -m mins           the number of minutes to spider for (defaults to no limit)
    -r report_html    file to write the full ZAP HTML report
    -w report_md      file to write the full ZAP Wiki(Markdown) report
    -x report_xml     file to write the full ZAP XML report
    -J report_json    file to write the full ZAP JSON document
    -a                include the alpha active and passive scan rules as well
    -d                show debug messages
    -P                specify listen port
    -D                delay in seconds to wait for passive scanning 
    -i                default rules not in the config file to INFO
    -j                use the Ajax spider in addition to the traditional one
    -l level          minimum level to show: PASS, IGNORE, INFO, WARN or FAIL, use with -s to hide example URLs
    -n context_file   context file which will be loaded prior to scanning the target
    -p progress_file  progress file which specifies issues that are being addressed
    -s                short output format - dont show PASSes or example URLs
    -T                max time in minutes to wait for ZAP to start and the passive scan to run
    -z zap_options    ZAP command line options e.g. -z "-config aaa=bbb -config ccc=ddd"
    --hook            path to python file that define your custom hooks
```
To run it with no 'file' params use:
```
docker run -t owasp/zap2docker-stable zap-full-scan.py -t https://www.example.com
```
If you use 'file' params then you need to mount the directory those file are in or will be generated in, eg
```
docker run -v $(pwd):/zap/wrk/:rw -t owasp/zap2docker-stable zap-full-scan.py \
    -t https://www.example.com -g gen.conf -r testreport.html
```

Note that `$(pwd)` is only supported on Linux and MacOS - on Windows you will need to replace this with the full current working directory.

### Scan Hooks
This script supports [scan hooks](../scan-hooks/) which allow you to override or modify behaviour of the script components instead of having to write a new script.

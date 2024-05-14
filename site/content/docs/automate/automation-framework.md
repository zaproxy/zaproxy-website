---
type: page
title: Automation Framework
date: "2021-03-09"
tags: 
- guide
---
The new Automation Framework will in time replace the Command Line and Packaged Scan options.
It allows you to control ZAP via one YAML file and provides more flexibility while not being tied to any specific container technology.

The Automation Framework is included with the latest version of ZAP as well as the stable docker image.
The framework is plugable and many of the existing add-ons have been enhanced to support it.

The framework is covered in the following [ZAP Chat](/zap-chat/) videos:

* [ZAP Chat 07 Automation Framework Part 1](https://youtu.be/19Rptj2be1Y) An introduction to the framework
* [ZAP Chat 08 Automation Framework Part 2](https://youtu.be/1fcpU54N-mA) Details on the environment, passiveScan-config job, and alertFilter job
* [ZAP Chat 09 Automation Framework Part 3](https://youtu.be/4phnMy9iCPY) Details on the requester job and replacer job
* [ZAP Chat 10 Automation Framework Part 4](https://youtu.be/WivoyVerBCo) Details on the spider job and spiderAjax job
* [ZAP Chat 11 Automation Framework Part 5](https://youtu.be/xuP00Ri460k) Details on the openapi, soap, and graphql jobs
* [ZAP Chat 12 Automation Framework Part 6](https://youtu.be/hcftgjz_Vgc) Details on the passiveScan-wait, delay, and activeScan jobs
* [ZAP Chat 16 Automation Framework Part 7](https://youtu.be/_CKzFqDi33A) How to configure authentication using auto-detection

### Framework Overview

For details of how to get started with the framework see the main [framework help page](/docs/desktop/addons/automation-framework/).

The framework supports:

* [environment](/docs/desktop/addons/automation-framework/environment/) - which defines all of the applications the plan can act on
* [Authentication](/docs/desktop/addons/automation-framework/authentication/) - all of the authentication mechanisms supported by ZAP
* [Job Tests](/docs/desktop/addons/automation-framework/tests/) - which can be used to validate the outcome of jobs

The full set of jobs currently supported by the framework and other add-ons are:

* [activeScan](/docs/desktop/addons/automation-framework/job-ascan/) - runs the active scanner
* [alertFilter](/docs/desktop/addons/alert-filters/automation/) - alert filter configuration, provided with the [Alert Filters](/docs/desktop/addons/alert-filters/) add-on
* [delay](/docs/desktop/addons/automation-framework/job-delay/) - waits for a specified time or until a condition is met
* [graphql](/docs/desktop/addons/graphql-support/automation/) - GraphQL schema import, provided with the [GraphQL](/docs/desktop/addons/graphql-support/) add-on
* [import](/docs/desktop/addons/import-export/automation/) - allows you to import HAR(HTTP Archive File), ModSecurity2 Logs, ZAP Messages or a file containing URLs locally
* [openapi](/docs/desktop/addons/openapi-support/automation/) - OpenAPI definition import, provided with the [OpenAPI](/docs/desktop/addons/openapi-support/) add-on
* [passiveScan-config](/docs/desktop/addons/automation-framework/job-pscanconf/) - passive scan configuration
* [passiveScan-wait](/docs/desktop/addons/automation-framework/job-pscanwait/) - waits for the passive scanner to finish processing the current queue
* [postman](/docs/desktop/addons/postman-support/automation/) - Postman definition import, provided with the [Postman](/docs/desktop/addons/postman-support/) add-on
* [replacer](/docs/desktop/addons/replacer/automation/) - replace strings in requests and responses
* [report](/docs/desktop/addons/report-generation/automation/) - report generation, provided with the [Report Generation](/docs/desktop/addons/report-generation/) add-on
* [requestor](/docs/desktop/addons/automation-framework/job-requestor/) - sends specific requests to targets
* [script](/docs/desktop/addons/script-console/automation/) - adds, removes and runs scripts
* [soap](/docs/desktop/addons/soap-support/automation/) - SOAP WSDL import, provided with the [SOAP](/docs/desktop/addons/soap-support/) add-on
* [spider](/docs/desktop/addons/automation-framework/job-spider/) - runs the traditional spider
* [spiderAjax](/docs/desktop/addons/ajax-spider/automation/) - runs the ajax spider, provided with the [Ajax Spider](/docs/desktop/addons/ajax-spider/) add-on

For details of future changes planned see the [tracker issue](https://github.com/zaproxy/zaproxy/issues/6461).

### Updating Add-ons

The [addOns](/docs/desktop/addons/automation-framework/job-addons/) job has been found to cause
problems when updating add-ons which are defined in the current plan. This job has been depreciated and no longer does anything.

From 2.12 you can use the standard ZAP [command line](/docs/desktop/cmdline/) 
options with the AF `-autorun` option:

* `-addoninstall <addOnId>` to install an add-on
* `-addonuninstall <addOnId>` to uninstall an add-on
* `-addonupdate` to update all add-ons

You can use `-addoninstall` and `-addonuninstall` as many times as you need:

```bash
./zap.sh -addonupdate\
    -addoninstall example-1 \
    -addoninstall example-2 \
    -addonuninstall example-3 \
    -cmd -autorun zap.yaml <any other ZAP options>
```

### Exit Value

If you run the framework from the command line then ZAP will exit with:

* 0: The plan ran without any problems reported
* 1: The plan failed with an error
* 2: The plan ran but there were warnings

The framework will exit with `2` if there are warnings even if the [environment](/docs/desktop/addons/automation-framework/environment/) `failOnWarning` parameter is set to `false`.
If you need ZAP to exit with `0` in this case then you can run ZAP with a Linux / macOS command line like:

* `bash -c "./zap.sh -cmd -autorun /path/to/your/af-plan.yaml" || [ $? -ne 1 ]`


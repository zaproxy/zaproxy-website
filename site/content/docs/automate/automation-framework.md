---
type: page
title: Automation Framework
date: "2021-03-09"
tags: 
- guide
---
The new Automation Framework will in time replace the Command Line and Packaged Scan options.
It allows you to control ZAP via one YAML file and provides more flexibility while not being tied to any specific container technology.

The Automation Framework in included with the latest version of ZAP as well as the stable docker image.
The framework is plugable and many of the existing add-ons have been enhanced to support it.

__Important:__  if you run the framework from the command line you should not use the `-addonupdate` option or
the [addOns](/docs/desktop/addons/automation-framework/job-addons/) `updateAddOns` option - this has been found to cause
problems when updating add-ons which are defined in the current plan. 
The recommended approach is to run ZAP inline once to update all of the add-ons and then again to run the plan, e.g.:
```
    ./zap.sh -cmd -addonupdate
    ./zap.sh -cmd -autorun zap.yaml <any other ZAP options>
```
A longer term solution is being worked on.

For details of how to get started with the framework see the main [framework help page](/docs/desktop/addons/automation-framework/).

The full set of jobs currently supported by the framework and other add-ons are:

* [activeScan](/docs/desktop/addons/automation-framework/job-ascan/) - runs the active scanner
* [addOns](/docs/desktop/addons/automation-framework/job-addons/) - add-on management
* [alertFilter](/docs/desktop/addons/alert-filters/automation/) - alert filter configuration, provided with the [Alert Filters](/docs/desktop/addons/alert-filters/) add-on
* [delay](/docs/desktop/addons/automation-framework/job-delay/) - waits for a specified time or until a condition is met
* [graphql](/docs/desktop/addons/graphql-support/automation/) - GraphQL schema import, provided with the [GraphQL](/docs/desktop/addons/graphql-support/) add-on
* [openapi](/docs/desktop/addons/openapi-support/automation/) - OpenAPI definition import, provided with the [OpenAPI](/docs/desktop/addons/openapi-support/) add-on
* [passiveScan-config](/docs/desktop/addons/automation-framework/job-pscanconf/) - passive scan configuration
* [passiveScan-wait](/docs/desktop/addons/automation-framework/job-pscanwait/) - waits for the passive scanner to finish processing the current queue
* [report](/docs/desktop/addons/report-generation/automation/) - report generation, provided with the [Report Generation](/docs/desktop/addons/report-generation/) add-on
* [requestor](/docs/desktop/addons/automation-framework/job-requestor/) - sends specific requests to targets
* [script](/docs/desktop/addons/script-console/automation/) - adds, removes and runs scripts
* [soap](/docs/desktop/addons/soap-support/automation/) - SOAP WSDL import, provided with the [SOAP](/docs/desktop/addons/soap-support/) add-on
* [spider](/docs/desktop/addons/automation-framework/job-spider/) - runs the traditional spider
* [spiderAjax](/docs/desktop/addons/ajax-spider/automation/) - runs the ajax spider, provided with the [Ajax Spider](/docs/desktop/addons/ajax-spider/) add-on

For details of future changes planned see the [tracker issue](https://github.com/zaproxy/zaproxy/issues/6461).

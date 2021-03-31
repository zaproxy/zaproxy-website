---
type: page
title: Automation Framework
date: "2021-03-09"
tags: 
- guide
---
The new Automation Framework will in time replace the Command Line and Packaged Scan options.
It allows you to control ZAP via one YAML file and provides more flexibility while not being tied to any specific container technology.

To use the Automation Framework with ZAP 2.10.0 install the [Automation Framework](/docs/desktop/addons/automation-framework/) 
add-on and update the rest of the add-ons that you have installed.
The framework is plugable and many of the existing add-ons have been enhanced to support it. It is included in the latest weekly releases.

For details of how to get started with the framework see the main [framework help page](/docs/desktop/addons/automation-framework/).

The full set of jobs currently supported by the framework are:

* [activeScan](/docs/desktop/addons/automation-framework/job-ascan/) - runs the active scanner
* [addons](/docs/desktop/addons/automation-framework/job-addons/) - add-on management
* [graphql](/docs/desktop/addons/graphql-support/automation/) - GraphQL schema import, provided with the [GraphQL](/docs/desktop/addons/graphql-support/) add-on
* [openapi](/docs/desktop/addons/openapi-support/automation/) - OpenAPI definition import, provided with the [OpenAPI](/docs/desktop/addons/openapi-support/) add-on
* [passiveScan-config](/docs/desktop/addons/automation-framework/job-pscanconf/) - passive scan configuration
* [passiveScan-wait](/docs/desktop/addons/automation-framework/job-pscanwait/) - waits for the passive scanner to finish processing the current queue
* [report](/docs/desktop/addons/report-generation/automation/) - report generation, provided with the [Report Generation](/docs/desktop/addons/report-generation/) add-on
* [soap](/docs/desktop/addons/soap-support/automation/) - SOAP WSDL import, provided with the [SOAP](/docs/desktop/addons/soap-support/) add-on
* [spider](/docs/desktop/addons/automation-framework/job-spider/) - runs the traditional spider
* [spiderAjax](/docs/desktop/addons/ajax-spider/automation/) - runs the ajax spider, provided with the [Ajax Spider](/docs/desktop/addons/ajax-spider/) add-on

For details of future changes planned see the [tracker issue](https://github.com/zaproxy/zaproxy/issues/6461).

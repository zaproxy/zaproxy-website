---
# This page was generated from the add-on.
title: SOAP Support
type: userguide
weight: 1
cascade:
  addon:
    id: soap
    version: 28.0.0
---

# SOAP Support

This add-on imports and scans WSDL files containing SOAP endpoints.   

It also supports the [Automation Framework](/docs/desktop/addons/soap-support/automation/).

## Importing

The add-on will automatically detect any SOAP definitions and spider them as long as they are in scope.   

A menu item is added to the Import menu:

* Import a WSDL File

Operations to import a WSDL file from the local filesystem or from a URL are also available via the API.   

**NOTE:** As of version 6 of this add-on, only encoded URLs are supported.

### Form Handler Add-on Support

The SOAP add-on supports overriding default parameter values based on field names via the Form Handler add-on. For example,   
![Form Handler Example](/docs/desktop/addons/soap-support/images/formHandlerExample.png) Latest code: [SOAP Support](https://github.com/zaproxy/zap-extensions/tree/main/addOns/soap)

## Statistics

This add-on maintains the following statistics:

* soap.urls.added: The total number of URLs (or SOAP Actions) added from imported WSDL files.

## See also

|   |                                                                    |                                                                  |
|---|--------------------------------------------------------------------|------------------------------------------------------------------|
|   | [Alert \& Rule Details](/docs/desktop/addons/soap-support/alerts/) | for details of the Alerts and rules for the SOAP support add-on. |
|   | [SOAP Automation](/docs/desktop/addons/soap-support/automation/)   | for information about the automation framework support.          |

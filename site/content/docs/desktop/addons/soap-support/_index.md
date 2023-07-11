---
# This page was generated from the add-on.
title: SOAP Support
type: userguide
weight: 1
cascade:
  addon:
    id: soap
    version: 18.0.0
---

# SOAP Support

This add-on imports and scans WSDL files containing SOAP endpoints.   

It also supports the [Automation Framework](/docs/desktop/addons/soap-support/automation/).

## Importing

The add-on will automatically detect any SOAP definitions and spider them as long as they are in scope.   

2 menu items are also added to the Import menu:

* Import a WSDL file from local file system
* Import a WSDL file from a URL

These operations are also available via the API.   

**NOTE:** As of version 6 of this add-on, only encoded URLs are supported.

### Form Handler Add-on Support

The SOAP add-on supports overriding default parameter values based on field names via the Form Handler add-on. For example,   
![Form Handler Example](/docs/desktop/addons/soap-support/images/formHandlerExample.png)

## Scanning

The scan rules added by this add-on are:

* Action Spoofing : <http://www.ws-attacks.org/index.php/SOAPAction_Spoofing>
* XML Injection : <http://www.ws-attacks.org/index.php/XML_Injection>

## Statistics

This add-on maintains the following statistics:

* soap.urls.added: The total number of URLs (or SOAP Actions) added from imported WSDL files.

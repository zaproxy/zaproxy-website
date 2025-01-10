---
# This page was generated from the add-on.
title: SOAP Automation Framework Support
type: userguide
weight: 1
---

# SOAP Automation Framework Support

This add-on supports the Automation Framework.   

The add-on will import WSDL files containing SOAP endpoints if they are found while spidering but adding them explicitly via a URL or local file is recommended if they are available.

## Job: soap

The soap job allows you to import WSDL files locally or from a URL.


It is covered in the video: [ZAP Chat 11 Automation Framework Part 5 - APIs](https://youtu.be/xuP00Ri460k).

```
  - type: soap                         # SOAP WSDL import
    parameters:
      wsdlFile:                        # String: Local file path of the WSDL, default: null, no definition will be imported
      wsdlUrl:                         # String: URL pointing to the WSDL, default: null, no definition will be imported
```

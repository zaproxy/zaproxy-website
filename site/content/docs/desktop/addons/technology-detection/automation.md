---
# This page was generated from the add-on.
title: Technology Detection Automation Framework Support
type: userguide
weight: 3
---

# Technology Detection Automation Framework Support

This add-on supports the Automation Framework.   

## Job: wappalyzer

The `wappalyzer` job is a data job. It does not have any configurable parameters. It provides technology detection data to other jobs via the `TechJobResultData` class.

## YAML

```
  - type: wappalyzer
```

## Job Data

The following class will be made available to add-ons that provide access to the Job Data such as the Reporting add-on.

* Key: `wappalyzerData`
* Class: [TechJobResultData](https://github.com/zaproxy/zap-extensions/blob/main/addOns/wappalyzer/src/main/java/org/zaproxy/zap/extension/wappalyzer/automation/TechJobResultData.java)

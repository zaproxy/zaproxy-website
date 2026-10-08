---
# This page was generated from the add-on.
title: Params Automation Framework Support
type: userguide
weight: 1
---

# Params Automation Framework Support

This add-on supports the Automation Framework.   

## Job: params

The `params` job is a data job. It does not have any configurable parameters. It provides parameter data to other jobs via the `ParamsJobResultData` class.


It should be run after the jobs that explore your application, such as the spider jobs or those that import API definitions,
so that parameters have been recorded for the sites in scope.

## YAML

```
  - type: params
```

## Job Data

The following class will be made available to add-ons that provide access to the Job Data such as the Reporting add-on.

* Key: `paramsData`
* Class: [ParamsJobResultData](https://github.com/zaproxy/zap-extensions/blob/main/addOns/params/src/main/java/org/zaproxy/addon/params/automation/jobs/ParamsJobResultData.java)

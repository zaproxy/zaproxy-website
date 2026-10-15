---
# This page was generated from the add-on.
title: Insight Automation Framework Job
type: userguide
weight: 3
---

# Insight Automation Framework Job

This add-on supports the Automation Framework.

## Job: insights

The insights job allows you to configure the insights options.


```
  - type: insights
    parameters:
      messagesLowThreshold:            # Integer: low threshold used for insights related to messages, default: 5
      messagesHighThreshold:           # Integer: high threshold used for insights related to messages, default: 50
      memoryLowThreshold:              # Integer: low threshold used for insights related to memory, default: 80
      memoryHighThreshold:             # Integer: high threshold used for insights related to memory, default: 95
      slowResponse:                    # Integer: the response time in msecs that is treated as "slow", default: 256
      exitAutoLevel:                   # String: the lowest level of insight that will end the plan: medium, high or blank for never, default: high. Preferred to exitAutoOnHigh, which it overrides
```


`exitAutoLevel` is the preferred way to control when an insight will end the plan:

* `high`: the plan will end when a High level Insight is reported. This has the same effect as `exitAutoOnHigh: true`
* `medium`: the plan will end when a Medium or High level Insight is reported

The values are case insensitive. A blank value means that insights will never end the plan. Any other value will be ignored and a warning reported.


If both `exitAutoLevel` and `exitAutoOnHigh` are supplied then a warning will be reported and `exitAutoLevel` will be used.


`exitAutoOnHigh` is not yet deprecated, but we recommend that you use `exitAutoLevel` instead.
If only `exitAutoOnHigh` is supplied then it will be converted to the equivalent `exitAutoLevel`
(`high` if true, blank if false), so plans saved by ZAP will always use `exitAutoLevel`.


Any jobs that are flagged as "always run" will still run after the plan has been ended.

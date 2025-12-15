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
      exitAutoOnHigh:                  # Boolean: if set will end the plan on a high level insight, default: true
```

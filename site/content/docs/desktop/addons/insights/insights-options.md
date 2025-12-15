---
# This page was generated from the add-on.
title: Insights Options
type: userguide
weight: 4
---

# Insights Options

This screen allows you to configure the [Insights](/docs/desktop/addons/insights/) options.

### Exit Automation on High

If set then a High Level Insight will stop automation.


If the Desktop UI is being used then this option will have no effect.


If the [insights](/docs/desktop/addons/insights/insights-job/) Automation Framework job has run and the plan is still running then the plan
will be stopped. Any jobs that are flagged as "always run" will still run.


In all other cases ZAP will be stopped.

### Message Low Threshold %

The low threshold used for insights related to messages, as a percentage of all messages sent.


Default: 5%

### Message High Threshold %

The high threshold used for insights related to messages, as a percentage of all messages sent.


Default: 50%

### Memory Low Threshold %

The low threshold used for insights related to memory, as a percentage of the available memory,


Default: 80%

### Memory High Threshold %

The high threshold used for insights related to memory, as a percentage of the available memory.


Default: 95%

### Slow Response in Milliseconds

The response time in milliseconds that is treated as a "slow" response for the related Insight.


Default: 256


Note that the response times are recorded in the statistics in powers of 2.

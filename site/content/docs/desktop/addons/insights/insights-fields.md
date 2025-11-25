---
# This page was generated from the add-on.
title: Insights Fields
type: userguide
weight: 1
---

# Insights Fields

### Level

An indication of how significant an Insight is.


The following Levels are supported:

* Info: An informational Insight which gives you more information about the target
* Low: An Insight which is potentially a problem, depending on how your application works
* Medium: A more significant Insight which should be investigated ASAP. It potentially means that the scan is not working as expected
* High: A very significant Insight which is highly likely to impact the scan effectiveness

We recommend terminating a scan early and investigating if any Medium or High level Insights are reported.

### Reason

The reason why the Insight was reported.


It will be one of:

* Exceeded High: The value exceeded the High threshold
* Exceeded Low: The value exceeded the Low threshold
* \<blank\>: Used for Info level Insights

### Key

A string that can be reliably used to identify the Insight.

### Description

A user friendly description. This should not be used to identify Insights programmatically as it may be internationalised or change based on feedback.

### Value

The value related to the Insight. This will be an integer or a percentage.

### Site

Indicates if the Insight is specific to a site (which will be specified). Otherwise Insights are not site specific.

### Thresholds

Each Insight has a Low and High threshold, which is shown in the [insight list](/docs/desktop/addons/insights/insights-list/).

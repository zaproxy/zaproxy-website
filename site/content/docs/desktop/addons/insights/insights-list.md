---
# This page was generated from the add-on.
title: Insights List
type: userguide
weight: 2
---

# Insights List

This is the full set of Insights currently supported:

|             Key              |                  Description                  | Site | Type |  Low   | High |
|------------------------------|-----------------------------------------------|------|------|--------|------|
| insight.database.full        | Database full                                 |      |      | High   | High |
| insight.diskspace.full       | Diskspace full                                |      |      | High   | High |
| insight.memory.usage         | Percentage of memory used                     |      | Mem  | Medium | High |
| insight.log.error            | Count of ZAP errors                           |      |      | Low    | Low  |
| insight.log.warn             | Count of ZAP warnings                         |      |      | Low    | Low  |
| insight.network.failure      | Percentage of network failures                |      | Msg  | Low    | Med  |
| insight.auth.failure         | Percentage of authentication failures         | Yes  | Msg  | Low    | Med  |
| insight.code.Xxx             | Percentage of Xxx response codes              | Yes  | Msg  | Info   | Low  |
| insight.response.slow        | Percentage of slow responses                  | Yes  | Msg  | Info   | Low  |
| insight.endpoint.content.CCC | Percentage of responses with content-type CCC | Yes  |      | Info   | Info |
| insight.endpoint.method.MMM  | Percentage of responses with method MMM       | Yes  |      | Info   | Info |
| insight.endpoint.total       | Total number of endpoints                     | Yes  |      | Info   | Info |


The columns show the Insight [fields](/docs/desktop/addons/insights/insights-fields/) with the following additions:

### Site

Indicates if the Insight is specific to a site (which will be specified). Otherwise Insights are not site specific.

### Type

The type of the insight, which indicates which of the threshold [options](/docs/desktop/addons/insights/insights-options/) it will use:

* Mem: Will use the Memory Thresholds
* Msg: Will use the Message Thresholds
* \<blank\> Will not use any thresholds

### Low (Level)

This columns shows the Level at which it will be reported if it exceeds the related Low threshold.


Info level Insights will always be reported.

### High (Level)

This columns shows the Level at which it will be reported if it exceeds the related High threshold.

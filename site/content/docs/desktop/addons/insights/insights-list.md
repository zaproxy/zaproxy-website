---
# This page was generated from the add-on.
title: Insights List
type: userguide
weight: 2
---

# Insights List

This is the full set of Insights currently supported:

|             Key              |                  Description                  | Site | Type |  Low   |  High  |
|------------------------------|-----------------------------------------------|------|------|--------|--------|
| insight.database.full        | Database full                                 |      |      | High   | High   |
| insight.diskspace.full       | Diskspace full                                |      |      | High   | High   |
| insight.memory.usage         | Percentage of memory used                     |      | Mem  | Medium | High   |
| insight.log.error            | Count of ZAP errors                           |      |      | Low    | Low    |
| insight.log.warn             | Count of ZAP warnings                         |      |      | Low    | Low    |
| insight.network.failure      | Percentage of network failures                |      | Msg  | Low    | Med    |
| insight.auth.failure         | Percentage of authentication failures         | Yes  | Msg  | Low    | High   |
| insight.code.1xx             | Percentage of 1xx response codes              | Yes  | Msg  | Info   | Info   |
| insight.code.2xx             | Percentage of 2xx response codes              | Yes  | Msg  | Info   | Info   |
| insight.code.3xx             | Percentage of 3xx response codes              | Yes  | Msg  | Info   | Info   |
| insight.code.4xx             | Percentage of 4xx response codes              | Yes  | Msg  | Info   | Medium |
| insight.code.5xx             | Percentage of 5xx response codes              | Yes  | Msg  | Info   | Low    |
| insight.response.slow        | Percentage of slow responses                  | Yes  | Msg  | Info   | Low    |
| insight.endpoint.content.CCC | Percentage of responses with content-type CCC | Yes  |      | Info   | Info   |
| insight.endpoint.method.MMM  | Percentage of responses with method MMM       | Yes  |      | Info   | Info   |
| insight.endpoint.total       | Total number of endpoints                     | Yes  |      | Info   | Info   |


The columns show the Insight [fields](/docs/desktop/addons/insights/insights-fields/) with the following additions:

### Site

Indicates if the Insight is specific to a site (which will be specified). Otherwise Insights are not site specific.

### Type

The type of the insight, which indicates which of the threshold [options](/docs/desktop/addons/insights/insights-options/) it will use:

* Mem: Will use the Memory Thresholds
* Msg: Will use the Message Thresholds
* \<blank\> Will not use any thresholds

### Low (Level)

This column shows the Level at which it will be reported if it exceeds the related Low *threshold* .


Info level Insights will always be reported.

### High (Level)

This column shows the Level at which it will be reported if it exceeds the related High *threshold* .

### Thresholds and Levels

Thresholds and Levels are separate things, and the names of the Low and High thresholds do not have to match the Level that is reported:

* A *threshold* is a number you configure in the [options](/docs/desktop/addons/insights/insights-options/). It decides *when* an Insight is reported at something other than Info.
* A *Level* says *how significant* the Insight is. It is fixed for each Insight, as shown in the table above.

For each Insight which uses thresholds, the Level reported depends on the value:


* Below the Low threshold: reported at Info level (if the value is not zero)
* At or above the Low threshold, but below the High threshold: reported at the level in the Low column, with the reason "Exceeded Low"
* At or above the High threshold: reported at the level in the High column, with the reason "Exceeded High"

For example, with the default Message thresholds (5% and 50%), if 10% of the responses are 5xx then insight.code.5xx is reported at Info level, as it is above the Low threshold and the Low column says Info. If 60% are 5xx then it is reported at Low level, as it has exceeded the High threshold and the High column says Low. If 60% are 4xx then insight.code.4xx is reported at Medium level.


Message based Insights are only reported above Info level once at least 1000 messages have been sent
(5 for authentication). Insights with no thresholds are always reported at Info level.

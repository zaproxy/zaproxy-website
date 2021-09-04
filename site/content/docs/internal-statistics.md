---
title: ZAP Internal Statistics
type: page
---

ZAP maintains internal statistics which can be accessed via the [API](/docs/api/#zap-api-stats).

{{< internalstats >}}

---

The scope can be:

- global - the stats are maintained for ZAP as a whole
- site - the stats are maintained on a per site basis

The type can be:

- counter: an incrementing counter
- highwatermark: the maximum value seen

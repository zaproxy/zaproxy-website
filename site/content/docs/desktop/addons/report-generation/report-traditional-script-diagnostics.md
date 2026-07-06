---
# This page was generated from the add-on.
title: Script Diagnostics in Traditional Reports
type: userguide
---

# Script Diagnostics in Traditional Reports

Several traditional report templates can include script diagnostics recorded by the Script Console add-on.

### Sections

Three optional sections are available, with IDs `scriptdiagnostics` , `scriptdiagnosticsoutput` , and `scriptdiagnosticsscreenshots` . Names and per-template availability are listed in the Sections table on each traditional report template help page.

### Script Diagnostics Section

When the `scriptdiagnostics` section is enabled and the Script Console add-on has recorded runs in the session database, the report can include script diagnostic records in run order. Each run has a created time, `outcome` (for example `FAILED` or `SUCCESS` ), summary, and scripts. Each script has an order, name, type, and steps. Steps include the source statement index, line (element type), and outputs (for example error messages with kind `ERROR` ). More data can be included on steps depending on the additional diagnostics sections enabled for the report, as outlined below.

### Output for Script Diagnostics

Steps can include print output lines with kind `OUTPUT` (for example from `ZestActionPrint` ). When this section is disabled, steps still include `ERROR` output lines; only `OUTPUT` lines are omitted.

### Screenshots for Script Diagnostics

When this section is enabled a step can, optionally, include a screenshot of the browser embedded in the report with the image data Base64 encoded.

---
# This page was generated from the add-on.
title: Automation Framework - delay Job
type: userguide
---

# Automation Framework - delay Job

This job waits for a specified time unless one of a specific set of conditions are met.  
It can be used to wait for regression tests being proxied through ZAP in order to explore your application more thoroughly.

The time parameter supports the formats `hh:mm:ss`, `mm:ss` and `ss`, so "5" is 5 seconds,
"1:30" is one minute and 30 seconds and "2:20:30" is 2 hours, 20 minutes and 30 seconds.

The conditions supported are:

* The creation of the file given by the optional fileName parameter
* Calling the static method: `org.zaproxy.addon.automation.jobs.DelayJob.setEndJob(true);`
* Calling the API end point: `automation / action / endDelayJob`

## YAML

```
  - type: delay                        # Pause the plan for a set period of time or event (file created, static method called, API end point called)
    parameters:
      time:                            # String: The time to wait, format any of ['hh:mm:ss', 'mm:ss', 'ss'], default: 0
      fileName:                        # String: Name of a file which will cause the job to end early if created, default: empty
```

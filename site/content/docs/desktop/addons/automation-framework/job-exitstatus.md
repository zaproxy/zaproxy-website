---
# This page was generated from the add-on.
title: Automation Framework - exitStatus Job
type: userguide
weight: 10
---

# Automation Framework - exitStatus Job

This job sets [ZAP's exit code](/docs/desktop/addons/automation-framework/#exit-codes) based on scan results. It also allows you to choose which exit values are used. It should typically be the last job in a plan.


If warnLevel or errorLevel are set then the job will report a warning or error if any alerts
are raised which have the same risk level or greater.


By default when ZAP is run with the `-cmd` and `-autorun` options then it will
exit with a 1 if there are any errors, with a 2 if there are any warnings, and if everything is ok
then it will exit with a 0.
These values can be overriden by the `*ExitValue` options. The `*ExitValues` can be used together
with the warn/errorLevel or completely independently of them.

## YAML

```
  - type: exitStatus                   # Sets the exit code based on scan results
    parameters:
      errorLevel:                      # String: Informational, Low, Medium, High, default: not set
      warnLevel:                       # String: Informational, Low, Medium, High, default: not set
      okExitValue:                     # Integer: Exit value if all ok, default 0
      errorExitValue:                  # Integer: Exit value if there are errors, default 1
      warnExitValue:                   # Integer: Exit value if there are warnings, default 2
    enabled:                           # Bool: If set to false the job will not be run, default: true
    alwaysRun:                         # Bool: If set and the job is enabled then it will run even if the plan exits early, default: false
 
```

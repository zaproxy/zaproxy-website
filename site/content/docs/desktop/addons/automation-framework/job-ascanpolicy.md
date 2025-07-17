---
# This page was generated from the add-on.
title: Automation Framework - activeScan-policy Job
type: userguide
weight: 7
---

# Automation Framework - activeScan-policy Job

This job defines an active scan policy. This policy can be used later in the plan by active scan related jobs, like [activeScan](/docs/desktop/addons/automation-framework/job-ascan/) job.

## YAML

```
  - type: activeScan-policy            # Defines a new active scan policy which can be used by later activeScan related jobs
    parameters:
      name:                            # String: Name of the policy, mandatory
    policyDefinition:                  # The policy definition
      defaultStrength:                 # String: The default Attack Strength for all rules, one of Low, Medium, High, Insane (not recommended), default: Medium
      defaultThreshold:                # String: The default Alert Threshold for all rules, one of Off, Low, Medium, High, default: Medium
      rules:                           # A list of one or more active scan rules and associated settings which override the defaults
      - id:                            # Int: The rule id as per https://www.zaproxy.org/docs/alerts/
        name:                          # Comment: The name of the rule for documentation purposes - this is not required or actually used
        strength:                      # String: The Attack Strength for this rule, one of Low, Medium, High, Insane, default: Medium
        threshold:                     # String: The Alert Threshold for this rule, one of Off, Low, Medium, High, default: Medium
    enabled:                           # Bool: If set to false the job will not be run, default: true
    alwaysRun:                         # Bool: If set and the job is enabled then it will run even if the plan exits early, default: false
```

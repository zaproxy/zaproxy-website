---
# This page was generated from the add-on.
title: Alert Filter Automation Framework Support
type: userguide
weight: 3
---

# Alert Filter Automation Framework Support

This add-on supports the Automation Framework.

## Job: alertFilter

The alertFilter job allows you to define global and context specific alert filters.


It is covered in the video: [ZAP Chat 08 Automation Framework Part 2 - Environment](https://youtu.be/1fcpU54N-mA).

```
  - type: alertFilter                  # Used to change the risk levels of alerts
    parameters:
      deleteGlobalAlerts: true         # Boolean, if true then will delete all existing global alerts, default false
    alertFilters:                      # A list of alertFilters to be applied
      - ruleId:                        # Int: Mandatory, the scan rule ID or the alert reference
        newRisk:                       # String: Mandatory new risk level, one of 'False Positive', 'Info', 'Low', 'Medium', 'High'
        context:                       # String: Optional context name, if empty then a global alert filter will be created
        url:                           # String: Optional string to match against the alert, supports environment vars
        urlRegex:                      # Boolean: Optional, if true then the url is a regex
        parameter:                     # String: Optional string to match against the alert parameter field
        parameterRegex:                # Boolean: Optional, if true then the parameter is a regex, supports environment vars
        attack:                        # String: Optional string to match against the alert attack field
        attackRegex:                   # Boolean: Optional, if true then the attack is a regex
        evidence:                      # String: Optional string to match against the alert evidence field
        evidenceRegex:                 # Boolean: Optional, if true then the evidence is a regex
```

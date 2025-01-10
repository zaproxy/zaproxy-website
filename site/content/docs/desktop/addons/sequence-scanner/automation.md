---
# This page was generated from the add-on.
title: Automation Framework Support
type: userguide
weight: 1
---

# Automation Framework Support

This add-on supports the Automation Framework.   

## Job: sequence-import

The `sequence-import` job allows you to create a Sequence from an HAR file.

```
  - type: sequence-import      # Imports a sequence from a HAR file.
    parameters:
      name:                    # The name by which the seq will be known in ZAP.
      path:                    # The full/relative path to the HAR file to import.
      assertCode:              # Boolean, if true add status code assertion.
      assertLength:            # Integer, if supplied then add approx len assertion (value between 0 and 100).
```

This job will automatically detect any HTTP Form parameters that are used in future requests and add Zest assignments to handle them.

## Job: sequence-activeScan

The `sequence-activeScan` job allows you to active scan sequences.

```
  - type: sequence-activeScan                  # Active scans one or all sequences.
    parameters:
      sequence:                                # String: The name of the sequence, or empty to active scan all sequences.
      context:                                 # String: Context to use when active scanning, default: first context.
      user:                                    # String: An optional user to use for authentication, must be defined in the env.
      policy:                                  # String: Name of the scan policy to be used, default: Sequence.
    policyDefinition:                          # The policy definition - only used if the 'policy' is not set
      defaultStrength:                         # String: The default Attack Strength for all rules, one of Low, Medium, High, Insane (not recommended), default: Medium
      defaultThreshold:                        # String: The default Alert Threshold for all rules, one of Off, Low, Medium, High, default: Medium
      rules:                                   # A list of one or more active scan rules and associated settings which override the defaults
      - id:                                    # Int: The rule id as per https://www.zaproxy.org/docs/alerts/
        name:                                  # Comment: The name of the rule for documentation purposes - this is not required or actually used
        strength:                              # String: The Attack Strength for this rule, one of Low, Medium, High, Insane, default: Medium
        threshold:                             # String: The Alert Threshold for this rule, one of Off, Low, Medium, High, default: Medium
    tests:
      - name: 'test one'                       # Name of the test, optional
        type: alert                            # Specifies that the test is of type 'alert'
        action: passIfPresent/passIfAbsent     # String: The condition (presence/absence) of the alert, default: passIfAbsent
        scanRuleId:                            # Integer: The id of the scanRule which generates the alert, mandatory
        alertName:                             # String: The name of the alert generated, optional
        url: http://www.example.com/path       # String: The url of the request corresponding to the alert generated, optional
        method:                                # String: The method of the request corresponding to the alert generated, optional
        attack:                                # String: The actual attack which generated the alert, optional
        param:                                 # String: The parameter which was modified to generate the alert, optional
        evidence:                              # String: The evidence corresponding to the alert generated, optional
        confidence:                            # String: The confidence of the alert, one of 'False Positive', 'Low', 'Medium', 'High', 'Confirmed', optional
        risk:                                  # String: The risk of the alert, one of 'Informational', 'Low', 'Medium', 'High', optional
        otherInfo:                             # String: Addional information corresponding to the alert, optional
        onFail: 'info'                         # String: One of 'warn', 'error', 'info', mandatory
```

**Note** : Unless the `defaultThreshold` of the `policyDefinition` is `OFF` all rules will be enabled to start with.

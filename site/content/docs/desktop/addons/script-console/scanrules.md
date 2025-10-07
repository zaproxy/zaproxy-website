---
# This page was generated from the add-on.
title: Script Scan Rules
type: userguide
weight: 4
---

# Script Scan Rules

Active and Passive Scripts that implement the `getMetadata` function are treated as first-class scan rules by ZAP. An example implementation of this function in a script would look like:


    function getMetadata() {
    	return ScanRuleMetadata.fromYaml(`
    id: 12345
    name: Active Vulnerability Title
    description: Full description
    solution: The solution
    references:
      - Reference 1
      - Reference 2
    category: INJECTION  # info_gather, browser, server, misc, injection
    risk: INFO  # info, low, medium, high
    confidence: LOW  # false_positive, low, medium, high, user_confirmed
    cweId: 0
    wascId: 0
    alertTags:
      name1: value1
      name2: value2
    otherInfo: Any other Info
    status: alpha
    alertRefOverrides:
      12345-1:
        name: Alert Reference 1

    `);
    }


The metadata function is evaluated upon saving the script, which is exposed as a scan rule if the metadata is valid.


The `category` field is only used for Active Scan Scripts.


The `alertRefOverrides` field allows you to override specific fields for each alert reference.
You may override any top-level field except `id`, `category`, and `status`.
An alert reference is used as a unique identifier for an alert type when a scan rule may raise more than one type of
alert.
Typically, alert references for a given scan rule are expected to be equal to the scan rule ID suffixed with sequential
digits, e.g. `12345-1`, `12345-2`, etc.
To raise an alert that uses the metadata for a given alert reference, you may pass the alert reference as an argument to
`newAlert()`.


Any undefined fields in the metadata are ignored (e.g. `author: your name`).

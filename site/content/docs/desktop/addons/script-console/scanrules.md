---
# This page was generated from the add-on.
title: Script Scan Rules
type: userguide
weight: 4
---

# Script Scan Rules

Active and Passive Scripts that implement the \`getMetadata\` function are treated as first-class scan rules by ZAP. Example implementation of this function in a script would look like:


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
    `);
    }

The `category` field is only used for Active Scan Scripts. Any additional fields in the metadata are ignored. The metadata function is evaluated upon saving the script, which is exposed as a scan rule if the metadata is valid.

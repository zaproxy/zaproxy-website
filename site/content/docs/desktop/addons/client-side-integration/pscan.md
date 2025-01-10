---
# This page was generated from the add-on.
title: Client Side Integration - Passive Scan Rules
type: userguide
weight: 3
---

# Client Side Integration - Passive Scan Rules

The Client Side Integration add-on supports passive scanning of the data streamed from the browser.


The following rules are included in this add-on:

## Information Disclosure - Information in Browser Storage {#id-120000}

This rule reports any information stored in browser localStorage and sessionStorage.


This is not unusual or necessarily unsafe - this informational alerts are raised to help you get a better understanding of
what this app is doing.


The alert parameter will be the storage key used.
An alert will only be raised once for each URL + key.


Latest code: [InformationInStorageScanRule.java](https://github.com/zaproxy/zap-extensions/tree/main/addOns/client/src/main/java/org/zaproxy/addon/client/pscan/InformationInStorageScanRule.java)  

Alert ID: [120000](/docs/alerts/120000/).

## Information Disclosure - Sensitive Information in Browser Storage {#id-120001}

This rule reports any sensitive information stored in browser localStorage and sessionStorage.


This can violate PCI and most organizational compliance policies.


Potentially sensitive information identified includes:

* Credit card numbers
* Email addresses
* US Social security numbers

The alert parameter will be the storage key used. An alert will only be raised once for each URL + key.


Latest code: [SensitiveInfoInStorageScanRule.java](https://github.com/zaproxy/zap-extensions/tree/main/addOns/client/src/main/java/org/zaproxy/addon/client/pscan/SensitiveInfoInStorageScanRule.java)  

Alert ID: [120001](/docs/alerts/120001/).

## Information Disclosure - JWT in Browser Storage {#id-120002}

This rule reports any JWTs stored in browser localStorage and sessionStorage.


JWTs are commonly stored in sessionStorage so these are just raised as Informational alerts.


JWTs should not typically be stored in localStorage so these are raised as Medium alerts.


The alert parameter will be the storage key used.
An alert will only be raised once for each URL + key.


Latest code: [JwtInStorageScanRule.java](https://github.com/zaproxy/zap-extensions/tree/main/addOns/client/src/main/java/org/zaproxy/addon/client/pscan/JwtInStorageScanRule.java)  

Alert ID: [120002](/docs/alerts/120002/).

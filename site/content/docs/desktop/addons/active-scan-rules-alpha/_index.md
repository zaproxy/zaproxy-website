---
# This page was generated from the add-on.
title: Active Scan Rules - Alpha
type: userguide
weight: 1
cascade:
  addon:
    id: ascanrulesAlpha
    version: 52.0.0
---

# Active Scan Rules - Alpha

The following alpha status active scan rules are included in this add-on:

## LDAP Injection {#id-40015}

LDAP Injection may be possible. It may be possible for an attacker to bypass authentication controls, and to view and modify arbitrary data in the LDAP directory. Skips messages which originally resulted in a client or server error response status code.


Latest code: [LdapInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/LdapInjectionScanRule.java)


Alert ID: [40015](/docs/alerts/40015/).

## NoSQL Injection - MongoDB {#id-40033}

This rule attempts to identify MongoDB specific NoSQL Injection vulnerabilities. It attempts various types of attacks including: boolean based, error based, time based, and authentication bypass. It does not include time based attacks. It will also attempt JSON parameter specific payloads if the scan is configured to include JSON parameter variants.


Latest code: [MongoDbInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/MongoDbInjectionScanRule.java)


Alert ID: [40033](/docs/alerts/40033/).

## NoSQL Injection - MongoDB (Time Based) {#id-90039}

This rule attempts to identify MongoDB specific NoSQL Injection vulnerabilities using only time based attacks.


Latest code: [MongoDbInjectionTimingScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/MongoDbInjectionTimingScanRule.java)


Alert ID: [90039](/docs/alerts/90039/).

## Web Cache Deception {#id-40039}

This rule attempts to identify Web Cache Deception vulnerabilities. It checks whether a static path appended to original URIs can be used to leak sensitive user information or not.

* User must be authenticated before using this rule

Latest code: [WebCacheDeceptionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/WebCacheDeceptionScanRule.java)   
Alert ID: [40039](/docs/alerts/40039/).

## Suspicious Input Transformation {#id-100044}

This is an active script scan rule. It detects various types of suspicious input transformations that may indicate potential security vulnerabilities such as template injection, expression evaluation, quote consumption, and issues related to unicode normalization.


This rule is largely adapted from the "Suspect Transform" check included in the ActiveScan++ extension for Burp
Suite by
Albinowax: [SuspectTransform.java](https://github.com/albinowax/ActiveScanPlusPlus/blob/master/src/burp/SuspectTransform.java).


Latest code: [SuspiciousInputTransformation.js](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/zapHomeFiles/scripts/scripts/active/SuspiciousInputTransformation.js)


Alert ID: [100044](/docs/alerts/100044/).

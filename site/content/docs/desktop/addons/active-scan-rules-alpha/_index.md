---
# This page was generated from the add-on.
title: Active Scan Rules - Alpha
type: userguide
weight: 1
cascade:
  addon:
    id: ascanrulesAlpha
    version: 49.0.0
---

# Active Scan Rules - Alpha

The following alpha status active scan rules are included in this add-on:

## An example active scan rule which loads data from a file {#id-60101}

This implements an example active scan rule that loads strings from a file that the user can edit.  
For more details see: [Hacking ZAP Part 4: Active Scan Rules](/blog/2014-04-30-hacking-zap-4-active-scan-rules/).


Latest code: [ExampleFileActiveScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/ExampleFileActiveScanRule.java)

## Example Active Scan Rule: Denial of Service {#id-60100}

This implements a very simple example active scan rule.  
For more details see: [Hacking ZAP Part 4: Active Scan Rules](/blog/2014-04-30-hacking-zap-4-active-scan-rules/).


Latest code: [ExampleSimpleActiveScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/ExampleSimpleActiveScanRule.java)

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

---
# This page was generated from the add-on.
title: Active Scan Rules - Alpha
type: userguide
weight: 1
cascade:
  addon:
    id: ascanrulesAlpha
    version: 42.0.0
---

# Active Scan Rules - Alpha

The following alpha status active scan rules are included in this add-on:

## An example active scan rule which loads data from a file

This implements an example active scan rule that loads strings from a file that the user can edit.  
For more details see: [Hacking ZAP Part 4: Active Scan Rules](/blog/2014-04-30-hacking-zap-4-active-scan-rules/).

Latest code: [ExampleFileActiveScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/ExampleFileActiveScanRule.java)

## Example Active Scan Rule: Denial of Service

This implements a very simple example active scan rule.  
For more details see: [Hacking ZAP Part 4: Active Scan Rules](/blog/2014-04-30-hacking-zap-4-active-scan-rules/).

Latest code: [ExampleSimpleActiveScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/ExampleSimpleActiveScanRule.java)

## LDAP Injection

LDAP Injection may be possible. It may be possible for an attacker to bypass authentication controls, and to view and modify arbitrary data in the LDAP directory.

Latest code: [LdapInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/LdapInjectionScanRule.java)

## NoSQL Injection - MongoDB

This rule attempts to identify MongoDB specific NoSQL Injection vulnerabilities. It attempts various types of attacks including: boolean based, error based, time based, and authentication bypass. It will also attempt JSON parameter specific payloads if the scan is configured to include JSON parameter variants.

Latest code: [MongoDbInjectionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/MongoDbInjectionScanRule.java)

## Web Cache Deception

This rule attempts to identify Web Cache Deception vulnerabilities. It checks whether a static path appended to original URIs can be used to leak sensitive user information or not.

* User must be authenticated before using this rule

Latest code: [WebCacheDeceptionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/WebCacheDeceptionScanRule.java)

## Server Side Request Forgery

This rule attempts to find Server Side Request Forgery vulnerabilities by injecting out-of-band payloads in request parameters.

Latest code: [SsrfScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/SsrfScanRule.java)

## Text4shell (CVE-2022-42889)

This rule attempts to discover the Text4shell ([CVE-2022-42889](https://www.cve.org/CVERecord?id=CVE-2022-42889)) vulnerability. It relies on the OAST add-on to generate out-of-band payloads and verify DNS interactions.

Latest code: [Text4ShellScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/Text4ShellScanRule.java)

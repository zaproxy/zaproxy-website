---
# This page was generated from the add-on.
title: Active Scan Rules - Alpha
type: userguide
weight: 1
cascade:
  addon:
    id: ascanrulesAlpha
    version: 39.0.0
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

## CORS Header

This rule attempts to identify CORS headers and also CORS misconfiguration. The CORS is considered as misconfigured when it allows all origins, origins with weaker protocols and null origin.  

Latest code: [CorsScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/CorsScanRule.java)

## Web Cache Deception

This rule attempts to identify Web Cache Deception vulnerabilities. It checks whether a static path appended to original URIs can be used to leak sensitive user information or not.

* User must be authenticated before using this rule

Latest code: [WebCacheDeceptionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/WebCacheDeceptionScanRule.java)

## Java Spring Actuators

This rule attempts to identify if the Spring Actuators are enabled. Tests for the default /actuator/health route in the application.

Latest code: [SpringActuatorScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/SpringActuatorScanRule.java)

## Log4Shell (CVE-2021-44228 and CVE-2021-45046)

This rule attempts to discover the Log4Shell ([CVE-2021-44228](https://www.cve.org/CVERecord?id=CVE-2021-44228) and [CVE-2021-45046](https://www.cve.org/CVERecord?id=CVE-2021-45046)) vulnerabilities. It relies on the OAST add-on to generate out-of-band payloads and verify DNS interactions. We recommend that this scan rule is used with header injection enabled for maximum coverage.

Latest code: [Log4ShellScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/Log4ShellScanRule.java)

## Out of Band XSS

This rule attempts to discover Out-of-band XSS vulnerabilities.

Latest code: [OutOfBandXssScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/OutOfBandXssScanRule.java)

## Exponential Entity Expansion (Billion Laughs Attack)

This rule attempts to identify the "Billion Laughs" vulnerability in servers that accept XML or YAML files.

Latest code: [ExponentialEntityExpansionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/ExponentialEntityExpansionScanRule.java)

## Spring4Shell (CVE-2022-22965)

This rule attempts to discover the Spring4Shell ([CVE-2022-22965](https://tanzu.vmware.com/security/cve-2022-22965) vulnerability. It uses a payload of `class.module.classLoader.DefaultAssertionStatus=nonsense` on all nodes and raises an alert if this payload results in a 400 response. It will not raise an alert if a similar but safe payload also results in a 400 response.

Latest code: [Spring4ShellScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/Spring4ShellScanRule.java)

## Server Side Template Injection

This rule attempts to detect situations in which user input might be interpreted as part of the template and processed on the server, versus the user input simply being used as an argument to the template/engine.

Latest code: [SstiScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/SstiScanRule.java)

## Server Side Template Injection (Blind)

This rule goes one step further than the SSTI scan rule and attempts to find places where the impact of the user input is not immediately obvious, such as when used by an admin panel, report output, invoice, etc.

Latest code: [SstiBlindScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/ascanrulesAlpha/src/main/java/org/zaproxy/zap/extension/ascanrulesAlpha/SstiBlindScanRule.java)

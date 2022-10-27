---
# This page was generated from the add-on.
title: Passive Scan Rules - Beta
type: userguide
weight: 1
cascade:
  addon:
    id: pscanrulesBeta
    version: 31.0.0
---

# Passive Scan Rules - Beta

## General Configuration

### Trusted Domains

You can specify a comma separated list of URL regex patterns using the `rules.domains.trusted` parameter via the Options 'Rule configuration' panel. Any link URL that matches one of these patterns will be considered to be in a trusted domain and will therefore not be reported. Following rules supports **Trusted Domains** :

* Sub Resource Integrity Attribute Missing

*** ** * ** ***

The following beta status passive scan rules are included in this add-on:

## Content Cacheability

This scan rule analyzes the cache control and pragma headers in HTTP traffic and resports on the cacheability of the requests from a RFC7234 point of view.

Alerts generated:

* **Non-Storable Content**
* **Storable but Non-Cacheable Content**
* **Storable and Cacheable Content**

Latest code: [CacheableScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/CacheableScanRule.java)

## Dangerous JS Functions

This scan rule checks for any dangerous JS functions present in a site response.  
**Note:** If the Custom Payloads addon is installed you can add your own function names (payloads) in the Custom Payloads options panel. They will also be searched for in responses as they're passively scanned. Keep in mind that the greater the number of payloads the greater the amount of time needed to passively scan.   
**Note:** $ is stripped from the start of the strings/payloads and is optionally included when the patterns are assembled.

Latest code: [JsFunctionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/JsFunctionScanRule.java)

## In Page Banner Information Leak

Analyzes response body content for the presence of web or application server banners (when the responses have error status codes).  
If the Threshold is Low then status 200 - Ok responses are analyzed as well.  
The presence of such banners may facilitate more targeted attacks against known vulnerabilities.

Latest code: [InPageBannerInfoLeakScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/InPageBannerInfoLeakScanRule.java)

## Java Serialization Object

Java Serialization Object (JSO) is a way to save and exchange objects between Java applications.  
Different problems are associated with JSO. Sensitive data can leak to the stream of bytes.  
An attacker can also modify the data and exploit JSO to do a Remote Code Execution on the server.  
JSO should not be used by Java programs. Strong controls must be done on serialized data.  
JSO are a type of vulnerabilities associated to A8:2017-Insecure Deserialization.

Latest code: [JsoScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/JsoScanRule.java)

## Permissions Policy Header Not Set

This rule checks the HTTP response headers (on HTML and JavaScript responses) for inclusion of a "Permissions-Policy" header, and alerts if one is not found. It also alerts if the deprecated header "Feature-Policy" is found.  
Redirects are ignored except at the Low threshold.

Latest code: [PermissionsPolicyScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/PermissionsPolicyScanRule.java)

## Servlet Parameter Pollution

Searches response content for HTML forms which fail to specify an action element. Version 3 of the Java Servlet spec calls for aggregation of query string and post data elements which may result in unintended handling of user controlled data. This may impact other frameworks and technologies as well. **Note:** This scan rule will only analyze responses on LOW Threshold, and in Context URLs for which the Tech JSP/Servlet is applicable.

Latest code: [ServletParameterPollutionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/ServletParameterPollutionScanRule.java)

## Sub Resource Integrity Attribute Missing

This rule checks whether the integrity attribute in the script or the link element served by an external resource (for example: CDN) is missing.  
It helps mitigate an attack where the CDN has been compromised and content has been replaced by malicious content.  
Note: A suggested integrity hash value will be present in the relevant Alert's Other Info details if it can be resolved to a script in the Sites Tree.

This rule supports **Trusted Domains**, check "General Configuration" for more information.

Latest code: [SubResourceIntegrityAttributeScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/SubResourceIntegrityAttributeScanRule.java)

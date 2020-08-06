---
# This page was generated from the add-on.
title: Passive Scan Rules - Alpha
type: userguide
weight: 1
cascade:
  addon:
    id: pscanrulesAlpha
    version: 27.0.0
---

# Passive Scan Rules - Alpha

The following alpha quality passive scan rules are included in this add-on:

## An example passive scan rule which loads data from a file

This implements an example passive scan rule that loads strings from a file that the user can edit.  
For more details see: [Hacking ZAP Part 3: Passive Scan Rules](/blog/2014-04-03-hacking-zap-3-passive-scan-rules/).

Latest code: [ExampleFilePassiveScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/ExampleFilePassiveScanner.java)

## Base64 Disclosure

* **ASP.NET ViewState Disclosure:** An ASP.NET ViewState was disclosed by the application/web server
* **ASP.NET ViewState Integrity:** The application does not use a Message Authentication Code (MAC) to protect the integrity of the ASP.NET ViewState, which can be tampered with by a malicious client
* **Base64 Disclosure:** Base64 encoded data was disclosed by the application/web server

**Note:** At Low Threshold all occurrences within each response will be included.

Latest code: [Base64Disclosure.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/Base64Disclosure.java)

## Content Cacheability

This scanner analyzes the cache control and pragma headers in HTTP traffic and resports on the cacheability of the requests from a RFC7234 point of view.

Alerts generated:

* **Non-Storable Content**
* **Storable but Non-Cacheable Content**
* **Storable and Cacheable Content**

Latest code: [CacheableScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/CacheableScanner.java)

## Example Passive Scanner: Denial of Service

This implements a very simple example passive scan rule.  
For more details see: [Hacking ZAP Part 3: Passive Scan Rules](/blog/2014-04-03-hacking-zap-3-passive-scan-rules/).

Latest code: [ExampleSimplePassiveScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/ExampleSimplePassiveScanner.java)

## Feature Policy Header Not Set

This scanner checks the HTTP response headers (on HTML and JavaScript responses) for inclusion of a "Feature-Policy" header, and alerts if one is not found.  
Redirects are ignored except at the Low threshold.

Latest code: [FeaturePolicyScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/FeaturePolicyScanner.java)

## In Page Banner Information Leak

Analyzes response body content for the presence of web or application server banners (when the responses have error status codes).  
If the Threshold is Low then status 200 - Ok responses are analyzed as well.  
The presence of such banners may facilitate more targeted attacks against known vulnerabilities.

Latest code: [InPageBannerInfoLeakScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/InPageBannerInfoLeakScanner.java)

## Java Serialization Object

Java Serialization Object (JSO) is a way to save and exchange objects between Java applications.  
Different problems are associated with JSO. Sensitive data can leak to the stream of bytes.  
An attacker can also modify the data and exploit JSO to do a Remote Code Execution on the server.  
JSO should not be used by Java programs. Strong controls must be done on serialized data.  
JSO are a type of vulnerabilities associated to A8:2017-Insecure Deserialization.

Latest code: [JsoScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/JsoScanner.java)

## Source Code Disclosure

Application Source Code was disclosed by the web server

Latest code: [SourceCodeDisclosureScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/SourceCodeDisclosureScanner.java)

## Sub Resource Integrity Attribute Missing

This scanner checks whether the integrity attribute in the script or the link element served by an external resource (for example: CDN) is missing.  
It helps mitigate an attack where the CDN has been compromised and content has been replaced by malicious content.  

Latest code: [SubResourceIntegrityAttributeScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/SubResourceIntegrityAttributeScanner.java)

## Dangerous JS Functions

This scanner checks for any dangerous JS functions present in a site response.  
**Note:** If the Custom Payloads addon is installed you can add your own function names (payloads) in the Custom Payloads options panel. They will also be searched for in responses as they're passively scanned. Keep in mind that the greater the number of payloads the greater the amount of time needed to passively scan.

Latest code: [JSFunctionPassiveScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/JSFunctionPassiveScanner.java)

---
# This page was generated from the add-on.
title: Passive Scan Rules - Alpha
type: userguide
weight: 1
cascade:
  addon:
    id: pscanrulesAlpha
    version: 40.0.0
---

# Passive Scan Rules - Alpha

The following alpha status passive scan rules are included in this add-on:

## An example passive scan rule which loads data from a file

This implements an example passive scan rule that loads strings from a file that the user can edit.  
For more details see: [Hacking ZAP Part 3: Passive Scan Rules](/blog/2014-04-03-hacking-zap-3-passive-scan-rules/).

Latest code: [ExampleFilePassiveScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/ExampleFilePassiveScanRule.java)

## Base64 Disclosure

* **ASP.NET ViewState Disclosure:** An ASP.NET ViewState was disclosed by the application/web server
* **ASP.NET ViewState Integrity:** The application does not use a Message Authentication Code (MAC) to protect the integrity of the ASP.NET ViewState, which can be tampered with by a malicious client
* **Base64 Disclosure:** Base64 encoded data was disclosed by the application/web server

**Note:** At Low Threshold all occurrences within each response will be included.

Latest code: [Base64Disclosure.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/Base64Disclosure.java)

## Example Passive Scan Rule: Denial of Service

This implements a very simple example passive scan rule.  
For more details see: [Hacking ZAP Part 3: Passive Scan Rules](/blog/2014-04-03-hacking-zap-3-passive-scan-rules/).

Latest code: [ExampleSimplePassiveScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/ExampleSimplePassiveScanRule.java)

## Fetch Metadata Request Headers Scan Rule

Fetch Metadata Request headers are HTTP request headers that provide additional information about a request's origin. This additional information helps the server to implement resource isolation policy, allowing external sites to request only those resources that are intended for sharing, and that are used appropriately. This approach can help mitigate common cross-site web vulnerabilities such as CSRF, Cross-site Script Inclusion, timing attacks, and cross-origin information leaks. The Fetch Metadata Request headers are:

* Sec-Fetch-Site
* Sec-Fetch-Mode
* Sec-Fetch-Dest
* Sec-Fetch-User

(from [Fetch Metadata Headers](https://developer.mozilla.org/en-US/docs/Glossary/Fetch_metadata_request_header))

Sec-Fetch-Site indicates the relationship between a request initiator's origin and the origin of requested resource.
(from [Sec-Fetch-Site](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site))

Sec-Fetch-Mode allows the server to distinguish between requests originating from a user navigating between HTML
pages and requests to load images and other resources.
(from [Sec-Fetch-Mode](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Mode))

Sec-Fetch-Dest indicates where and how the requested resource will be used.
(from [Sec-Fetch-Dest](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest))

Sec-Fetch-User is only sent for requests initiated by user activation.
(from [Sec-Fetch-User](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User))

Alerts generated:

* **Sec-Fetch-Site Header is Missing**
* **Sec-Fetch-Site Header Has an Invalid Value**
* **Sec-Fetch-Mode Header is Missing**
* **Sec-Fetch-Mode Header Has an Invalid Value**
* **Sec-Fetch-Dest Header is Missing**
* **Sec-Fetch-Dest Header Has an Invalid Value**
* **Sec-Fetch-User Header is Missing**
* **Sec-Fetch-User Header Has an Invalid Value**

Latest code: [FetchMetadataRequestHeadersScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/FetchMetadataRequestHeadersScanRule.java)

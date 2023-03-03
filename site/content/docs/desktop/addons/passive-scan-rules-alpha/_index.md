---
# This page was generated from the add-on.
title: Passive Scan Rules - Alpha
type: userguide
weight: 1
cascade:
  addon:
    id: pscanrulesAlpha
    version: 38.0.0
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

## Site Isolation Scan Rule

Spectre is a side-channel attack allowing an attacker to read data from memory. One of the counter-measures is to prevent sensitive data from entering the memory and to separate trusted and untrusted documents in different browsing contexts. Three headers have been defined to enable that:

* Cross-Origin-Resource-Policy
* Cross-Origin-Embedder-Policy
* Cross-Origin-Opener-Policy

The Cross-Origin-Embedder-Policy (COEP) header prevents a document from loading any non-same-origin resources which don't explicitly grant the document permission to be loaded. (from [COOP and COEP explained](https://docs.google.com/document/d/1zDlfvfTJ_9e8Jdc8ehuV4zMEu9ySMCiTGMS9y0GU92k/edit)). The Cross-Origin-Resource-Policy (CORP) header allows you to control the set of origins that are empowered to include a resource. It is a robust defense against attacks like Spectre, as it allows browsers to block a given response before it enters an attacker's process.
For example, an attacker site can include an image tag with an attribute src to an internal content. The browser will load the data. With a side-channel attack, an attacker will be able to read it. The Cross-Origin-Opener-Policy (COOP) header forces the browser to create multiple browsing contexts to separate trusted and untrusted documents. Site Isolation is complementary with Cross-Origin-Resource-Blocking, a mechanism managed independently by the browser.

Alerts generated:

* **Cross-Origin-Resource-Policy Header Missing or Invalid**
* **Cross-Origin-Embedder-Policy Header Missing or Invalid**
* **Cross-Origin-Opener-Policy Header Missing or Invalid**

Latest code: [SiteIsolationScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/SiteIsolationScanRule.java)

## Example Passive Scan Rule: Denial of Service

This implements a very simple example passive scan rule.  
For more details see: [Hacking ZAP Part 3: Passive Scan Rules](/blog/2014-04-03-hacking-zap-3-passive-scan-rules/).

Latest code: [ExampleSimplePassiveScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/ExampleSimplePassiveScanRule.java)

## Source Code Disclosure

Application Source Code was disclosed by the web server.  
NOTE: Ignores CSS, JavaScript, images, and font files.

Latest code: [SourceCodeDisclosureScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/SourceCodeDisclosureScanRule.java)

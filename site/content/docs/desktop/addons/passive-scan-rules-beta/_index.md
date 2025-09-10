---
# This page was generated from the add-on.
title: Passive Scan Rules - Beta
type: userguide
weight: 1
cascade:
  addon:
    id: pscanrulesBeta
    version: 45.0.0
---

# Passive Scan Rules - Beta

## General Configuration

### Trusted Domains

You can specify a comma separated list of URL regex patterns using the `rules.domains.trusted` parameter via the Options 'Rule configuration' panel. Any link URL that matches one of these patterns will be considered to be in a trusted domain and will therefore not be reported. Following rules supports **Trusted Domains** :

* Sub Resource Integrity Attribute Missing

*** ** * ** ***

The following beta status passive scan rules are included in this add-on:

## Content Cacheability {#id-10049}

This scan rule analyzes the cache control and pragma headers in HTTP traffic and reports on the cacheability of the requests from a RFC7234 point of view.


Alerts generated:

* **Non-Storable Content**
* **Storable but Non-Cacheable Content**
* **Storable and Cacheable Content**


Latest code: [CacheableScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/CacheableScanRule.java)  

Alert ID: [10049](/docs/alerts/10049/)

## Dangerous JS Functions {#id-10110}

This scan rule checks for any dangerous JS functions present in a site response.  
**Note:** If the Custom Payloads add-on is installed you can add your own function names (payloads) in the Custom Payloads options panel. They will also be searched for in responses as they're passively scanned. Keep in mind that the greater the number of payloads the greater the amount of time needed to passively scan.   
The Custom Payloads category for this rule is: `JS-Function`.   
**Note:** $ is stripped from the start of the strings/payloads and is optionally included when the patterns are assembled.


Latest code: [JsFunctionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/JsFunctionScanRule.java)  

Alert ID: [10110](/docs/alerts/10110/)

## In Page Banner Information Leak {#id-10009}

Analyzes response body content for the presence of web or application server banners (when the responses have error status codes).  
If the Threshold is Low then status 200 - Ok responses are analyzed as well.  
The presence of such banners may facilitate more targeted attacks against known vulnerabilities.


Latest code: [InPageBannerInfoLeakScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/InPageBannerInfoLeakScanRule.java)  

Alert ID: [10009](/docs/alerts/10009/)

## Java Serialization Object {#id-90002}

Java Serialization Object (JSO) is a way to save and exchange objects between Java applications.  
Different problems are associated with JSO. Sensitive data can leak to the stream of bytes.  
An attacker can also modify the data and exploit JSO to do a Remote Code Execution on the server.  
JSO should not be used by Java programs. Strong controls must be done on serialized data.  
JSO are a type of vulnerabilities associated to A8:2017-Insecure Deserialization.


Latest code: [JsoScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/JsoScanRule.java)  

Alert ID: [90002](/docs/alerts/90002/)

## Permissions Policy Header Not Set {#id-10063}

This rule checks the HTTP response headers (on HTML and JavaScript responses) for inclusion of a "Permissions-Policy" header, and alerts if one is not found. It also alerts if the deprecated header "Feature-Policy" is found.  
Redirects are ignored except at the Low threshold.


Latest code: [PermissionsPolicyScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/PermissionsPolicyScanRule.java)  

Alert ID: [10063](/docs/alerts/10063/)

## Site Isolation Scan Rule {#id-90004}

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


Latest code: [SiteIsolationScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/SiteIsolationScanRule.java)  

Alert ID: [90004](/docs/alerts/90004/)

## Servlet Parameter Pollution {#id-10026}

Searches response content for HTML forms which fail to specify an action element. Version 3 of the Java Servlet spec calls for aggregation of query string and post data elements which may result in unintended handling of user controlled data. This may impact other frameworks and technologies as well. **Note:** This scan rule will only analyze responses on LOW Threshold, and in Context URLs for which the Tech JSP/Servlet is applicable.


Latest code: [ServletParameterPollutionScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/ServletParameterPollutionScanRule.java)  

Alert ID: [10026](/docs/alerts/10026/)

## Source Code Disclosure {#id-10099}

Application Source Code was disclosed by the web server.  
NOTE: Ignores CSS, JavaScript, images, font files, and responses that contain ISO control characters (those which are likely binary files).


Latest code: [SourceCodeDisclosureScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/SourceCodeDisclosureScanRule.java)  

Alert ID: [10099](/docs/alerts/10099/)

## Sub Resource Integrity Attribute Missing {#id-90003}

This rule checks whether the integrity attribute in the script or the link element served by an external resource (for example: CDN) is missing.  
It helps mitigate an attack where the CDN has been compromised and content has been replaced by malicious content.  
Note: A suggested integrity hash value will be present in the relevant Alert's Other Info details if it can be resolved to a script in the Sites Tree.


This rule supports **Trusted Domains**, check "General Configuration" for more information.


Latest code: [SubResourceIntegrityAttributeScanRule.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/pscanrulesBeta/src/main/java/org/zaproxy/zap/extension/pscanrulesBeta/SubResourceIntegrityAttributeScanRule.java)  

Alert ID: [90003](/docs/alerts/90003/)

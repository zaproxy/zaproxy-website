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

## Insecure Component

Passively scans the server response headers and body generator content for product versions, which are then cross-referenced against a list of product versions known to be vulnerable to various CVEs. A list of ranked CVEs and CVSS severity scores is output for each product noted to be vulnerable. Currently, the following server side products are supported:  
Apache Tomcat application server (limited functionality due to limited information leakage by Tomcat)  
Apache web server  
mod_auth_radius Apache module  
mod_fcgid Apache module  
mod_imap Apache module  
mod_jk Apache module  
mod_perl Apache module  
mod_python Apache module  
mod_ssl Apache module  
OpenSSL Apache module  
Perl Apache module  
Python Apache module  
IBM HTTP Server  
JBoss application server  
Jetty web server / application server  
LiteSpeed web server  
Lighttpd web server  
Microsoft IIS web server  
Netscape Enterprise web server  
Nginx web server  
OpenCMS  
Oracle Application Server  
Oracle Web Cache  
PHP  
Phusion_Passenger  
Squid proxy server  
Sun One web server  
Sun Java System Web Server  
TornadoServer web server  
WordPress  

Latest code: [InsecureComponentScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/InsecureComponentScanner.java)

## Java Serialization Object

Java Serialization Object (JSO) is a way to save and exchange objects between Java applications.  
Different problems are associated with JSO. Sensitive data can leak to the stream of bytes.  
An attacker can also modify the data and exploit JSO to do a Remote Code Execution on the server.  
JSO should not be used by Java programs. Strong controls must be done on serialized data.  
JSO are a type of vulnerabilities associated to A8:2017-Insecure Deserialization.

Latest code: [JsoScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/JsoScanner.java)

## Modern Web Application

This raises an informational alert if a site appears to be a modern web application.  
It does not indicate any potential vulnerabilities but it could indicate that the ajax spider might be more effective at exploring this site compared to the traditional spider.

Latest code: [ModernAppDetectionScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/ModernAppDetectionScanner.java)

## Source Code Disclosure

Application Source Code was disclosed by the web server

Latest code: [SourceCodeDisclosureScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/SourceCodeDisclosureScanner.java)

## Sub Resource Integrity Attribute Missing

This scanner checks whether the integrity attribute in the script or the link element served by an external resource (for example: CDN) is missing.  
It helps mitigate an attack where the CDN has been compromised and content has been replaced by malicious content.  

Latest code: [SubResourceIntegrityAttributeScanner.java](https://github.com/zaproxy/zap-extensions/blob/master/addOns/pscanrulesAlpha/src/main/java/org/zaproxy/zap/extension/pscanrulesAlpha/SubResourceIntegrityAttributeScanner.java)

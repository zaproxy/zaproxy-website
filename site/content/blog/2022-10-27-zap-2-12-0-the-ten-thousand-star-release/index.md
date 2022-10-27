---
title: "ZAP 2.12.0 - the Ten Thousand Star Release"
summary: "ZAP 2.12.0 has just been released, and as the main [zaproxy/zaproxy](https://github.com/zaproxy/zaproxy) repo has just reached 10k stars we're calling this the __Ten Thousand Star__ Release"
images:
- https://www.zaproxy.org/blog/2022-10-27-zap-2-12-0-the-ten-thousand-star-release/images/zapbot-10k-stars-social.png
type: post
tags:
- blog
- release
date: "2022-10-27"
authors:
    - simon
---

ZAP 2.12.0 is [available now](/download/#main),
and as the main [zaproxy/zaproxy](https://github.com/zaproxy/zaproxy) repo has just reached 10k stars we're calling this the __Ten Thousand Star__ Release!

![The Ten Thousand Star ZAP Release](images/zapbot-10k-stars-social.png)

This release fixes an [HTML Injection vulnerability](#desktop-html-injection-fix) in the ZAP Desktop which was rated a P3 / Medium level vulnerability.
While we do not think that it can be exploited in any meaningful way, desktop users are still recommended to update from older ZAP versions a.s.a.p.

Note that this release now requires a minimum of Java 11.

Some of the more significant enhancements include:

### Network Add-On

The core networking code has been replaced by a new add-on which means changes are no longer bound to core/stable releases.
This add-on uses a modern network stack which will make it much easier to support modern protocols such as HTTP/2.

In addition the following features have been added:

 - HTTPS pass-through
 - Certificate validity period configuration 

### Spider Add-On

To facilitate more frequent functional enhancements and bug fixes the core/traditional Spider has been moved to an add-on which means such changes are no longer bound to core/stable releases.
Other add-ons which use Spider functionality have also been re-worked to support the Spider add-on, including: Quick Start, Form Handler, GraphQL, OpenAPI, SOAP, and the Automation Framework. 
More details are given in the [release notes](/docs/desktop/releases/2.12.0/).

### Multi-threaded Passive Scanner

The passive scanner has been updated to use a configurable number of threads, by default 4.
This has been shown to significantly reduce the time spent processing the passive scan queue.

### Bit.ly Telemetry Removal

From this release ZAP will no longer use bit.ly for any telemetry.
Instead it uses our own services on the zaproxy.org domain.
For full details see the FAQ: [What 'calls home' does ZAP make?](/faq/what-calls-home-does-zap-make/)

### Scan Rule Promotions

A significant number of scan rules have been promoted in this release.

The following __Active__ scan rules have been promoted to __Release__ status:

 - [.env Information Leak](/docs/alerts/40034/)
 - [Cloud Metadata Attack](/docs/alerts/90034/)
 - [Cross Site Scripting (DOM Based)](/docs/alerts/10026/)
 - [GET for POST](/docs/alerts/10058/)
 - [Heartbleed OpenSSL Vulnerability](/docs/alerts/20015/)
 - [Hidden File Finder](/docs/alerts/40035/)
 - [Padding Oracle](/docs/alerts/90024/)
 - [Remote Code Execution - CVE-2012-1823](/docs/alerts/20018/)
 - [Source Code Disclosure - CVE-2012-1823](/docs/alerts/20017/)
 - [SQL Injection - Hypersonic (Time Based)](/docs/alerts/40020/)
 - [SQL Injection - MsSQL (Time Based)](/docs/alerts/40027/)
 - [SQL Injection - MySQL (Time Based)](/docs/alerts/40019/)
 - [SQL Injection - Oracle (Time Based)](/docs/alerts/40021/)
 - [SQL Injection - PostgreSQL (Time Based)](/docs/alerts/40022/)
 - [SQL Injection - SQLite](/docs/alerts/40024/)
 - [Trace.axd Information Leak](/docs/alerts/40029/)
 - [User Agent Fuzzer](/docs/alerts/10104/)
 - [XSLT Injection](/docs/alerts/90017/)
 - [XXE](/docs/alerts/90023/)

The following __Passive__ scan rules have been promoted to __Release__ status:

 - [Big Redirects Detected](/docs/alerts/10044/)
 - [Directory Browsing](/docs/alerts/10033/)
 - [Hash Disclosure](/docs/alerts/10097/)
 - [Heartbleed OpenSSL Vulnerability (Indicative)](/docs/alerts/10034/)
 - [HTTP to HTTPS Insecure Transition in Form Post](/docs/alerts/10041/)
 - [HTTPS to HTTP Insecure Transition in Form Post](/docs/alerts/10042/)
 - [Reverse Tabnabbing](/docs/alerts/10108/)
 - [Modern App Detection](/docs/alerts/10109/)
 - [PII Disclosure](/docs/alerts/10062/)
 - [Retrieved From Cache](/docs/alerts/10050/)
 - [Server Header Info Leak](/docs/alerts/10036/)
 - [Strict Transport Security](/docs/alerts/10035/)
 - [User Controlled Charset](/docs/alerts/10030/)
 - [User Controlled Cookie](/docs/alerts/10029/)
 - [User Controlled HTML Attributes](/docs/alerts/10031/)
 - [User Controlled Javascript Event](/docs/alerts/10043/)
 - [User Controlled Open Redirect](/docs/alerts/10028/)
 - [X-Backend-Server Information Leak](/docs/alerts/10039/)
 - [X-ChromeLogger-Data Info Leak](/docs/alerts/10052/)

The following __Active__ scan rules have been promoted to __Beta__ status (and will therefore now be included in the Packaged scans):

 - [CORS](/docs/alerts/40040/)
 - [Exponential Entity Expansion](/docs/alerts/40044/)
 - [Forbidden Bypass](/docs/alerts/40038/)
 - [Log4Shell](/docs/alerts/40043/)
 - [Out-of-Band XSS](/docs/alerts/40031/)
 - [Spring4Shell](/docs/alerts/40045/)
 - [Spring Actuator](/docs/alerts/40042/)
 - [Server Side Template Injection (Blind)](/docs/alerts/90036/)
 - [Server Side Template Injection](/docs/alerts/90035/)

The following __Passive__ scan rules have been promoted to __Beta__ status (and will therefore now be included in the Packaged scans):

 - [Content Cacheable](/docs/alerts/10049/)
 - [In Page Banner Info Leak](/docs/alerts/10009/)
 - [Dangerous JS Functions](/docs/alerts/10110/)
 - [Java Serialization Object](/docs/alerts/90002/)
 - [Permissions Policy Header Not Set](/docs/alerts/10063/)
 - [Sub-Resource Integrity Attribute Missing](/docs/alerts/90003/)

### Dependency Updates

As usual the release includes dependency updates. 
Of particular note is the updated Log4j library. 
The previous stable release contained a Log4j library that was flagged as being vulnerable, although we believe it was not exploitable.

See the [release notes](/docs/desktop/releases/2.12.0/) for details of the other updates.

### New Add-Ons

The following add-ons are included by default in this release for the first time:

 - [Database](/docs/desktop/addons/database/) - provides database engines and related infrastructure.
 - [Import/Export](/docs/desktop/addons/import-export/) - import and export functionality. 
 - [Requester](/docs/desktop/addons/requester/) - request numbered panel. 
 - [Spider](/docs/desktop/addons/spider/) - provides traditional spider functionality.

### Desktop HTML Injection Fix

This release includes a fix to prevent HTML Injection in the ZAP Desktop GUI.
Thank you to "issuefinder" for reporting this to us via our [bug bounty](https://bugcrowd.com/owaspzap) program.
The vulnerability was rated as a P3 / Medium and desktop users are recommended to update from older ZAP versions a.s.a.p.

There are of course a large number of other enhancements and fixes which are detailed in the [release notes](/docs/desktop/releases/2.12.0/).  
  
Thank you to everyone who contributed to this release.

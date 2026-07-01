---
title: "ZAP Updates - June 2026"
summary: >
  In June the OWASP PTK add-on graduated to beta with its integration now properly matching ZAP's
  architecture, a security advisory was issued and patched for the Viewstate add-on, and the Client
  Spider continued its rapid progress toward becoming our recommended spider for modern web apps.
images:
- https://www.zaproxy.org/blog/2026-07-01-zap-updates-june-2026/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2026-07-01"
authors:
- zapbot
---

## Highlights

### OWASP PTK Integration Matures

June was a big month for the [OWASP PTK](https://pentestkit.co.uk/) integration, with two blog posts published.

[Phase 2](/blog/2026-06-05-automating-owasp-ptk-with-zap-phase-2/) introduced a dedicated **PTK Scan Rules** active scan rule, replacing the earlier approach of running PTK inside the Client Spider job. This correctly separates exploration from attacking, the way ZAP is designed to work. The practical impact is significant: enabling the rule produces substantial new coverage of Firing Range categories that ZAP could not previously test, including DOM XSS triggered after JavaScript execution, client-side sinks, and runtime behaviours.

[Even More OWASP PTK Integration](/blog/2026-06-29-even-more-owasp-ptk-integration-with-zap/) followed at the end of the month with v0.7.0 of the add-on, which graduates PTK from alpha to **beta**. The active scan rule is now enabled by default - no explicit opt-in needed. PTK's SAST and IAST engines now run automatically during the Client Spider, adding browser-level passive coverage at no extra cost. A new **"Use recommended defaults"** option selects a curated PTK rule set designed to complement ZAP's existing rules rather than duplicate them. And the PTK active scan now uses `existingOnly`, so it revisits already-discovered Client Map nodes rather than re-crawling the application - exploration and attacking stay properly separated.

### Security Advisory: Viewstate Add-on Deserialization

On 24 June we published a [security advisory for the Viewstate add-on](/blog/2026-06-24-java-deserialization-vulnerability-in-zap-viewstate-addon/). An insecure Java deserialization vulnerability was reported via [Neo by ProjectDiscovery](https://neo.projectdiscovery.io/), triggered when a user viewed a response containing a malicious `javax.faces.ViewState` value. We patched it within 30 minutes of the report.

Neither the ZAP team nor the researcher were able to achieve RCE - ZAP's per-add-on classloaders and up-to-date dependencies provided effective defence-in-depth. The add-on is alpha and not included in any ZAP release by default, so exposure is limited. That said:

> [!IMPORTANT]
> **Please update all of your ZAP 2.17 add-ons now.** If you are on an older version of ZAP, please update to 2.17 - older versions will be vulnerable to Remote Code Execution.

### Client Spider in Docker Packaged Scans

The `zap-baseline.py` and `zap-full-scan.py` packaged scan scripts now accept an option to use the Client Spider instead of the AJAX Spider. This lets CI users opt in to PTK's passive (SAST/IAST) coverage as part of an existing pipeline today.

### Authenticated Requests via the ZAP API

The Core API can now send requests with a specified context and user, meaning ZAP's configured authentication credentials are applied. This is a clean addition that pipeline integrations will benefit from directly.

## Ongoing Work

### Client Side Integration

The [Client Side Integration](/docs/desktop/addons/client-side-integration/) add-on had its busiest month yet, with three releases (v0.27 through v0.29). The Client Spider gained ZAP mode support, fills text areas while crawling, shows its own icon in the Sites tree, handles adaptive waits by default, caps threads at half the available cores (max 8), and received a number of stability and GUI-freeze fixes. The bundled Chrome and Firefox extensions were updated to v0.2.0.

We are on track to recommend that everyone switch from the AJAX Spider to the Client Spider for modern (JavaScript-heavy) applications - watch for a dedicated blog post on that soon.

### Script Diagnostics

Script diagnostics support, introduced in May, continued to expand this month. Script stdout is now persisted in the ZAP session database and exposed in all of the traditional reports via a new `scriptdiagnosticsoutput` section. The Automation Framework Scripts add-on also gained `failureLevel` support on the run action, so you can control how script failures affect a job's outcome. A full blog post on script diagnostics is coming soon.

## New Contributors
A very warm welcome to the people who started to contribute to ZAP this month!

* [LucasParsy](https://github.com/LucasParsy)
* [cedricbu](https://github.com/cedricbu)
* [tejgokani](https://github.com/tejgokani)
* [Flintstqne](https://github.com/Flintstqne)
* [NabilKara](https://github.com/NabilKara)
* [gabiRoBt](https://github.com/gabiRoBt)
* [YameenShaikh07](https://github.com/YameenShaikh07)

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 5 authors have pushed 14 commits to main and 14 commits to all branches. On main, 29 files have changed and there have been 277 additions and 339 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 7 authors have pushed 97 commits to main and 97 commits to all branches. On main, 1,020 files have changed and there have been 19,824 additions and 5,079 deletions.

A total of [91 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2026-06+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In June 2026, we released updated versions of 18 add-ons:

##### Access Control Testing
**v13**  
Changed
- Formatted JavaScript files for consistency.

Fixed
- Discrepancy between Sites tree node name & Access Control recomputed node name made check silently fail and fallback to parent rule.

##### Active scanner rules
**v83**  
Changed
- Updated a reference link for the XSLT Injection scan rule.

##### Authentication Helper
**v0.40.0**  
Added
- Support for handling the Microsoft login "Permissions requested" user consent screen.

Fixed
- Handling of Ionic input elements, which can appear to not be displayed until they are clicked on.

##### Call Home
**v0.22.0**  
Removed
- Stop collecting "stats.auth.detect.session.*".

##### Client Side Integration
**v0.29.0**  
Changed
- Use new functionality from the browser extension for crawling.
- Fill text areas while crawling.

Fixed
- Spider should finish when existingOnly option used with an empty Client Map.

**v0.28.0**  
Added
- Client Spider existingOnly option, e.g. for scan rules.
 
Changed
- Reduce duplicated accesses while crawling.
- Use adaptive wait by default for page load and action waits while crawling.
- Default threads to 1/2 number of cores, max 8.
- Updated Chrome and Firefox extensions to v0.2.0.

Fixed
- Prevent temporary GUI hang when stopping the Client Spider.

**v0.27.0**  
Added
- Client Spider Options panel.
- Support for ZAP modes in the Client Spider.
- Show Client Spider icon in the Sites tree.
- More option API endpoints.

Changed
- Change the Client Spider to crawl through page components (e.g. links) to reduce full page reloads, improving support for SPAs.

Fixed
- Change the Client Spider to track all redirects while crawling.

##### Common Library
**v1.42.0**  
Added
- Add Sites tree context menus:
  - A "Get Info" that summarizes the selected node's subtree (total node count, most-recent addition, breakdown by source type) (Issue 3738).
  - An expand/collapse a node and all its children (previously provided by the TreeTools add-on).

Changed
- Update dependencies.
- Maintenance changes.

Fixed
- Prevent performance issues in the output tabs when showing lengthier messages.

##### Insights
**v0.5.0**  
Added
- Report data now exposes `stoppingInsight` to make it explicit which insight caused a stop. The built-in report templates render the stopping insight when present.

Changed
- The Automation Framework stop message now identifies the triggering insight (key, reason, site, value) instead of a generic string. The same details are appended to the daemon-mode exit reason.

##### Linux WebDrivers
**v205**  
Changed
- Update ChromeDriver to 149.0.7827.200.

**v204**  
Changed
- Update ChromeDriver to 149.0.7827.196.

**v203**  
Changed
- Update ChromeDriver to 149.0.7827.155.

**v202**  
Changed
- Update ChromeDriver to 149.0.7827.114.

**v201**  
Changed
- Update ChromeDriver to 149.0.7827.102.

**v200**  
Changed
- Update geckodriver to 0.37.0.

Removed
- The Linux 32-bit `geckodriver` binary is no longer provided, discontinued by upstream.

**v199**  
Changed
- Update ChromeDriver to 149.0.7827.53.

##### MCP Integration
**v0.2.0**  
Changed
- Content type to not include charset (some servers complain).

Fixed
- Handling of multiple SSE events on import.

##### Passive scanner rules
**v74**  
Changed
- Update dependency.
- Updated a reference link for the Sub Resource Integrity Attribute Missing scan rule.
- Remove reference link which is no longer available for the Script Served From Malicious Domain (polyfill) scan rule.
- Remove OWASP Top 10 Security Misconfiguration tags from the Modern Web Application scan rule, it only informs about the likely type of the website.

##### Quick Start
**v57**  
Added
- Option to select modern spider.

##### Retire.js
**v0.60.0**  
Changed
- Updated with upstream retire.js pattern changes.

**v0.59.0**  
Changed
- Updated with upstream retire.js pattern changes.

##### SOAP Support
**v31**  
Changed
- Update dependency.

Fixed
- Fix SOAP requests generated from some WSDLs being incomplete. Requests now correctly include all fields defined in the schema, and requests are no longer broken by certain characters in element or attribute names and values.

##### Selenium
**v15.51.0**  
Changed
- Update Selenium to version 4.45.0.

**v15.50.0**  
Changed
- Only collect browser's `console.log` when DEBUG level is set for `org.zaproxy.webdriver`, to avoid unnecessary work for common browser usage.

##### Sequence
**v10**  
Fixed
- Send requests using ZAP instead of default Zest HTTP client implementation.

##### ViewState
**v4**  
Changed
- Maintenance changes.
- Update minimum ZAP version to 2.17.0.
- Disable support for JSF.

##### Windows WebDrivers
**v206**  
Changed
- Update ChromeDriver to 149.0.7827.200.

**v205**  
Changed
- Update ChromeDriver to 149.0.7827.196.

**v204**  
Changed
- Update ChromeDriver to 149.0.7827.155.

**v203**  
Changed
- Update ChromeDriver to 149.0.7827.114.

**v202**  
Changed
- Update ChromeDriver to 149.0.7827.102.

**v201**  
Changed
- Update geckodriver to 0.37.0.

**v200**  
Changed
- Update ChromeDriver to 149.0.7827.53.

##### macOS WebDrivers
**v205**  
Changed
- Update ChromeDriver to 149.0.7827.200.

**v204**  
Changed
- Update ChromeDriver to 149.0.7827.196.

**v203**  
Changed
- Update ChromeDriver to 149.0.7827.155.

**v202**  
Changed
- Update ChromeDriver to 149.0.7827.114.

**v201**  
Changed
- Update ChromeDriver to 149.0.7827.102.

**v200**  
Changed
- Update geckodriver to 0.37.0.

**v199**  
Changed
- Update ChromeDriver to 149.0.7827.53.


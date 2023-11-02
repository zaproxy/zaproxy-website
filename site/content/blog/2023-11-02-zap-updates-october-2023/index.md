---
title: "ZAP Updates - October 2023"
summary: >
  A new ZAP version, a CLI feature to do quick reconnaissance, and more!
images:
- https://www.zaproxy.org/blog/2023-11-02-zap-updates-october-2023/images/zapbot-monthly-updates-social.png
type: post
tags:
- blog
- update
date: "2023-11-02"
authors:
- akshath
---

## Highlights

ZAP 2.14.0 was released this month, which added support for Host Header Manipulation, API File Transfers, Graal JS Add-on Access, Postman collections, SBOMs, and more. Read the [full blog post](/blog/2023-10-12-zap-2-14-0/) to find out more.

ZAPit was included with the 2.14.0 release, and Simon and Yiannis recorded a video about it as part of the ZAP Chat Video series. The video is linked in the [blog post about ZAPit](/blog/2023-10-18-zapit/).

The Map Local add-on was also published to the ZAP Marketplace this month. Read the [blog post by Andrey](/blog/2023-10-31-maplocal-add-on/) on it.

Also, don't forget to fill in the [ZAP Development Focus 2023](https://docs.google.com/forms/d/e/1FAIpQLSeslne7nAjiK-oCckMXU39ESa47QjK08p4bT63O2T6EDzR05g/viewform?usp=sf_link) Questionnaire, if you have not already done so!

## Ongoing Work

### Modern Web App Handling
Some exciting work is being done around ZAP's handling of modern web apps, using the Client Add-on and the ZAP Browser Extension. Expect a blog post and a video about it soon!

### Improved Automation Capabilities
We are working on improving ZAP's automation capabilities, which includes the ZAP GitHub actions and the automation framework.

### Usability Enhancements
We have started discussions around improving the usability of the ZAP GUI and minor enhancements are already on their way.

## Website Updates

56 new pages were added to the website in October.

* Docs: 47 pages were generated automatically from the SBOMs of released add-ons. These pages are linked from the [Software Bill of Materials](/docs/sbom/) page which was also added.
* Docs: [Release 2.14.0](/docs/desktop/releases/2.14.0/)
* Docs: [SBOM](/docs/desktop/start/features/sbom)
* Docs: [Script Console Options](/docs/desktop/addons/script-console/options)
* Docs: [Client Side Integration - AJAX Spider Enhancement](/docs/desktop/addons/client-side-integration/ajax-scan/)
* Blog: [ZAP Updates - September 2023](/blog/2023-10-02-zap-updates-september-2023/)
* Blog: [ZAP 2.14.0](/blog/2023-10-12-zap-2-14-0/)
* Blog: [ZAPit](/blog/2023-10-18-zapit/)
* Blog: [Map Local Add-on](/blog/2023-10-31-maplocal-add-on/)

The following pages had significant changes:

* Evangelists: Rafał Krząpa was added as a [ZAP Evangelist](/evangelists/)

## New Contributors

A very warm welcome to the people who started to contribute to ZAP this month!

* [@drighty](https://github.com/drighty)

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 6 authors have pushed 32 commits to main and 32 commits to all branches. On main, 93 files have changed and there have been 3,695 additions and 1,758 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 8 authors have pushed 96 commits to main and 96 commits to all branches. On main, 1,426 files have changed and there have been 16,021 additions and 6,174 deletions.

A total of [144 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2023-10+is%3Amerged&type=pullrequests) on the ZAP repos.


## Released add-ons - Full Changelog
In October 2023, we released updated versions of 47 add-ons:

##### Active scanner rules
**v58**  
Changed
- Update minimum ZAP version to 2.14.0.

##### Ajax Spider
**v23.17.0**  
Changed
- Update minimum ZAP version to 2.14.0.

Fixed
- Add URL to start event.

##### Alert Filters
**v18**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.
- Depend on newer version of Automation Framework add-on for the automation job (Related to Issue 7961).

##### Authentication Helper
**v0.10.0**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.

##### Automation Framework
**v0.33.0**  
Changed
- Update minimum ZAP version to 2.14.0.

**v0.32.0**  
Fixed
- Correct output of array values set to the jobs.

##### Call Home
**v0.9.0**  
Changed
- Add API stats to telemetry.

**v0.8.0**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.
- Add client stats to telemetry.
- Add config stats to telemetry.

##### Client Side Integration
**v0.4.0**  
Added
- Note about custom containers in the help.
- Client Map context menu items.

Changed
- Updated the Chrome extension to v0.0.7.

Fixed
- Cases where the Firefox profile was not added successfully via Selenium.
- Reworked the Client Map to correctly handle parameters and more edge cases.

**v0.3.0**  
Changed
- Update minimum ZAP version to 2.14.0.
- Updated the Firefox extension to v0.0.7.

Added
- AJAX spider enhancement.
- More help pages.

Fixed
- Do not show ZAP API calls.
- Missing 'Cookies' translation.

##### Common Library
**v1.18.0**  
Changed
- Update minimum ZAP version to 2.14.0.
- Add solution to 'Brute Forcing Log-in Credentials', 'Brute Forcing Session Identifiers' and 'Brute Forcing Directories and Files' vulnerabilities (Issue 8056).
- Update vulnerabilities' CWE references to use HTTPS scheme.

##### DOM XSS Active scanner rule
**v18**  
Changed
- Update minimum ZAP version to 2.14.0.

##### Database
**v0.3.0**  
Changed
- Update minimum ZAP version to 2.14.0.

##### Diff
**v14**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.

##### Directory List v1.0
**v7**  
Changed
- Update minimum ZAP version to 2.14.0.

##### Encoder
**v1.4.0**  
Changed
- Update minimum ZAP version to 2.14.0.

##### Forced Browse
**v15**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.

##### Fuzzer
**v13.12.0**  
Changed
- Update minimum ZAP version to 2.14.0.

**v13.11.0**  
Changed
- Maintenance changes.

Fixed
- Show actual contents of the message after edits (Issue 7947).

##### Getting Started with ZAP Guide
**v16**  
Changed
- Update Getting Started Guide.
- Updated for 2.14.0.

##### GraalVM JavaScript
**v0.5.0**  
Changed
- Update minimum ZAP version to 2.14.0.
- Update Graal JavaScript engine.

##### GraphQL Support
**v0.20.0**  
Added
- Fingerprinting check for the Absinthe GraphQL engine.

Changed
- Update minimum ZAP version to 2.14.0.
- Dependency updates.

##### Import/Export
**v0.7.0**  
Changed
- Update minimum ZAP version to 2.14.0.
- Depend on newer versions of Automation Framework and Common Library add-ons (Related to Issue 7961).

##### Invoke Applications
**v14**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.

##### Linux WebDrivers
**v65**  
Changed
- Update ChromeDriver to 119.0.6045.105.

**v64**  
Changed
- Update ChromeDriver to 118.0.5993.70.
- Update minimum ZAP version to 2.14.0.

**v63**  
Changed
- Update ChromeDriver to 117.0.5938.149.

##### MacOS WebDrivers
**v65**  
Changed
- Update ChromeDriver to 119.0.6045.105.

**v64**  
Changed
- Update ChromeDriver to 118.0.5993.70.
- Update minimum ZAP version to 2.14.0.

**v63**  
Changed
- Update ChromeDriver to 117.0.5938.149.

##### Network
**v0.12.0**  
Added
- Allow to completely disable host header normalization.

Changed
- Update minimum ZAP version to 2.14.0.
- Update default user-agents.
- Update dependencies.

Fixed
- Do not initialize the view when failed to start the main proxy in `cmd` and `daemon` modes.

##### OAST Support
**v0.17.0**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.

##### Online menus
**v12**  
Changed
- Update minimum ZAP version to 2.14.0.

##### OpenAPI Support
**v38**  
Changed
- Dependency updates.

Fixed
- An issue in the headers generator which might lead to content-type header being incorrectly set.

**v37**  
Changed
- Update minimum ZAP version to 2.14.0.

##### Passive scanner rules
**v52**  
Fixed
- The CSRF Countermeasures scan rule now skips responses that are not HTML (Issue 7890).
- A potential NullPointerException when a CSP declared via META tag was invalid.

Changed
- Update minimum ZAP version to 2.14.0.
- CSP scan rule: Add deprecation warning for inclusion of prefetch-src (Issue 8077).

##### Postman Support
**v0.2.0**  
Changed
- Update minimum ZAP version to 2.14.0.

**v0.1.0**  
Added
- Support collection JSON variables.

##### Quick Start
**v43**  
Changed
- Update minimum ZAP version to 2.14.0.

**v42**  
Changed
- ZAPit: carry on even if non success code returned.
- ZAPit: scan HTTP and HTTPS if protocol not specified.

##### Replacer
**v15**  
Changed
- Update minimum ZAP version to 2.14.0.

##### Report Generation
**v0.26.0**  
Changed
- Update minimum ZAP version to 2.14.0.

**v0.25.0**  
Changed
- Depend on newer versions of Automation Framework and Common Library add-ons (Related to Issue 7961).
- Update JavaDoc links to always link to latest version of ZAP.

Fixed
- Fix error when generating the High Level Report Sample with an alert that has an empty description (Issue 8071).

##### Requester
**v7.4.0**  
Added
- Option to manipulate Host header.

Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.

##### Retest
**v0.8.0**  
Changed
- Update minimum ZAP version to 2.14.0.

##### Retire.js
**v0.26.0**  
Changed
- Update minimum ZAP version to 2.14.0.
- Updated with upstream retire.js pattern changes.

##### Reveal
**v7**  
Changed
- Update minimum ZAP version to 2.14.0.

##### Revisit
**v5**  
Changed
- Maintenance changes.
- Update minimum ZAP version to 2.14.0.

Fixed
- Prevent exception when processing history after deleting messages.

##### SOAP Support
**v20**  
Changed
- Update minimum ZAP version to 2.14.0.

##### Script Console
**v42**  
Changed
- Update minimum ZAP version to 2.14.0.

**v41**  
Added
- Allow selecting a default behaviour when a script in the console changes on disk (Issues 5463, 7582). The allowed
  options are "Ask Each Time", "Keep Script", and "Replace Script".

Changed
- Update extender template scripts to also work with Graal.js engine.

##### Selenium
**v15.15.0**  
Changed
- Update Selenium to version 4.14.0.
- Update minimum ZAP version to 2.14.0.

##### Sequence
**v7**  
Changed
- Maintenance changes.
- Update minimum ZAP version to 2.14.0.

Fixed
- Prevent exception if no display (Issue 3978).

##### Spider
**v0.7.0**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.

##### Tips and Tricks
**v12**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.

##### Value Generator
**v6.5.0**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.
- Tweak help for proper rendering in the website.

##### Wappalyzer - Technology Detection
**v21.26.0**  
Changed
- Updated with last AliasIO/Wappalyzer icon and pattern changes.
- Updated with first set of icon and pattern changes from enthec/webappanalyzer.
- Help entries are now identified as 'Technology Detection - Wappalyzer' to simplify searching/filtering.

**v21.25.0**  
Changed
- Update minimum ZAP version to 2.14.0.
- Moved from Apache batik libraries to weisJ's jsvg library (thus reducing the size of the add-on).

##### WebSockets
**v30**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.

##### Windows WebDrivers
**v65**  
Changed
- Update ChromeDriver to 119.0.6045.105.

**v64**  
Changed
- Update ChromeDriver to 118.0.5993.70.
- Update minimum ZAP version to 2.14.0.

**v63**  
Changed
- Update ChromeDriver to 117.0.5938.149.

##### Zest - Graphical Security Scripting Language
**v42**  
Changed
- Update minimum ZAP version to 2.14.0.
- Update Zest library to 0.20.0:
  - Update Selenium to version 4.14.0.

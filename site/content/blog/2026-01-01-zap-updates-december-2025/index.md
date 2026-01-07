---
title: "ZAP Updates - December 2025"
summary: >
  TODO
images:
- https://www.zaproxy.org/blog/2026-01-01-zap-updates-december-2025/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2026-01-01"
authors:
- TODO
---

## Highlights
TODO

## Ongoing Work
TODO

## New Contributors
A very warm welcome to the people who started to contribute to ZAP this month!

TODO: Add from https://github.com/zaproxy/zap-core-help/pulls?q=is%3Apr+credits+is%3Aclosed

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 7 authors have pushed 23 commits to main and 23 commits to all branches. On main, 49 files have changed and there have been 609 additions and 529 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 9 authors have pushed 95 commits to main and 95 commits to all branches. On main, 3,380 files have changed and there have been 107,658 additions and 15,118 deletions.

A total of [94 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2025-12+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In December 2025, we released updated versions of 55 add-ons:

##### Access Control Testing
**v11**  
Changed
- Update minimum ZAP version to 2.17.0.
- Maintenance changes.

##### Active scanner rules
**v79**  
Changed
- Update dependency.

Removed
- The following scan rule was removed, having been demoted to Alpha:
  - SQL Injection - SQLite (Time Based)

**v78**  
Added
- The following scan rules were added, having been promoted from beta:
  - Exponential Entity Expansion (Billion Laughs Attack)
  - HTTP Only Site
  - HTTPS Content Available via HTTP
  - ShellShock - CVE-2014-6271

Changed
- Update dependency.
- Update minimum ZAP version to 2.17.0.

**v77**  
Fixed
- React2Shell multipart boundries.

**v76**  
Added
- Remote Code Execution (React2Shell) Scan Rule (CVE-2025-55182, CVE-2025-66478)

Changed
- The External Redirect scan rule has been updated to account for potential false positives involving JavaScript comments.

##### Active scanner rules (alpha)
**v55**  
Added
- The following scan rule was added, having been demoted from Release:
  - SQL Injection - SQLite (Time Based)

**v54**  
Changed
- Update minimum ZAP version to 2.17.0.
- Address redirections in references.

Removed
- The following scan rules were removed, having been promoted to Beta:
  - NoSQL Injection - MongoDB
  - NoSQL Injection - MongoDB (Time Based)

##### Active scanner rules (beta)
**v64**  
Added
- The following scan rules were added, having been promoted from Alpha:
  - NoSQL Injection - MongoDB
  - NoSQL Injection - MongoDB (Time Based)

Changed
- Update minimum ZAP version to 2.17.0.

Removed
- The following scan rules were removed, having been promoted to Release:
  - Exponential Entity Expansion (Billion Laughs Attack)
  - HTTP Only Site
  - HTTPS Content Available via HTTP
  - ShellShock - CVE-2014-6271

##### Ajax Spider
**v23.29.0**  
Changed
- Update minimum ZAP version to 2.17.0.

**v23.28.0**  
Fixed
- Correct bundled logging dependencies.

##### Alert Filters
**v26**  
Changed
- Update the automation framework template and help to include missing fields (`ruleName` and `methods`).
- Update minimum ZAP version to 2.17.0.

##### Authentication Helper
**v0.34.0**  
Changed
- Update minimum ZAP version to 2.17.0.

**v0.33.0**  
Added
- Handle account selection and TOTP step in Microsoft login.
- Allow to include domains completely and partially out of scope in the Authentication Report.

Changed
- Fail the Microsoft login if not able to perform all the expected steps.
- Track GWT headers.
- Handle additional exceptions when processing JSON authentication components.
- Improved performance of the Session Detection scan rule.

Fixed
- Do not include known authentication providers in context.
- Ensure all domains accessed during authentication are included in the Authentication Report.

##### Automation Framework
**v0.58.0**  
Added
- Support for a "soft" stop which allows "always run" jobs to run.

Changed
- Update minimum ZAP version to 2.17.0.

**v0.57.0**  
Added
- Allow to specify the defaults for the alert threshold and attack strength of the active scan policy.

Changed
- Maintenance changes.
- Make the "pass" output of Monitor Tests consistent with the "fail" output.

Fixed
- Restore default standard output on absent `env` `parameters`.
- Delay Scan Policy validation to runtime phase in the `activeScan` job, the Scan Policy might be created dynamically by other jobs.

##### Call Home
**v0.20.0**  
Changed
- Update minimum ZAP version to 2.17.0.

##### Client Side Integration
**v0.20.0**  
Changed
- Update the automation framework template to include missing field (`scopeCheck`).
- Update minimum ZAP version to 2.17.0.
- Updated Chrome and Firefox extensions to v0.1.8.

**v0.19.0**  
Changed
- Updated Chrome and Firefox extensions to v0.1.7.
- Bundle Chrome extension unpacked due changes in Chrome.

##### Common Library
**v1.39.0**  
Changed
- Update minimum ZAP version to 2.17.0.
- Update dependencies.

##### Custom Payloads
**v0.16.0**  
Changed
- Update minimum ZAP version to 2.17.0.

##### DOM XSS Active scanner rule
**v23**  
Changed
- Update minimum ZAP version to 2.17.0.

##### Database
**v0.9.0**  
Changed
- Update minimum ZAP version to 2.17.0.
- Update dependencies.

##### Diff
**v18**  
Changed
- Update minimum ZAP version to 2.17.0.

##### Encoder
**v1.8.0**  
Changed
- Update minimum ZAP version to 2.17.0.

##### Forced Browse
**v20**  
Changed
- Update minimum ZAP version to 2.17.0.

##### Foxhound ZAP Add-on
**v0.1.0**  
Added
- First addition of Foxhound files

##### Getting Started with ZAP Guide
**v20**  
Changed
- Update minimum ZAP version to 2.17.0.
- Update Getting Started Guide for 2.17.0.

##### GraalVM JavaScript
**v0.12.0**  
Changed
- Update minimum ZAP version to 2.17.0.

##### GraphQL Support
**v0.29.0**  
Added
- Statistics for GraphQL schema imports and message additions.

Changed
- Update minimum ZAP version to 2.17.0.
- Dependency updates.

##### Groovy Support
**v4.0.0**  
Added
- Document the engine name in the help page.

Changed
- Update minimum ZAP version to 2.17.0.
- Update Groovy from 3.0.14 to 5.0.3.  
  Existing Groovy scripts should work without issues, 
  but if you encounter problems, please refer to the following.
  - [Groovy 4 Release Notes](https://groovy-lang.org/releasenotes/groovy-4.0.html)
  - [Groovy 5 Release Notes](https://groovy-lang.org/releasenotes/groovy-5.0.html#Groovy5.0-breaking)
- Update script templates:
  - authentication/AuthenticationDefaultTemplate.groovy - remove outdated example code.
  - httpsender/HttpSenderDefaultTemplate.groovy - update documentation.
  - encode-decode/EncodeDecodeDefaultTemplate.groovy - remove the `final` modifier from the `test` field.
  - httpfuzzerprocessor/FuzzerHttpProcessorDefaultTemplate.groovy - remove the `final` modifier from the `count` field.  
    **NOTE:** The last two changes were required due to the Groovy update.

##### Import/Export
**v0.16.0**  
Changed
- Update minimum ZAP version to 2.17.0.
- Update dependencies.
- Depend on newer version of Common Library add-on.

##### Insights
**v0.1.0**  
Fixed
- Address concurrency issue while generating report with insights.

**v0.0.1**  
- First version.

##### Invoke Applications
**v17**  
Changed
- Update minimum ZAP version to 2.17.0.

##### Linux WebDrivers
**v171**  
Changed
- Update ChromeDriver to 143.0.7499.169.

**v170**  
Changed
- Update ChromeDriver to 143.0.7499.146.

**v169**  
Changed
- Update ChromeDriver to 143.0.7499.42.
- Update minimum ZAP version to 2.17.0.

**v168**  
Changed
- Update ChromeDriver to 143.0.7499.40.

##### Network
**v0.25.0**  
Changed
- Update minimum ZAP version to 2.17.0.
- Update dependencies.

##### OAST Support
**v0.24.0**  
Changed
- Update minimum ZAP version to 2.17.0.

##### Online menus
**v15**  
Changed
- Update minimum ZAP version to 2.17.0.

##### OpenAPI Support
**v48**  
Changed
- Dependency updates.
- Update minimum ZAP version to 2.17.0.

##### Passive Scanner
**v0.6.0**  
Changed
- Migrate handling of Alerts raised statistics from the core.
- Update minimum ZAP version to 2.17.0.

Removed
- Dropped help references to ZAP in Ten videos which are no longer available.

##### Passive scanner rules
**v70**  
Added
- The following scan rules were added, having been promoted from Beta:
  - In Page Banner Information Leak
  - Java Serialization Object
  - Sub Resource Integrity Attribute Missing

Changed
- Update minimum ZAP version to 2.17.0.
- Address redirection in a reference.
- Update dependency.

##### Passive scanner rules (alpha)
**v48**  
Changed
- Update minimum ZAP version to 2.17.0.

##### Passive scanner rules (beta)
**v48**  
Changed
- Update minimum ZAP version to 2.17.0.

Removed
- The following scan rules were removed, having been promoted to Beta:
  - In Page Banner Information Leak
  - Java Serialization Object
  - Sub Resource Integrity Attribute Missing

##### Postman Support
**v0.9.0**  
Changed
- Update minimum ZAP version to 2.17.0.

##### Quick Start
**v53**  
Changed
- Update minimum ZAP version to 2.17.0.

##### Replacer
**v21**  
Changed
- Update minimum ZAP version to 2.17.0.
- Maintenance changes.

##### Report Generation
**v0.43.0**  
Added
- Insights to the reports.

Changed
- Update the automation framework `outputSummary` template to include missing field (`rules`).
- Update minimum ZAP version to 2.17.0.

##### Requester
**v7.9.0**  
Changed
- Update minimum ZAP version to 2.17.0.
- Adjusted and internationalized the text in some exceptions/warning dialogs to use multiple lines and thus be more clear.

##### Retire.js
**v0.52.0**  
Changed
- Updated with upstream retire.js pattern changes.

**v0.51.0**  
Changed
- Updated with upstream retire.js pattern changes.

##### SAML Support
**v11**  
Changed
- Update minimum ZAP version to 2.17.0.
- Update dependency.
- Maintenance changes.

Fixed
- Error logs to always include stack trace.

##### SOAP Support
**v29**  
Changed
- Update minimum ZAP version to 2.17.0.
- Update dependencies.

##### Scan Policies
**v0.7.0**  
Changed
- Update minimum ZAP version to 2.17.0.
- Allow to override the default alert threshold of the bundled policies.
- Updated based on Rules' Policy Tag assignments.

##### Script Console
**v45.17.0**  
Changed
- Update the automation framework template to include missing field (`inline`).
- Do not display scripts added through the Automation Framework.
- Update minimum ZAP version to 2.17.0.

**v45.16.0**  
Fixed
- Script scan rules were not using the attack strength and alert threshold from active scan policies.

Changed
- Update dependency.

##### Selenium
**v15.43.0**  
Changed
- Update minimum ZAP version to 2.17.0.
- Update Selenium to version 4.39.0.

**v15.42.0**  
Changed
- Update Selenium to version 4.38.0.

Fixed
- Restore loading of Chrome extensions, which now have to be unpacked/folders due changes in Chrome.

##### Sequence
**v9**  
Changed
- Update minimum ZAP version to 2.17.0.
- Allow to override the default alert threshold of the bundled policy.
- Maintenance changes.

##### Spider
**v0.18.0**  
Changed
- Update minimum ZAP version to 2.17.0.

Removed
- Dropped help references to ZAP in Ten videos which are no longer available.

##### Technology Detection
**v21.52.0**  
Changed
- Updated with enthec upstream icon and pattern changes.
- Adjust warnings logged when a pattern incorrectly contains Confidence or Version tags, use just one punctuation character.

**v21.51.0**  
Added
- A help page for the tech-detection (`wappalyzer`) automation framework job.

Changed
- Update minimum ZAP version to 2.17.0.

**v21.50.0**  
Changed
- Updated with enthec upstream icon and pattern changes.

##### Tips and Tricks
**v16**  
Changed
- Update minimum ZAP version to 2.17.0.

##### Token Generation and Analysis
**v16**  
Changed
- Maintenance changes.
- Update minimum ZAP version to 2.17.0.

##### Value Generator
**v6.8.0**  
Changed
- Update minimum ZAP version to 2.17.0.

##### WebSockets
**v35**  
Changed
- Update minimum ZAP version to 2.17.0.

##### Windows WebDrivers
**v172**  
Changed
- Update ChromeDriver to 143.0.7499.169.

**v171**  
Changed
- Update ChromeDriver to 143.0.7499.146.

**v170**  
Changed
- Update ChromeDriver to 143.0.7499.42.
- Update minimum ZAP version to 2.17.0.

**v169**  
Changed
- Update ChromeDriver to 143.0.7499.40.

##### Zest - Graphical Security Scripting Language
**v48.11.0**  
Changed
- Update minimum ZAP version to 2.17.0.
- Use lowercase credential parameters in the Authentication default template.
- Update Zest library to 0.33.0:
  - Support for script level `statementDelay`.
  - Update Selenium to version 4.39.0.

Fixed
- Address deadlock when adding scripts.

##### macOS WebDrivers
**v171**  
Changed
- Update ChromeDriver to 143.0.7499.169.

**v170**  
Changed
- Update ChromeDriver to 143.0.7499.146.

**v169**  
Changed
- Update ChromeDriver to 143.0.7499.42.
- Update minimum ZAP version to 2.17.0.

**v168**  
Changed
- Update ChromeDriver to 143.0.7499.40.
- Change case of macOS (Issue 9157).


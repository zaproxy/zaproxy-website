---
title: "ZAP Updates - March 2024"
summary: >
  ZAP funding, the Open Source Fellowship, ZAProxy Ltd, script scan rules as first class scan rules.
images:
- https://www.zaproxy.org/blog/2024-04-02-zap-updates-march-2024/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2024-04-02"
authors:
- simon
---

## Highlights

### The Open Source Fellowship

In the [ZAP Funding and the Open Source Fellowship](/blog/2024-03-13-zap-funding-and-the-open-source-fellowship/)
blog post we announced that ZAP is now supported by the [Crash Override](https://crashoverride.com/?zap=web) 
Open Source Fellowship.

This is a huge win for the ZAP project and saved it from potential closure.

The blog also explains why we still need to focus on raising money for ZAP in order to secure its future.

### ZAProxy Ltd

In related news, we have started a new company dedicated to raise money for ZAP development - [ZAProxy Ltd](https://www.zaproxy.com).
This is a non profit company based in the UK.

For details of the commercial support options available see the [Support](/support) page.
All of the money raised for any of these services will help fund ZAP development.

### Full Support for Script Scan Rules

Some significant changes have been made which will allow script scan rules to be treated as "first class citizens".
This means that they can be treated in the same way as Java based scan rules and can be individually referenced in
active scan policies and the passive scan rule configuration.

Expect a blog post soon which will explain everything!

### Authentication Decision tree

A new authentication guide, in the form of a decision tree, was made available via https://github.com/psiinon/zap-auth-dt/wiki

The guide is now being migrated to this website.

## Ongoing Work

### Improved Automation Capabilities

The new GitHub Action which will support the [Automation Framework](/docs/automate/automation-framework/)
is progressing well and will hopefully be released in April.

## Website Updates

The following new pages were added to the website in January.

* Blog: [Unveiling the ZAP User Personas](/blog/2024-03-11-user-personas-poll-results/)
* Blog: [ZAP Funding and the Open Source Fellowship](/blog/2024-03-13-zap-funding-and-the-open-source-fellowship/)
* Blog: [Support Changes](/blog/2024-03-18-support-changes/)

## New Contributors

A very warm welcome to the people who started to contribute to ZAP this month!

* [Mikhailevtikhov](https://github.com/mikhailevtikhov)
* [Félix Martel (lixtelnis)](https://github.com/FelixMartel)
* [GMX](https://github.com/peterbro1)
* [Jackdvd](https://github.com/jackdvd)
* [Occupyhabit](https://github.com/occupyhabit)

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 6 authors have pushed 16 commits to main and 17 commits to all branches. On main, 35 files have changed and there have been 591 additions and 267 deletions. 

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 10 authors have pushed 55 commits to main and 55 commits to all branches. On main, 262 files have changed and there have been 7,081 additions and 813 deletions.  

A total of [71 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2024-03+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released add-ons - Full Changelog
In March 2024, we released updated versions of 22 add-ons:

##### Access Control Testing
**v10**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.
- Link website alert pages and help (Issues 8189).
- The results table now presents the same context menu as other similar tables (History, Search, etc) facilitating copying URLs, etc (Issue 8356).
- Now has a table export button (Issue 8356).
- Adjusted some labels/titles to use title caps (Issue 2000 & 8356).

Fixed
- Now uses the General Font (Issue 8356), as set in the Display options.

##### Active scanner rules
**v65**  
Changed
- Change link to use HTTPS in other info of SQL Injection - SQLite (Issue 8262).

**v64**  
Changed
- The following scan rules now include example alert functionality for documentation generation purposes (Issue 6119):
    - Source Code Disclosure - CVE-2012-1823
    - Remote Code Execution - CVE-2012-1823
    - Server Side Include
    - Cross Site Scripting (Reflected)
- The Alerts from the Remote Code Execution - CVE-2012-1823 scan rule no longer have evidence duplicated in the Other Info field.
- The GET for POST scan rule now uses a different comparison mechanism which should be more tolerant of unrelated response differences.

##### Active scanner rules (alpha)
**v47**  
Changed
- References for the LDAP Injection scan rule's Alerts were updated (Issue 8262).

##### Active scanner rules (beta)
**v53**  
Changed
- Change links to use HTTPS in other info of Insecure HTTP Method (Issue 8262).

**v52**  
Changed
- Updated reference for scan rule: Possible Username Enumeration (Issue 8262)
- Cookie Slack Detector scan rule now has a more specific CWE.
- Possible Username Enumeration scan rule now includes CWE-204 as a reference link.
- The following scan rules now include example alert functionality for documentation generation purposes (Issue 6119):
    - Relative Path Confusion
    - Integer Overflow Error

Removed 
- Removed HTTP only reference for scan rule: Integer Overflow Error (Issue 8262)

##### Alert Filters
**v20**  
Added
- Video link in help for Automation Framework job.

Changed
- Reword label in the automation job to prevent any confusion between the Alert Filters and the Alerts.
- Maintenance changes.

##### Automation Framework
**v0.37.0**  
Changed
- Allow to use variables composed of multiple variables.

**v0.36.0**  
Added
- Support for upstream proxy in environment (Issue 8360).

Changed
- Maintenance changes.
- Cut down env data when generating min template.

Fixed
- Correct parsing of attack strength and alert threshold in some locales.

##### Call Home
**v0.11.0**  
Changed
- Add UI stats to telemetry.

##### Common Library
**v1.23.0**  
Added
- Support for menu weights (Issue 8369)
- Add solution to HTTP Response Smuggling alert (Issue 8056)

Changed
- Maintenance changes.

##### Linux WebDrivers
**v77**  
Changed
- Update ChromeDriver to 123.0.6312.86.

**v76**  
Changed
- Update ChromeDriver to 123.0.6312.58.

**v75**  
Changed
- Update ChromeDriver to 122.0.6261.128.

**v74**  
Changed
- Update ChromeDriver to 122.0.6261.111.

##### MacOS WebDrivers
**v77**  
Changed
- Update ChromeDriver to 123.0.6312.86.

**v76**  
Changed
- Update ChromeDriver to 123.0.6312.58.

**v75**  
Changed
- Update ChromeDriver to 122.0.6261.128.

**v74**  
Changed
- Update ChromeDriver to 122.0.6261.111.

##### Network
**v0.15.0**  
Added
- Methods for accessing the upstream proxy.

##### Passive scanner rules
**v57**  
Changed
- Use of HTTP for example URLs in the descriptions or other info details for the following rules have been updated to HTTPS (Issue 8262):
    - Cookie Poisoning
    - Open Redirect
    - X-Debug-Token Information Leak

##### Postman Support
**v0.3.0**  
Added
- Automation support.

Fixed
- Correct deserialization of item groups (Issue 8400).

##### Quick Start
**v45**  
Changed
- Tweaked OSF sponsorship links.

**v44**  
Added
- Support panel.

Changed
- Maintenance changes.
- Dropped "to Clipboard" from ZAP copy menu items and buttons (Issue 8179).
- Panels to include OSF image and link.

##### Report Generation
**v0.31.0**  
Changed
- Tweaked OSF sponsorship links.

Fixed
- Handle alerts without HTTP message gracefully (Issue 6880).
- More issues with illegal XML characters in pdf reports (Issue 8330).

**v0.30.0**  
Changed
- Added OSF sponsorship line to reports.

##### Requester
**v7.5.0**  
Added 
- Button to lowercase request header names (Issue 8176).
- Support for menu weights (Issue 8369)

Changed
- Manual request dialog to be opened with selected message on CTRL-M (Issue 8365)
- Manual request dialog to be used instead of a separate Resend dialog.

##### Retire.js
**v0.34.0**  
Changed
- Updated with upstream retire.js pattern changes.

**v0.33.0**  
Changed
- Updated with upstream retire.js pattern changes.

Fixed
- Version matching was improved to address some false positives (Issue 8384 & 8398).

**v0.32.0**  
Changed
- Updated with upstream retire.js pattern changes.

##### SOAP Support
**v22**  
Added
- Video link in help for Automation Framework job.

Changed
- Maintenance changes.
- Link website alert pages and help (Issue 8189).
- Updated Alerts' reference links (Issue 8262).

##### Script Console
**v45.1.0**  
Added
- Support for menu weights (Issue 8369)
Fixed
- Propagate script errors to the Automation Framework when running them.

##### Selenium
**v15.21.0**  
Changed
- Update Selenium to version 4.19.1.

**v15.20.0**  
Added
- Support for menu weights (Issue 8369).

Changed
- Update Selenium to version 4.19.0.
- Update HtmlUnit to major version 3.

Fixed
- A typo on the intro page in the add-on's help.

##### Wappalyzer - Technology Detection
**v21.33.0**  
Changed
- Updated with enthec upstream icon and pattern changes.

**v21.32.0**  
Changed
- Updated with enthec upstream icon and pattern changes.
- Maintenance changes.

##### Windows WebDrivers
**v77**  
Changed
- Update ChromeDriver to 123.0.6312.86.

**v76**  
Changed
- Update ChromeDriver to 123.0.6312.58.

**v75**  
Changed
- Update ChromeDriver to 122.0.6261.128.

**v74**  
Changed
- Update ChromeDriver to 122.0.6261.111.

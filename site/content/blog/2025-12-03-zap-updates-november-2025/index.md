---
title: "ZAP Updates - November 2025"
summary: >
  2.17.0 is coming soon, along with Insights and fixes for some issues that caused ZAP to log 50 million errors in one day!
images:
- https://www.zaproxy.org/blog/2025-12-03-zap-updates-november-2025/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2025-12-03"
authors:
- simon
---

## Highlights

### ZAP 2.17.0 - Coming Very Soon

Last week we announced that the weekly release [w2025-11-24](https://github.com/zaproxy/zaproxy/releases/tag/w2025-11-24) was the first 2.17.0 Release Candidate (RC)!

Todays [w2025-12-03](https://github.com/zaproxy/zaproxy/releases/tag/w2025-12-03) weekly release is the second RC :grin:

Your feedback really helps improve the quality of our releases, so please keep it coming!

### Insights

ZAP 2.17.0 will include a new [Insights](/docs/desktop/addons/insights/) add-on, which is (of course) included in the RC.

Insights represent information that is likely to be very relevant to you, but which is not related to vulnerabilities, or potentially even related to the application in question.

Insights tell you more about your applications, about the effectiveness of a scan, and can even stop a scan early if significant problems are identified.

### 50 Million Errors in One Day?!

Last week we also reported how we found out that ZAP logged [50 Million Errors in One Day](/blog/2025-11-25-50-million-errors-in-one-day/) and explained how the main issues will be fixed in 2.17.0.

### Enhancing ZAP with AI

We also shared a guest blog post from [Telmon Maluleka](https://twitter.com/DEOXYRIBOSE404) who explained 
how he is [Enhancing ZAP with AI for Bug Bounty Hunting](/blog/2025-11-28-enhancing-zap-with-ai-for-bug-bounty-hunting/).

If you have any ZAP related news that you would like to share then please get in touch!

## New Contributors
A very warm welcome to the people who started to contribute to ZAP this month!

* [bananabr](https://github.com/bananabr)
* [j-sv](https://github.com/j-sv)
* [LakshmiSHR](https://github.com/LakshmiSHR)

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 7 authors have pushed 28 commits to main and 28 commits to all branches. On main, 70 files have changed and there have been 1,371 additions and 247 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 7 authors have pushed 79 commits to main and 79 commits to all branches. On main, 1,573 files have changed and there have been 11,712 additions and 17,390 deletions.

A total of [79 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2025-11+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In November 2025, we released updated versions of 28 add-ons:

##### Active scanner rules
**v75**  
Added
- SYSTEMIC tag to selected rules.

Changed
- Address potential false positives with the XSLT Injection scan rule when payloads cause a failure which may still contain the expected evidence.
- Depends on an updated version of the Common Library add-on.
- Reduced usage of error level logging.

##### Active scanner rules (alpha)
**v53**  
Added
- SYSTEMIC tag to selected rules.

Changed
- The Web Cache Deception scan rule now includes example alert functionality for documentation generation purposes (Issue 6119).
- Depends on an updated version of the Common Library add-on.
- Reduced usage of error level logging.

##### Active scanner rules (beta)
**v63**  
Added
- SYSTEMIC tag to selected rules.

Changed
- Depends on an updated version of the Common Library add-on.
- Reduced usage of error level logging.

##### Ajax Spider
**v23.27.0**  
Added
- Spider stats.

Fixed
- Correctly validate browser IDs.

##### Alert Filters
**v25**  
Changed
- Include String as supported type for the Automation Framework `alertFilter` job's `ruleId` field.

##### Authentication Helper
**v0.32.0**  
Changed
- Track authentication headers with key in the name.
- No longer quote domains as these will not get counted as valid URLs in the Automation Framework.

**v0.31.0**  
Added
- Domains to auth tester.

**v0.30.0**  
Added
- Click on button when login form does not handle return in Browser Based Authentication.
- Handle password fields by ID and name in Browser Based Authentication.
- Check div elements when searching for login links.

Changed
- Maintenance changes
- Depend on newer version of Zest add-on.

Fixed
- Inform when the Authentication Report being imported does not contain any diagnostics.

##### Automation Framework
**v0.56.0**  
Added
- Command line -autocheck option which checks if the specified yaml plan has the right format.

Changed
- Include in Context regular expressions when creating the plan from a context.

**v0.55.0**  
Changed
- Use CWD for relative file names if plan loaded from a URL.

##### Call Home
**v0.19.0**  
Changed
- Include the exceptions's file/line in logger statistics.

**v0.18.0**  
Added
- Postman stats to telemetry.
- Forced browse stats to telemetry.

Changed
- Include the exception name in logger statistics.

**v0.17.0**  
Added
- AJAX Spider stats to telemetry.

##### Client Side Integration
**v0.18.0**  
Added
- Add optional parameters for the Client Spider API action `scan`:
  - `numberOfBrowsers` - control concurrency (number of browser windows).
  - `scopeCheck` - select Scope Check (Flexible or Strict).
- Spider stats.

##### Forced Browse
**v19**  
Added
- Statistics.

##### GraalVM JavaScript
**v0.11.0**  
Changed
- Update dependencies.
- Update the Active script template to contain a `scanHost` function that is called once per host being scanned.
- Update minimum scripts add-on version to 45.15.0.

##### Linux WebDrivers
**v167**  
Changed
- Update ChromeDriver to 142.0.7444.175.

**v166**  
Changed
- Update ChromeDriver to 142.0.7444.162.

**v165**  
Changed
- Update ChromeDriver to 142.0.7444.61.

##### MacOS WebDrivers
**v167**  
Changed
- Update ChromeDriver to 142.0.7444.175.

**v166**  
Changed
- Update ChromeDriver to 142.0.7444.162.

**v165**  
Changed
- Update ChromeDriver to 142.0.7444.61.

##### Network
**v0.24.0**  
Added
- Use UTF-8 charset for `application/json` when none specified on newer ZAP versions (Issue 6656).

Changed
- Update dependencies.
- Reset warned invalid content-type values on newer ZAP versions (Issue 9082).
- Updated user agents.

Fixed
- Skip decoding of Brotli encoded empty bodies.

##### OAST Support
**v0.23.0**  
Fixed
- Properly stop services when shutting down.

##### OpenAPI Support
**v47**  
Changed
- Dependency updates.

Fixed
- Include URLs from context verbatim.

##### Passive scanner rules
**v69**  
Changed
- Update dependency.
- Reduced usage of error level logging.
- The Charset Mismatch scan rule now includes example alert functionality for documentation generation purposes (Issue 6119) and alert references (Issue 7100).

Removed
- The Charset Mismatch scan rule no longer produces an alert with regard to META content-type and older clients.

##### Passive scanner rules (alpha)
**v47**  
Added
- SYSTEMIC tag to selected rules.

Changed
- Depends on an updated version of the Common Library add-on.

Removed
- The two example passive scan rules were removed from this add-on and are now part of: https://github.com/zaproxy/addon-java

##### Passive scanner rules (beta)
**v47**  
Added
- SYSTEMIC tag to selected rules.

Changed
- Depends on an updated version of the Common Library add-on.
- Reduced usage of error level logging.

##### Postman Support
**v0.8.0**  
Added
- Statistics.

##### Report Generation
**v0.42.0**  
Changed
- Update dependencies.
- All relevant reports to support nodeName and systemic counts.
- Do not try to validate the AF report file in the GUI as the plan may run on another system.

##### Retire.js
**v0.50.0**  
Changed
- Updated with upstream retire.js pattern changes.
- Reduced usage of error level logging.

##### Scan Policies
**v0.6.0**  
Changed
- Updated based on Rules' Policy Tag assignments.

Added
- Document in the help the programmatic name of the policies.
- Stats ID and readonly to the polices.

##### Script Console
**v45.15.0**  
Added
- `scanHost` method to the active script scan rule interface that is called once per host being scanned.

Changed
- Update dependency.

##### Spider
**v0.17.0**  
Changed
- Update dependency.

Fixed
- Do not warn when canonicalising apparent URI, `//`, nor empty `tel` and `mailto`.

##### Technology Detection
**v21.49.0**  
Changed
- Updated with enthec upstream icon and pattern changes.
- Maintenance changes.
- The Technology panel toolbar now includes a toggle button to link its displayed contents to the Sites Tree selection.

Fixed
- Icon sizing in the Technology table when a transparent placeholder needs to be used.
- Reduced usage of error level logging.

##### WebSockets
**v34**  
Changed
- Update alert reference to latest location.
- Adjusted and internationalized the text in some exceptions/warning dialogs to use multiple lines and thus be more clear.

Fixed
- Error logs to always include stack trace.

##### Windows WebDrivers
**v168**  
Changed
- Update ChromeDriver to 142.0.7444.175.

**v167**  
Changed
- Update ChromeDriver to 142.0.7444.162.

**v166**  
Changed
- Update ChromeDriver to 142.0.7444.61.


---
title: "ZAP Updates - July 2025"
summary: >
  TODO
images:
- https://www.zaproxy.org/blog/2025-08-01-zap-updates-july-2025/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2025-08-01"
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
Excluding merges, 6 authors have pushed 12 commits to main and 12 commits to all branches. On main, 42 files have changed and there have been 277 additions and 151 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 7 authors have pushed 88 commits to main and 92 commits to all branches. On main, 1,708 files have changed and there have been 72,176 additions and 3,535 deletions.

A total of [87 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2025-07+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In July 2025, we released updated versions of 15 add-ons:

#####  Passive scanner rules
**v61.1.0**  
Added
- A ZAP is Out of Date rule.

Changed
- Updated help with specific Category identifiers for use with the Custom Payloads add-on for rules:
    - Application Error Disclosure
    - Information Disclosure - Suspicious Comments
    - Username Hash Found

##### Ajax Spider
**v23.25.0**  
Fixed
- Correct configuration key for Logout Avoidance (Issue 8994).
- Error logs to always include stack trace.

##### Authentication Helper
**v0.27.0**  
Added
- Support for recorded scripts in the Authentication Tester.

Changed
- Updated to depend on Zest add-on 48.8.0.

##### Automation Framework
**v0.51.0**  
Added
- Support for exclude regexes to active scan config job.
- Always run option for all jobs.
- Support for data driven nodes in plan (not yet in the UI).

Changed
- Job remains selected when moved in the GUI.

##### Common Library
**v1.34.0**  
Added
- Added Alert Tags for PCI DSS and HIPAA standards.
- Added a help page for the alert tags provided through this add-on.

##### DOM XSS Active scanner rule
**v22**  
Changed
- Allow to use Edge.
- Depend on newer version of Selenium add-on.
- Maintenance changes.

##### Linux WebDrivers
**v150**  
Changed
- Update ChromeDriver to 138.0.7204.183.

**v149**  
Changed
- Update ChromeDriver to 138.0.7204.168.

**v148**  
Changed
- Update ChromeDriver to 138.0.7204.157.

**v147**  
Changed
- Update ChromeDriver to 138.0.7204.94.

**v146**  
Changed
- Update ChromeDriver to 138.0.7204.92.

##### MacOS WebDrivers
**v150**  
Changed
- Update ChromeDriver to 138.0.7204.183.

**v149**  
Changed
- Update ChromeDriver to 138.0.7204.168.

**v148**  
Changed
- Update ChromeDriver to 138.0.7204.157.

**v147**  
Changed
- Update ChromeDriver to 138.0.7204.94.

**v146**  
Changed
- Update ChromeDriver to 138.0.7204.92.

##### Passive scanner rules
**v66**  
Added
- The Reverse Tabnabbing and Retrieved from Cache scan rules now have CWE references.
- A ZAP is Out of Date rule.

**v57.1.0**  
Added
- A ZAP is Out of Date rule.

Changed
- The library (htmlunit-csp) used by the Content Security Policy scan rule was updated to v4.0.0, which includes support for the wasm-unsafe-eval source expression.

Fixed
- A typo in the Other Info of one of the Retrieved from Cache Alerts.


##### Quick Start
**v52**  
Added
- Add icon for Edge browser.

##### Retire.js
**v0.48.0**  
Changed
- Updated with upstream retire.js pattern changes.

##### Selenium
**v15.39.0**  
Added
- Allow to use Edge browser.

**v15.38.0**  
Changed
- Update Selenium to version 4.34.0.

##### Technology Detection
**v21.47.0**  
Changed
- Updated with enthec upstream icon and pattern changes.

##### Windows WebDrivers
**v150**  
Changed
- Update ChromeDriver to 138.0.7204.183.

**v149**  
Changed
- Update ChromeDriver to 138.0.7204.168.

**v148**  
Changed
- Update ChromeDriver to 138.0.7204.157.

**v147**  
Changed
- Update ChromeDriver to 138.0.7204.94.

**v146**  
Changed
- Update ChromeDriver to 138.0.7204.92.

##### Zest - Graphical Security Scripting Language
**v48.8.0**  
Added
- New extension level method for recording client scripts.

Changed
- Fail fast on client errors.
- Update Zest library to 0.31.0:
  - Update Selenium to version 4.34.0.


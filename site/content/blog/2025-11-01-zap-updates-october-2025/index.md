---
title: "ZAP Updates - October 2025"
summary: >
  TODO
images:
- https://www.zaproxy.org/blog/2025-11-01-zap-updates-october-2025/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2025-11-01"
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
Excluding merges, 5 authors have pushed 21 commits to main and 21 commits to all branches. On main, 54 files have changed and there have been 2,164 additions and 366 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 8 authors have pushed 92 commits to main and 92 commits to all branches. On main, 1,335 files have changed and there have been 15,961 additions and 12,178 deletions.

A total of [98 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2025-10+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In October 2025, we released updated versions of 12 add-ons:

##### Active scanner rules (alpha)
**v52**  
Added
- Suspicious Input Transformation Script Scan Rule.

Removed
- The two example active scan rules were removed from this add-on and are now part of: https://github.com/zaproxy/addon-java

##### Automation Framework
**v0.54.0**  
Added
- Setting arbitrary config values

Changed
- Reinstate the validation of the Scan Policy in the `activeScan` job.
- Adjust the text for the plan load warning/error dialog text to be clear which output panel it's referring to.
- Maintenance changes.
- Depend on newer version of Common Library add-on.

##### Call Home
**v0.16.0**  
Added
- Add statistics for the number of fatal/warn/error logged.

##### Common Library
**v1.38.0**  
Added
- SYSTEMIC tag.

Changed
- Update dependencies.

**v1.37.0**  
Added
- Support for alert reference overrides in script scan rule metadata.

##### GraalVM JavaScript
**v0.10.0**  
Changed
- Update Graal JavaScript engine to version 25 (Issues 8477 and 9010).
- Use example links in Active/Passive Rule templates' references.
- Update scan rule templates to use alertRefOverrides.

##### Linux WebDrivers
**v164**  
Changed
- Update ChromeDriver to 142.0.7444.59.

**v163**  
Changed
- Update ChromeDriver to 141.0.7390.122.

**v162**  
Changed
- Update ChromeDriver to 141.0.7390.78.

**v161**  
Changed
- Update ChromeDriver to 141.0.7390.76.

**v160**  
Changed
- Update ChromeDriver to 141.0.7390.65.

**v159**  
Changed
- Update ChromeDriver to 141.0.7390.54.

##### MacOS WebDrivers
**v164**  
Changed
- Update ChromeDriver to 142.0.7444.59.

**v163**  
Changed
- Update ChromeDriver to 141.0.7390.122.

**v162**  
Changed
- Update ChromeDriver to 141.0.7390.78.

**v161**  
Changed
- Update ChromeDriver to 141.0.7390.76.

**v160**  
Changed
- Update ChromeDriver to 141.0.7390.65.

**v159**  
Changed
- Update ChromeDriver to 141.0.7390.54.

##### Passive scanner rules
**v68**  
Added
- SYSTEMIC tag to selected rules.

Changed
- Update dependency.
- The PII Disclosure scan rule now only evaluates visible text and script blocks in HTML responses at Medium or High alert threshold, while the entire response body is considered at Low alert threshold. To further prevent false positives at Medium or High alert threshold candidate strings with underscore are excluded.
- Depends on an updated version of the Common Library add-on.

Fixed
- ZAP is Out of Date rule to not trigger a CFU request in silent mode (Issue 9096).

##### Script Console
**v45.14.0**  
Added
- Support for alert reference overrides in script scan rule metadata.

Changed
- Do not report authentication script errors as warnings in the Automation Framework for consistent behavior with all authentication methods, which handle errors as authentication failures.

##### Selenium
**v15.41.0**  
Changed
- Update Selenium to version 4.37.0.
- Use configured Firefox binary when creating profiles.

##### Windows WebDrivers
**v165**  
Changed
- Update ChromeDriver to 142.0.7444.59.

**v164**  
Changed
- Update ChromeDriver to 141.0.7390.122.

**v163**  
Changed
- Update ChromeDriver to 141.0.7390.78.

**v162**  
Changed
- Update ChromeDriver to 141.0.7390.76.

**v161**  
Changed
- Update ChromeDriver to 141.0.7390.65.

**v160**  
Changed
- Update ChromeDriver to 141.0.7390.54.

##### Zest - Graphical Security Scripting Language
**v48.10.0**  
Added
- Support for Edge in scripts run from the script console.

Changed
- Deprecate the `Username` and `Password` credential parameters in favor of the lowercase `username` and
`password` variants, aligning them with the naming convention of the other authentication credentials.
- Update Zest library to 0.32.0.

Removed
- Support for Internet Explorer.


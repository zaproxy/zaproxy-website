---
title: "ZAP Updates - December 2024"
summary: >
  TODO
images:
- https://www.zaproxy.org/blog/2025-01-01-zap-updates-december-2024/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2025-01-01"
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
Excluding merges, 6 authors have pushed 24 commits to main and 24 commits to all branches. On main, 59 files have changed and there have been 471 additions and 333 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 9 authors have pushed 83 commits to main and 83 commits to all branches. On main, 817 files have changed and there have been 19,885 additions and 3,325 deletions.

A total of [106 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2024-12+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In December 2024, we released updated versions of 8 add-ons:

##### Common Library
**v1.29.0**  
Changed
- Dependency updates.
- Let the Value Generator add-on provide the custom values through this add-on (Issue 8016).

Added
- Policy tags for use with scan rules and the new Scan Policies add-on.

Fixed
- Be more lenient with the input used for providing values, to prevent exceptions.

##### DOM XSS Active scanner rule
**v20**  
Changed
- Address deprecation warnings with newer Selenium version (4.27).
- Include the whole HTTP message in the raised alerts.
- Include the steps to reproduce the DOM XSS in the other info of the alert.
- Do not request URLs explicitly excluded from the context or global excludes
- Depend on newer version of Common Library add-on.

Fixed
- Address false negatives through query parameters.

Added
- Standardized Scan Policy related alert tags on the rule.

##### Linux WebDrivers
**v117**  
Changed
- Update ChromeDriver to 131.0.6778.204.

**v116**  
Changed
- Update ChromeDriver to 131.0.6778.87.

##### MacOS WebDrivers
**v117**  
Changed
- Update ChromeDriver to 131.0.6778.204.

**v116**  
Changed
- Update ChromeDriver to 131.0.6778.87.

##### Network
**v0.19.0**  
Changed
- Configure the logging to prevent verbose log messages when using BC JSSE provider.
- Improve error handling on client's unknown CA TLS alert.
- Report available TLS providers when failed to query the TLS/SSL protocol versions.
- Rely on the default secure random generator when creating the Root CA certificate to use the most appropriate defined by the security provider.
- Update default user-agents.

##### Retire.js
**v0.43.0**  
Fixed
- An issue that was resulting in False Positives.

Changed
- Updated with upstream retire.js pattern changes.
- The scan rule now uses a more specific CWE (Issue 8732).

##### Selenium
**v15.31.0**  
Changed
- Update Selenium to version 4.27.0.
- Use WebDriver BiDi with Firefox.

##### Windows WebDrivers
**v117**  
Changed
- Update ChromeDriver to 131.0.6778.204.

**v116**  
Changed
- Update ChromeDriver to 131.0.6778.87.


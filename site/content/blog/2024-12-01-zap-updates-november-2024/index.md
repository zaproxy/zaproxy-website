---
title: "ZAP Updates - November 2024"
summary: >
  TODO
images:
- https://www.zaproxy.org/blog/2024-12-01-zap-updates-november-2024/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2024-12-01"
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
Excluding merges, 3 authors have pushed 12 commits to main and 12 commits to all branches. On main, 44 files have changed and there have been 1,147 additions and 276 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 9 authors have pushed 102 commits to main and 102 commits to all branches. On main, 1,250 files have changed and there have been 42,096 additions and 5,048 deletions.

A total of [118 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2024-11+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In November 2024, we released updated versions of 10 add-ons:

##### Authentication Helper
**v0.16.0**  
Fixed
- Address concurrency issue while passive scanning with the Session Management Response Identified scan rule (Issue 8187).

##### Client Side Integration
**v0.9.0**  
Changed
- Update minimum ZAP version to 2.15.0.
- Updated Chrome and Firefox extensions to v0.0.9.

Added
- Support for menu weights (Issue 8369).

Fixed
- Address exception with deleted messages while handling client event.

##### Dev Add-on
**v0.8.0**  
Changed
- Sequence performance test to make it actually possible to test it using automation.
- CSS and JS responses are now set cache enabled.

##### Eval Villain
**v0.4.0**  
Changed
- Updated with new version of Eval Villain.
- Update minimum ZAP version to 2.15.0.

##### Linux WebDrivers
**v115**  
Changed
- Update ChromeDriver to 131.0.6778.85.

**v114**  
Changed
- Update ChromeDriver to 131.0.6778.69.

**v113**  
Changed
- Update ChromeDriver to 130.0.6723.116.

**v112**  
Changed
- Update ChromeDriver to 130.0.6723.93.

##### MacOS WebDrivers
**v115**  
Changed
- Update ChromeDriver to 131.0.6778.85.

**v114**  
Changed
- Update ChromeDriver to 131.0.6778.69.

**v113**  
Changed
- Update ChromeDriver to 130.0.6723.116.

**v112**  
Changed
- Update ChromeDriver to 130.0.6723.93.

##### Retire.js
**v0.42.0**  
Changed
- Updated with upstream retire.js pattern changes.
- The Risk level associated with Alerts raised by this scan rule are mapped to the severity ratings provided in the Retire.js data. If no severity is matched then a default of Medium Risk is used (Issue 7926).
- Maintenance changes.

##### Scan Policies
**v0.1.0**  
Added
- A set of standardized active scan policies:
    - Default Policy
    - Developer CI/CD
    - Developer Standard
    - Developer Full
    - QA Standard
    - QA Full
    - API

##### Technology Detection
**v21.43.0**  
Changed
- Updated with enthec upstream icon and pattern changes.
- Maintenance changes.

##### Windows WebDrivers
**v115**  
Changed
- Update ChromeDriver to 131.0.6778.85.

**v114**  
Changed
- Update ChromeDriver to 131.0.6778.69.

**v113**  
Changed
- Update ChromeDriver to 130.0.6723.116.

**v112**  
Changed
- Update ChromeDriver to 130.0.6723.93.


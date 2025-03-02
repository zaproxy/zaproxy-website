---
title: "ZAP Updates - February 2025"
summary: >
  TODO
images:
- https://www.zaproxy.org/blog/2025-03-01-zap-updates-february-2025/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2025-03-01"
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
Excluding merges, 5 authors have pushed 17 commits to main and 17 commits to all branches. On main, 37 files have changed and there have been 289 additions and 64 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 9 authors have pushed 96 commits to main and 96 commits to all branches. On main, 1,269 files have changed and there have been 44,664 additions and 1,024 deletions.

A total of [90 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2025-02+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In February 2025, we released updated versions of 11 add-ons:

##### Authentication Helper
**v0.22.0**  
Added
- Initial authentication report (JSON).

**v0.21.0**  
Fixed
- Delays identifying verification due to tests being performed on too many unlikely URLs (such as images).

**v0.20.0**  
Changed
- Reduce add-on size.
- Improved session management detection.

Fixed
- Maintain the correct cookie state when using client script authentication.
- Do not close windows when running client auth in the spiders.
- Always close all of the windows when running client auth not in the spiders.

**v0.19.0**  
Added
- Added support for Client Script Authentication when used in conjunction with the Ajax Spider add-on or the Client Spider via the Client Side Integration add-on.
- Add support for custom authentication steps in Browser Based Authentication.

Fixed
- Reset always the state of the demo mode in the Authentication Tester dialogue.

##### Automation Framework
**v0.47.0**  
Added
- Method to get the YAML representation of a plan.

**v0.46.0**  
Changed
- Read (and write) the TOTP data from user's credentials in the automation plan.

**v0.45.0**  
Fixed
- Correctly load numeric user passwords.
- Address malformed HTML in the help.
- Correct default value of `threadPerHost` property of the `activeScan-config` job's help.
- Ensure the value zero is saved to the automation plan in the statistics test.

Added
- Added support for Client Script Authentication when the Ajax Spider is used in conjunction with the Auth Helper add-on.
- Add support for custom authentication steps in Browser Based Authentication.

##### Client Side Integration
**v0.13.0**  
Added
- Added support for Client Script Authentication when installed in conjunction with the Authentication Helper add-on.

##### Linux WebDrivers
**v127**  
Changed
- Update ChromeDriver to 133.0.6943.141.

**v126**  
Changed
- Update geckodriver to 0.36.0.

**v125**  
Changed
- Update ChromeDriver to 133.0.6943.126.

**v124**  
Changed
- Update ChromeDriver to 133.0.6943.98.

**v123**  
Changed
- Update ChromeDriver to 133.0.6943.53.

##### MacOS WebDrivers
**v127**  
Changed
- Update ChromeDriver to 133.0.6943.141.

**v126**  
Changed
- Update geckodriver to 0.36.0.

**v125**  
Changed
- Update ChromeDriver to 133.0.6943.126.

**v124**  
Changed
- Update ChromeDriver to 133.0.6943.98.

**v123**  
Changed
- Update ChromeDriver to 133.0.6943.53.

##### Passive Scanner
**v0.2.0**  
Added
- Allow add-ons to obtain the auto tagging tags.

Changed
- Correct help configuration to work with any language.
- Maintenance changes.
- Clarified passiveScan-wait > maxDuration documentation.

Fixed
- Fix broken link the help page.

##### Postman Support
**v0.6.0**  
Fixed
- Correct deserialization of headers.

##### Report Generation
**v0.37.0**  
Fixed
- Include correct alert instances in Traditional JSON Report with requests and responses (Issue 8861).
- Bug where false positives were included in Sarif reports with their original alert level.

**v0.36.0**  


##### Selenium
**v15.34.0**  
Changed
- Update Selenium to version 4.29.0.

##### Windows WebDrivers
**v127**  
Changed
- Update ChromeDriver to 133.0.6943.141.

**v126**  
Changed
- Update geckodriver to 0.36.0.

**v125**  
Changed
- Update ChromeDriver to 133.0.6943.126.

**v124**  
Changed
- Update ChromeDriver to 133.0.6943.98.

**v123**  
Changed
- Update ChromeDriver to 133.0.6943.53.

##### Zest - Graphical Security Scripting Language
**v48.4.0**  
Changed
- Update Zest library to 0.24.0:
  - Update Selenium to version 4.29.0.
  - Remove workaround that was now causing exceptions.

**v48.3.0**  
Changed
- Enable ZAP API in the authentication runner so ZAP browser extension callbacks work.

**v48.2.0**  
Added
- Firefox to recorder.
- Added support for custom script authentication.

Changed
- Record script order to be alphabetical.

Fixed
- Record Client Submit statement.


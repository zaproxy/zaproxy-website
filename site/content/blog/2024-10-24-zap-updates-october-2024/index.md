---
title: "ZAP Updates - October 2024"
summary: >
TODO
images:
- https://www.zaproxy.org/blog/2024-10-24-zap-updates-october-2024/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2024-10-24"
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
Excluding merges, 4 authors have pushed 12 commits to main and 12 commits to all branches. On main, 28 files have changed and there have been 210 additions and 189 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 9 authors have pushed 73 commits to main and 73 commits to all branches. On main, 934 files have changed and there have been 19,615 additions and 1,902 deletions.

A total of [49 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2024-10+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In October 2024, we released updated versions of 14 add-ons:

##### Active scanner rules
**v69**  
Changed
- The XML External Entity Attack scan rule now include example alert functionality for documentation generation purposes (Issue 6119).

Fixed
- Added more checks for valid .htaccess files to reduce false positives (Issue 7632).

##### Alert Filters
**v22**  
Fixed
- Handle deleted alerts gracefully.

##### Automation Framework
**v0.43.0**  
Fixed
- Handle exceptions while running jobs.

Changed
- In saved YAML plans:
  - Fields with default values are omitted.
  - The "name" and "type" fields are added before other fields.
  - Values are not quoted unless required.

##### Dev Add-on
**v0.7.0**  
Added
- Extra protected pages to simple-json-cookie to ensure spidering really works.
- Sequence performance test.

Fixed
- Issue where folder level pages without a trailing slash did not link correctly to sub pages.

##### Diff
**v16**  
Updated
- Add-on help content.

##### Fuzzer
**v13.14.0**  
Changed
- Maintenance changes.
- Replace library used for regex payload generation, to address performance and compatibility issues.

##### Import/Export
**v0.12.0**  
Changed
- Improved HTTP 1.1 traffic detection in PCAP files

Fixed
- Count invalid messages as tasks done toward progress when importing HARs.

##### Linux WebDrivers
**v110**  
Changed
- Update ChromeDriver to 130.0.6723.69.

**v109**  
Changed
- Update ChromeDriver to 130.0.6723.58.

**v108**  
Changed
- Update ChromeDriver to 129.0.6668.100.

**v107**  
Changed
- Update ChromeDriver to 129.0.6668.91.

**v106**  
Changed
- Update ChromeDriver to 129.0.6668.89.

##### MacOS WebDrivers
**v110**  
Changed
- Update ChromeDriver to 130.0.6723.69.

**v109**  
Changed
- Update ChromeDriver to 130.0.6723.58.

**v108**  
Changed
- Update ChromeDriver to 129.0.6668.100.

**v107**  
Changed
- Update ChromeDriver to 129.0.6668.91.

**v106**  
Changed
- Update ChromeDriver to 129.0.6668.89.

##### Replacer
**v19**  
Changed
- Update ZAP API endpoint description.

##### Report Generation
**v0.34.0**  
Changed
- Checkmarx rebrand.

Fixed
- An issue where alert details were missing from some Risk and Confidence HTML reports (Issue 8460).

##### Retire.js
**v0.41.0**  
Changed
- Performance improvements (Issue 8659).
- Updated with upstream retire.js pattern changes.

##### Script Console
**v45.7.0**  
Fixed
- Reuse script cache for all passive scan threads to avoid recompilation of Passive Rules scripts.
- Address a concurrency issue when using Graal.js Passive Rules scripts as first-class scan rules.
- Handle gracefully the inability to force stop the running standalone script in newer Java versions.

##### Windows WebDrivers
**v110**  
Changed
- Update ChromeDriver to 130.0.6723.69.

**v109**  
Changed
- Update ChromeDriver to 130.0.6723.58.

**v108**  
Changed
- Update ChromeDriver to 129.0.6668.100.

**v107**  
Changed
- Update ChromeDriver to 129.0.6668.91.

**v106**  
Changed
- Update ChromeDriver to 129.0.6668.89.


---
title: "ZAP Updates - May 2026"
summary: >
  TODO
images:
- https://www.zaproxy.org/blog/2026-06-01-zap-updates-may-2026/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2026-06-01"
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
Excluding merges, 6 authors have pushed 14 commits to main and 14 commits to all branches. On main, 16 files have changed and there have been 164 additions and 43 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 7 authors have pushed 78 commits to main and 78 commits to all branches. On main, 1,076 files have changed and there have been 27,808 additions and 6,493 deletions.

A total of [69 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2026-05+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In May 2026, we released updated versions of 20 add-ons:

##### Active scanner rules
**v82**  
Changed
- The following scan rules now include example alert functionality for documentation generation purposes (Issue 6119):
    - SQL Injection - Hypersonic SQL (Time Based)
    - SQL Injection - MsSQL (Time Based)
    - SQL Injection - MySQL (Time Based)
    - SQL Injection - Oracle (Time Based)
    - SQL Injection - PostgreSQL (Time Based)
    - Cross Site Scripting (Persistent) (Also now includes alert references (Issue 7100))

##### Active scanner rules (alpha)
**v57**  
Changed
- The LDAP Injection scan rule now includes example alert functionality for documentation generation purposes (Issue 6119) and alert references (Issue 7100).
- Formatted JavaScript files for consistency.

##### Active scanner rules (beta)
**v66**  
Changed
- The following scan rules now include example alert functionality for documentation generation purposes (Issue 6119) and alert references (Issue 7100):
  - Insecure HTTP Method
  - Session Fixation
  - Proxy Disclosure
- Dependency update.

##### Ajax Spider
**v23.31.0**  
Added
- Missing parameters from the spiderAjax help page.

Changed
- Update dependency.

##### Authentication Helper
**v0.39.0**  
Changed
- Do not attempt to extract session tokens from big responses, to reduce memory usage, which are more likely to represent application data rather than having session tokens.

Fixed
- Improve detection of finished Microsoft login.

##### Automation Framework
**v0.60.0**  
Fixed
- Fix exception during forced shutdown in the Active Scan job.

##### Client Side Integration
**v0.26.0**  
Added
- More programmatic control of the spider.

**v0.25.0**  
Changed
- Updated Chrome and Firefox extensions to v0.1.9.
- Maintenance changes.

Fixed
- Prevent interferences between the spiders and manual actions.
- Prevent loops when acting on elements due appended input data.

**v0.24.0**  
Added
- Client spider option "Action Wait Time".

Changed
- Client map export to report the number of items exported.

**v0.23.0**  
Changed
- Client spider to wait for all browsers to close before reporting it has finished.

##### Import/Export
**v0.20.0**  
Changed
- Source exporters to report the number of items exported.

##### Linux WebDrivers
**v198**  
Changed
- Update ChromeDriver to 148.0.7778.215.

**v197**  
Changed
- Update ChromeDriver to 148.0.7778.178.

**v196**  
Changed
- Update ChromeDriver to 148.0.7778.167.

**v195**  
Changed
- Update ChromeDriver to 148.0.7778.96.

##### MCP Integration
**v0.1.0**  
Added
- MCP Import.
- Automation framework support.
- Support for SSE responses.
- Automatically import MCP definitions discovered by the traditional spider.

Changed
- Maintenance changes.
- Formatted JavaScript files for consistency.
- Default MCP server to disabled.

##### Network
**v0.28.0**  
Changed
- Update dependencies (Issue 9337).

**v0.27.0**  
Changed
- Update dependencies.
- Include the Authority Key Identifier in generated server certificates per RFC 5280 (Issue 9301).

##### OpenAPI Support
**v56**  
Changed
- Dependency update.
- Exceptions caught by the Automation Framework job now include the exception message.
- Improved Swagger Secret Detector Script with false positive scenarios and ensuring correct Swagger version flagging.
- Formatted JavaScript files for consistency.

##### Quick Start
**v56**  
Added
- Add Scan Policy option to the Automated Scan panel.

##### Report Generation
**v0.45.0**  
Fixed
- The alert's systemic flag in JSON and XML reports now correctly reflects its state (Issue 9254).

Changed
- Update dependency.
- Formatted JavaScript files for consistency.

##### Retire.js
**v0.58.0**  
Changed
- Updated with upstream retire.js pattern changes.

**v0.57.0**  
Changed
- Updated with upstream retire.js pattern changes.

##### Selenium
**v15.49.0**  
Added
- Programmatic options to force extensions to be included or excluded.

**v15.48.0**  
Changed
- Update Selenium to version 4.44.0.
- Formatted JavaScript files for consistency.

##### Technology Detection
**v21.55.0**  
Changed
- Updated with enthec upstream icon and pattern changes.
- Dependency update.

##### WebSockets
**v37**  
Changed
- Maintenance changes.
- Formatted JavaScript files for consistency.

##### Windows WebDrivers
**v199**  
Changed
- Update ChromeDriver to 148.0.7778.215.

**v198**  
Changed
- Update ChromeDriver to 148.0.7778.178.

**v197**  
Changed
- Update ChromeDriver to 148.0.7778.167.

**v196**  
Changed
- Update ChromeDriver to 148.0.7778.96.

##### macOS WebDrivers
**v198**  
Changed
- Update ChromeDriver to 148.0.7778.215.

**v197**  
Changed
- Update ChromeDriver to 148.0.7778.178.

**v196**  
Changed
- Update ChromeDriver to 148.0.7778.167.

**v195**  
Changed
- Update ChromeDriver to 148.0.7778.96.


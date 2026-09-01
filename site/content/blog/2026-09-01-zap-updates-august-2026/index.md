---
title: "ZAP Updates - August 2026"
summary: >
  TODO
images:
- https://www.zaproxy.org/blog/2026-09-01-zap-updates-august-2026/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2026-09-01"
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
Excluding merges, 5 authors have pushed 17 commits to main and 17 commits to all branches. On main, 47 files have changed and there have been 3,477 additions and 2,330 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 8 authors have pushed 87 commits to main and 89 commits to all branches. On main, 1,774 files have changed and there have been 31,554 additions and 2,585 deletions.

A total of [63 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2026-08+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In August 2026, we released updated versions of 22 add-ons:

##### Alert Filters
**v27**  
Added
- Added an optional LLM extension for reviewing alerts.

Changed
- Maintenance changes.

##### Authentication Helper
**v0.42.0**  
Added
- A toolbar button to the Authentication Diagnostics screenshots tab, to toggle screenshots between full size and scaled to fit the window.
- Use the HTTP method for the verification configuration (on newer ZAP versions).

Changed
- Depend on newer Common Library add-on.
- Tag diagnostic HTTP messages with an internal ID, to make it easier to cross reference them.
- Obtain the minimal authentication diagnostics when aborting the authentication.
- Authentication report: include summary with connection success and failure counts.
- Include Accept, Accept-Language, Connection, and User-Agent headers when doing authentication verification.
- Ignore commented Zest statements when collecting authentication diagnostics.

Fixed
- Do not wait when getting the element for a screenshot diagnostic step to not add unnecessary delays.
- Performance issue checking for where cookie values were set during authentication.

**v0.41.0**  
Added
- Automation Framework `diagnostics` job to start and stop plan-level recording of authentication related diagnostics.

Changed
- Update dependency.
- Include the Zest statement index in the authentication diagnostics' steps.
- Include Origin header when doing authentication verification.

Fixed
- Handle exception while extracting session tokens.

##### Client Side Integration
**v0.31.0**  
Changed
- Maintenance changes.
- Include cause of invalid URL in error message of Client Spider job.
- Updated Chrome and Firefox recorders to v0.2.1.
- Check launched browsers can access the callback URL, and retry more often.
- Updated Chrome and Firefox full extensions to v0.2.2.

##### Common Library
**v1.44.0**  
Added
- Add standard header for other add-ons to use.

Changed
- Update dependencies.
- Update alert tag URLs to avoid redirects.

##### Fuzzer
**v13.17.0**  
Changed
- Update minimum ZAP version to 2.17.0.
- Update dependency.
- Maintenance changes.
- Formatted JavaScript files for consistency.
- Rename payload replacement strategies to Cluster Bomb and Pitchfork in the UI and help (previously Depth First and Breadth First).

Fixed
- Correct (breadth-first) Pitchfork payload replacement when fuzzing multiple locations.

##### GraphQL Support
**v0.34.0**  
Added
- Allow users to limit the number of GraphQL messages to import (`maxMessages`). Ex: If testing authentication, access, etc.

Changed
- Update dependency.
- Maintenance changes.

##### Import/Export
**v0.22.0**  
Added
- Option to send requests when importing a HAR file, including via the Automation Framework and API.
- Allow users to limit the number of HAR messages to import (`maxMessages`). Ex: If testing authentication, access, etc.

##### LLM Support
**v0.0.1**  
Added
- Basic stats
- Support for Ollama, Azure OpenAI, Google Gemini, Claude (Anthropic), and OpenAI Compatible endpoints.
- Integration points for other add-ons.
- A tabbed LLM Chat panel.
- Integration with the MCP add-on.

##### Linux WebDrivers
**v219**  
Changed
- Update ChromeDriver to 152.0.7977.64.

**v218**  
Changed
- Update ChromeDriver to 151.0.7922.173.

**v217**  
Changed
- Update ChromeDriver to 151.0.7922.169.

**v216**  
Changed
- Update ChromeDriver to 151.0.7922.137.

**v215**  
Changed
- Update ChromeDriver to 151.0.7922.108.

**v214**  
Changed
- Update ChromeDriver to 151.0.7922.75.

##### MCP Integration
**v0.4.0**  
Fixed
- Allow MCP security key to be copied (Issue #9432)

**v0.3.0**  
Added
- `zap_list_resources` and `zap_read_resource` tools for clients that only support tools (e.g. the LLM bridge).
- `zap_get_history` tool to fetch selected history fields with body paging via `body_offset` / `max_body_chars`.

Changed
- Maintenance changes.

##### Network
**v0.29.0**  
Added
- Option to support client certificates programmatically.
- Add option to control how browser background requests should be handled, default to hide.

Changed
- Improve server exception handling.
- Update dependencies.

Fixed
- Correct the generation of server certificates for domain names with more than 64 characters.

##### OAST Support
**v0.25.0**  
Changed
- Maintenance changes.
- Formatted JavaScript files for consistency.

Fixed
- Decrypt Interactsh interactions using AES-CTR, to support Interactsh server 1.3.0 and later (which changed the cipher from AES-CFB). Older servers are no longer supported.

##### OpenAPI Support
**v58**  
Changed
- Allow users to limit the number of OpenAPI messages to import (`maxMessages`). Ex: If testing authentication, access, etc.
- Dependency update.

Fixed
- Import dialogue file functionality now uses the selected User (previously only URL import did).

##### Postman Support
**v0.10.0**  
Added
- Allow users to limit the number of Postman messages to import (`maxMessages`). Ex: If testing authentication, access, etc.

Changed
- Maintenance changes.

##### Retire.js
**v0.64.0**  
Changed
- Updated with upstream retire.js pattern changes.

**v0.63.0**  
Changed
- Updated with upstream retire.js pattern changes.
- Update reference to avoid redirects.

##### SOAP Support
**v32**  
Added
- Allow users to limit the number of SOAP messages to import (`maxMessages`). Ex: If testing authentication, access, etc.

Changed
- Maintenance changes.

##### Selenium
**v15.54.0**  
Changed
- Update Selenium to version 4.47.0.

##### Server-Sent Events
**v15**  
Fixed
- Handle read timeouts.

##### Technology Detection
**v21.57.0**  
Changed
- Updated with enthec upstream icon and pattern changes.
- Dependency update.
- Update tab and help icon.

##### WebSockets
**v38**  
Changed
- Maintenance changes.

##### Windows WebDrivers
**v220**  
Changed
- Update ChromeDriver to 152.0.7977.64.

**v219**  
Changed
- Update ChromeDriver to 151.0.7922.173.

**v218**  
Changed
- Update ChromeDriver to 151.0.7922.169.

**v217**  
Changed
- Update ChromeDriver to 151.0.7922.137.

**v216**  
Changed
- Update ChromeDriver to 151.0.7922.108.

**v215**  
Changed
- Update ChromeDriver to 151.0.7922.75.

##### macOS WebDrivers
**v219**  
Changed
- Update ChromeDriver to 152.0.7977.64.

**v218**  
Changed
- Update ChromeDriver to 151.0.7922.173.

**v217**  
Changed
- Update ChromeDriver to 151.0.7922.169.

**v216**  
Changed
- Update ChromeDriver to 151.0.7922.137.

**v215**  
Changed
- Update ChromeDriver to 151.0.7922.108.

**v214**  
Changed
- Update ChromeDriver to 151.0.7922.75.


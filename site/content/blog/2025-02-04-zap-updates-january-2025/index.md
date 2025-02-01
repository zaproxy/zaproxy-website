---
title: "ZAP Updates - January 2025"
summary: >
  Starting 2025 with a full release, a new way to crawl modern web apps, and better authentication capabilities.
images:
- https://www.zaproxy.org/blog/2025-02-04-zap-updates-january-2025/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2025-02-04"
authors:
- akshath
---

It's a new year, and that means new ZAP developments. Here's everything that happened in January 2025.

## Highlights
### ZAP 2.16.0
ZAP 2.16.0 was released this month, which introduced a range of enhancements including a new spidering approach, detachable tabs, and an updated baseline Java requirement (now 17).
This is also the first full release with the "ZAP by Checkmarx" branding.
Read the [full release blog post](/blog/2025-01-10-zap-2-16-0/) for more details.

### Client Spider
The Client Spider offers a more effective way to crawl modern web applications by leveraging the built-in browser extension to capture events, DOM changes, and user interactions.
It aims to replace or outperform the AJAX Spider, giving users deeper coverage of front-end frameworks that rely heavily on JavaScript.
Over time, it will expand to handle a wider variety of clickable elements and replay sequences more accurately.
For more details, check out the [blog post](/blog/2025-01-31-client-spider/) and [ZAP Chat episode](https://youtu.be/OkELONAQyAY) on the client spider.

### Client Script Authentication
This Authentication Helper add-on introduced a browser-based authentication method that can use Zest scripts to log in.
It also supports Automation Framework configuration.
Visit [the docs](/docs/desktop/addons/authentication-helper/client-script/) to learn more.

## Ongoing Work
### Improved Browser Based Authentication
Building on the Client Spider and Client Script Authentication, the plan is to enhance browser integration so that ZAP can handle even the trickiest login mechanisms.
This includes enhanced detection of login fields, handling multi-step logins, TOTP support, and more.

### Authentication Report
An upcoming authentication report feature will summarize authentication details, statistics, and step-by-step screenshots of the login process.
It is aimed at making it easier to pinpoint login failures, expired tokens, or misconfigurations.
The idea is that this report will contain all the details a user will need in order to set up ZAP to handle authentication, possibly even without access to the ZAP Desktop.

Watch out for new docs, blog posts and videos on new authentication options soon!

## Miscellaneous Mentions
### Roadmap Updates
The [ZAP Roadmap](/docs/roadmap/) was updated with ongoing and planned items.

### ZAPBot on Bluesky
The ZAPBot account on Bluesky ([@zaproxybot.bsky.social](https://bsky.app/profile/zaproxybot.bsky.social)) now creates posts for published nightly releases or integration test failures.

## New Contributors
A very warm welcome to the people who started contributing to ZAP in January!

- [@bj-taduran](https://github.com/bj-taduran)
- [@Kaifmohd](https://github.com/Kaifmohd)
- [@middagj](https://github.com/middagj)

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 5 authors have pushed 32 commits to main and 32 commits to all branches. On main, 79 files have changed and there have been 1,966 additions and 505 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 8 authors have pushed 89 commits to main and 89 commits to all branches. On main, 1,828 files have changed and there have been 33,355 additions and 3,049 deletions.

A total of [124 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2025-01+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In January 2025, we released updated versions of 52 add-ons:

##### Active scanner rules
**v70**  
Changed
- Update minimum ZAP version to 2.16.0.
- Updated help with specific Category identifiers for use with the Custom Payloads add-on for rules:
    - Hidden File Finder
    - User Agent Fuzzer
- Now depends on minimum Common Library version 1.29.0.
- Add the `OUT_OF_BAND` alert tag to the following scan rules:
  - Server Side Template Injection (Blind)
  - XML External Entity Attack
- Cloud Metadata Attack scan rule is improved to support GCP, Azure, and OCI.
- Remove double dot in skipped message of a scan rule that uses the Active Scan OAST service.

Fixed
- A situation where the Server-Side Template Injection (SSTI) scan rule might result in false positives related to the Go payloads (Issue 8622).
- False Positives in Cloud Metadata Attack scan rule (Issue 8514).

Added
- Standardized Scan Policy related alert tags on the rule.

##### Active scanner rules (beta)
**v57**  
Changed
- Update minimum ZAP version to 2.16.0.
- The following scan rules now use more specific CWE IDs:
    - Proxy Disclosure (Issue 8713)
    - Possible Username Enumeration (Issue 8715)
- Remove double dot in skipped message of scan rules that use the Active Scan OAST service.

Fixed
- Address exception when scanning a message without path with Possible Username Enumeration scan rule.
- The WSTG alert tags on the HTTP Only Site scan rule.

Added
- Standardized Scan Policy related alert tags on various rules.

##### Ajax Spider
**v23.22.0**  
Added
- Option to enable browser extensions added by other add-ons, previously they were always enabled but now the default is false.

Changed
- Update minimum ZAP version to 2.16.0.
- Updated automation framework documentation and templates for `spiderAjax` job to reflect changes to the default value of numberOfBrowsers parameter
- Fields with default or missing values are omitted for the `spiderAjax` job in saved Automation Framework plans.
- Default the number of browsers to the number of available cores.
- Updated the job GUI to add an aditional "Elements" tab.

##### Alert Filters
**v23**  
Changed
- Update minimum ZAP version to 2.16.0.
- Fields with default or missing values are omitted for the `alertFilter` job in saved Automation Framework plans.
- Depend on Passive Scanner add-on (Issue 7959).

##### Authentication Helper
**v0.18.0**  
Changed
- Ignore non-displayed fields when selecting the user name and password.
- Use single displayed field for user name, e.g. multi step login.

Fixed
- Input fields that do not explicitly declare their type were no longer being chosen by the Browser Based Authentication.

**v0.17.0**  
Changed
- Update minimum ZAP version to 2.16.0.
- Depend on Passive Scanner add-on (Issue 7959).
- Address deprecation warnings with newer Selenium version (4.27).
- Optionally depend on the Client Integration add-on to provide Browser Based Authentication to the Client Spider.

##### Automation Framework
**v0.44.0**  
Added
- Active scan policy job.
- Add job to configure the active scanner, `activeScan-config`.
- Allow to enable/disable jobs (Issue 5845).
- Method to allow the user to set the exit code via a script.
- Add exitStatus job (Issue #6928)

Changed
- Update minimum ZAP version to 2.16.0.
- Maintenance changes.
- Updated automation framework documentation and templates for `activeScan` job to reflect changes to the default value of threadPerHost parameter
- Update help for the "requestor" job.
- Update help to indicate that job order is important (Issue 8675).
- Fields with default or missing values are omitted for the following automation jobs in saved plans:
  - `activeScan`
  - `delay`
  - `requestor`

Removed
- Remove job implementations that were previously migrated to the Passive Scanner add-on (Issue 7959).

Fixed
- Templates generated with `-autogenmin` or `-autogenmax` were invalid in some cases.
- Allow to choose one thread for the `activeScan` job through the GUI.
- Active Scan jobs will once again use the default policy if neither a policy nor a policyDefinition has been set.
- Bug in job alert tests related to alert matching.
- Active scan rule ID 0 (Directory Browsing) will be included in the plan (yaml) when saved (Issue 8746).
- Sizing/display of the Active Scan Policy job rule add/modify dialogs.

##### Call Home
**v0.14.0**  
Changed
- Update minimum ZAP version to 2.16.0.

Added
- Network stats to telemetry.
- Sequence stats to telemetry.

##### Client Side Integration
**v0.12.0**  
Fixed
- Extension not enabled when launched from ZAP.
- Browser recording not enabled when launched from ZAP recorder.

**v0.11.0**  
Fixed
- Fix concurrency issue with page components which could lead to exceptions in the GUI.

Changed
- Updated Chrome and Firefox extensions to v0.0.11.

Added
- A context menu allowing users to Export Client Map.

**v0.10.0**  
Changed
- Update minimum ZAP version to 2.16.0.
- Maintenance changes.
- The current passive scan rules now uses a more specific CWE (Issue 8712).
- Updated Chrome and Firefox extensions to v0.0.10.

Added
- Added support for Browser Based Authentication when installed in conjunction with the Auth Helper add-on.
- Client spider, along with Automation Framework support.

##### Common Library
**v1.30.0**  
Added
- Add solutions to Insufficient Process Validation vulnerability (Issue 8056).

Changed
- Update minimum ZAP version to 2.16.0.
- Improve solution and add more references to 'Information Leakage' vulnerability (Issue 8056).

##### Custom Payloads
**v0.14.0**  
Changed
- Promoted to Release status.
- Update minimum ZAP version to 2.16.0.
- Maintenance changes.
- The superfluous/unused ID element of the custom payloads has been removed from the GUI and config.
- Now depends on the Common Library add-on.

Added
- Add help button to Options panel and add further detailed Help content.

Fixed
- The add-on will no longer attempt to save or load Payloads for which there is no Category.
- Ensure file is selected, exists, and is readable when attempting to import multiple payloads.

##### DOM XSS Active scanner rule
**v21**  
Changed
- Update minimum ZAP version to 2.16.0.

Fixed
- Handle exceptions while obtaining the XPath of an element.

##### Database
**v0.7.0**  
Changed
- Update minimum ZAP version to 2.16.0.

##### Dev Add-on
**v0.9.0**  
Added
- Link which is only shown if a localStorage item is set, for testing in browser spider authentication.

Changed
- Update minimum ZAP version to 2.16.0.

##### Diff
**v17**  
Changed
- Update minimum ZAP version to 2.16.0.

##### Directory List v1.0
**v9**  
Changed
- Update minimum ZAP version to 2.16.0.

##### Encoder
**v1.6.0**  
Changed
- Update minimum ZAP version to 2.16.0.

Added
- A predefined processor "ASCify" which converts text removing accents/diacritics/ligatures (perhaps not fully, due to operation in compatibility mode) leaving only ASCII characters.
- Predefined processors for encoding and decoding Morse Code.

##### Forced Browse
**v17**  
Changed
- Update minimum ZAP version to 2.16.0.

##### Fuzzer
**v13.15.0**  
Changed
- Update minimum ZAP version to 2.16.0.

##### Getting Started with ZAP Guide
**v19**  
Changed
- Update Getting Started Guide for 2.16.0.

##### GraalVM JavaScript
**v0.9.0**  
Changed
- Update minimum ZAP version to 2.16.0.

##### GraphQL Support
**v0.26.0**  
Changed
- Update minimum ZAP version to 2.16.0.
- Depend on newer version of Common Library add-on (Issue 8016).
- Maintenance changes.

Added
- Fingerprinting checks for the following engines:
    - pg_graphql
    - tailcall
    - Hot Chocolate
    - Inigo
- Support for importing an introspection query response from a file (Issue 8569).
- If the Tech Detection (Wappalyzer) add-on is installed and a GraphQL engine is successfully fingerprinted, it is added to the Technology tab/data.

##### Import/Export
**v0.13.0**  
Added
- Add Automation Framework job to export data (e.g. HAR, URLs).
- Support for Sites Tree export and prune.

Changed
- Update minimum ZAP version to 2.16.0.
- Update dependency.
- Maintenance changes.

Fixed
- Import HAR entry sent and elapsed time.
- Duplicate or missing "Save URLs..." entries in the Export menu.
- The "Save All URLs..." export option was saving only the selected URLs.
- Correct bundled dependencies to avoid conflicts with core logging libraries.

##### Invoke Applications
**v16**  
Changed
- Update minimum ZAP version to 2.16.0.

##### Linux WebDrivers
**v122**  
Changed
- Update ChromeDriver to 132.0.6834.159.

**v121**  
Changed
- Update ChromeDriver to 132.0.6834.110.

**v120**  
Changed
- Update ChromeDriver to 132.0.6834.83.

**v119**  
Changed
- Update minimum ZAP version to 2.16.0.

**v118**  
Changed
- Update ChromeDriver to 131.0.6778.264.

##### MacOS WebDrivers
**v122**  
Changed
- Update ChromeDriver to 132.0.6834.159.

**v121**  
Changed
- Update ChromeDriver to 132.0.6834.110.

**v120**  
Changed
- Update ChromeDriver to 132.0.6834.83.

**v119**  
Changed
- Update minimum ZAP version to 2.16.0.

**v118**  
Changed
- Update ChromeDriver to 131.0.6778.264.

##### Network
**v0.20.0**  
Added
- Set the local address where (e.g. server, proxy) the request header was received.

Changed
- Update minimum ZAP version to 2.16.0.

##### OAST Support
**v0.21.0**  
Changed
- Update minimum ZAP version to 2.16.0.
- Maintenance changes.
- Include the handler and source when logging interactions not found in the permanent database.

##### Online menus
**v14**  
Changed
- Update minimum ZAP version to 2.16.0.

##### OpenAPI Support
**v44**  
Changed
- Update minimum ZAP version to 2.16.0.
- Depend on newer version of Common Library add-on (Issue 8016).
- Fields with default or missing values are omitted for the `openapi` job in saved Automation Framework plans.

##### Passive Scanner
**v0.1.0**  
Added
- Manage the passive scan related options and the scan rules (Issue 7959).
- Add passive scanner (Issue 7959).

Changed
- Update minimum ZAP version to 2.16.0.
- Fields with default or missing values are omitted for the following automation jobs in saved Automation Framework plans:
    - `passiveScan-config`
    - `passiveScan-wait`

Fixed
- Fixed `passiveScan-wait` alert tests.

##### Passive scanner rules
**v62**  
Changed
- Update minimum ZAP version to 2.16.0.
- Updated help with specific Category identifiers for use with the Custom Payloads add-on for rules:
    - Application Error Disclosure
    - Information Disclosure - Suspicious Comments
    - Username Hash Found

##### Passive scanner rules (beta)
**v42**  
Changed
- Update minimum ZAP version to 2.16.0.
- Updated help with specific Category identifier for use with the Custom Payloads add-on for the "Dangerous JS Functions" rule.

Fixed
- Fix typo in log message.
- Fix Insufficient Site Isolation scan rule check that filters responses based on whether a response is a success or not.

Changed
- Maintenance changes.

##### Postman Support
**v0.5.0**  
Changed
- Update minimum ZAP version to 2.16.0.
- Fields with default or missing values are omitted for the `postman` job in saved Automation Framework plans.

##### Quick Start
**v51**  
Added
- Stats counter to the main toolbar button (Issue 8375).

Changed
- Update minimum ZAP version to 2.16.0.
- Depend on Passive Scanner add-on (Issue 7959).

Fixed
- An exception that prevented the look and feel from changing completely.
- Issues setting the AJAX Spider options.

##### Replacer
**v20**  
Fixed
- Typo in automation job help.
- Address misleading warning `Unrecognised parameter` for `deleteAllRules` (Issue 8764).

Changed
- Update minimum ZAP version to 2.16.0.
- Fields with default or missing values are omitted for the `replacer` job in saved Automation Framework plans.

##### Report Generation
**v0.35.0**  
Added
- Stats counter to the main toolbar button (Issue 8375).
- Sequence data to JSON & HTML reports.

Changed
- Update minimum ZAP version to 2.16.0.
- Update automation job help.
- Fields with default or missing values are omitted for the `report` job in saved Automation Framework plans.

Fixed
- Do not log an error when the statistics do not have a resource message (Issue 8788).

##### Requester
**v7.8.0**  
Changed
- Update minimum ZAP version to 2.16.0.

##### Retest
**v0.11.0**  
Changed
- Update minimum ZAP version to 2.16.0.
- To handle automation class changes.
- Depend on newer version of Passive Scanner add-on (Issue 7959).

##### Retire.js
**v0.44.0**  
Changed
- Updated with upstream retire.js pattern changes.
- Update minimum ZAP version to 2.16.0.

##### Reveal
**v9**  
Changed
- Update minimum ZAP version to 2.16.0.

##### SOAP Support
**v24**  
Changed
- Update minimum ZAP version to 2.16.0.
- Depend on newer version of Common Library add-on (Issue 8016).
- Fields with default or missing values are omitted for the `soap` job in saved Automation Framework plans.

Added
- Standardized Scan Policy related alert tags on scan rules.

##### Scan Policies
**v0.2.0**  
Changed
- Update minimum ZAP version to 2.16.0.

Fixed
- Fix link in the help page.

##### Script Console
**v45.8.0**  
Added
- Report indirect script errors while the Automation Framework plans are running (Issue 8586).
- Standardized Policy Tags to the base Scripts Active Scanner.

Changed
- Update minimum ZAP version to 2.16.0.
- Fields with default or missing values are omitted for the `script` job in saved Automation Framework plans.
- Depends on an updated version of the Common Library add-on.
- Depend on Passive Scanner add-on (Issue 7959).

Fixed
- Correct auto-complete suggestions for parameters of Passive Rules.
- Some script errors were not being propagated to the output correctly.

##### Selenium
**v15.33.0**  
Added
- Allow to log browser's `console.log`, done at DEBUG level with the name `org.zaproxy.webdriver`.

Changed
- Use WebDriver BiDi with Chrome.
- Update Selenium to version 4.28.0.

**v15.32.0**  
Changed
- Update minimum ZAP version to 2.16.0.

##### Sequence
**v8**  
Added
- Add Automation Framework jobs:
  - `sequence-import` to import HARs as sequences.
  - `sequence-activeScan` to active scan sequences.
- Data for reporting.
- Stats for import automation and active scan.
- Sequence active scan policy which will be used if neither a policy nor policyDefinition are set.
- Add Import top level menu item to import HAR as sequence.
- Active Scan Sequence dialog.

Changed
- Depend on Import/Export add-on to allow to import HARs as sequences.
- Update minimum ZAP version to 2.16.0.
- Maintenance changes.
- Sequence scan implementation.
- Promoted to beta.

Removed
- Sequence panel from the Active Scan dialog.

##### Spider
**v0.13.0**  
Changed
- Update minimum ZAP version to 2.16.0.
- Depend on newer version of Common Library add-on (Issue 8016).
- Updated automation framework documentation and templates for `spider` job to reflect changes to the default value of threadCount parameter
- Fields with default or missing values are omitted for the `spider` job in saved Automation Framework plans.

Removed
- Remove non-functional option "request wait time" from the API and Automation Framework.

##### Technology Detection
**v21.44.0**  
Changed
- Updated with enthec upstream icon and pattern changes.
- Update minimum ZAP version to 2.16.0.
- Depend on Passive Scanner add-on (Issue 7959).
- The scan rule no longer sets a CWE for alerts (Issue 8733).

##### Tips and Tricks
**v14**  
Changed
- Update minimum ZAP version to 2.16.0.

##### Value Generator
**v6.7.0**  
Changed
- Update minimum ZAP version to 2.16.0.
- Depend on Common Library add-on, to provide the default/custom values to the other add-ons (Issue 8016).

Fixed
- Fixed an issue in the help which may cause images to be displayed inline impacting the flow of the text.

##### WebSockets
**v32**  
Changed
- Update minimum ZAP version to 2.16.0.

Fixed
- Correct location/function of New Context context menu item.

##### Windows WebDrivers
**v122**  
Changed
- Update ChromeDriver to 132.0.6834.159.

**v121**  
Changed
- Update ChromeDriver to 132.0.6834.110.

**v120**  
Changed
- Update ChromeDriver to 132.0.6834.83.

**v119**  
Changed
- Update minimum ZAP version to 2.16.0.

**v118**  
Changed
- Update ChromeDriver to 131.0.6778.264.

##### Zest - Graphical Security Scripting Language
**v48.1.0**  
Changed
- Use ZAP for launching Firefox and Chrome.
- Update Zest library to 0.23.0:
  - Update Selenium to version 4.28.0.
  - Update minimum Java version to 17.

**v48.0.0**  
Added
- Allow other add-ons to create a Zest script from a list of messages.

Changed
- Update minimum ZAP version to 2.16.0.
- Use Semantic Version.
- Maintenance changes.
- Depend on Passive Scanner add-on (Issue 7959).


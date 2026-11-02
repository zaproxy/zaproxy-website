---
title: "ZAP Updates - October 2026"
summary: >
  OAuth2 support has landed in the Authentication Helper, the Browser Extension has a new Script Viewer,
  ZAP can detect PHP2Shell, and we explain how we're developing ZAP in the LLM age.
images:
- https://www.zaproxy.org/blog/2026-11-02-zap-updates-october-2026/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2026-11-02"
authors:
- zapbot
---

## Highlights

### Initial OAuth2 2.0 Support

The [Authentication Helper](/docs/desktop/addons/authhelper/) add-on (v0.43.0) now has an OAuth2 authentication method supporting the non-interactive `client_credentials` and `password` grant types. It can be configured in the desktop UI, the Automation Framework (v0.61.0 adds `oauth2` support) and the API. We recommend it for APIs only; web apps with login screens should continue to use Browser Based or Client Script Authentication. Theres still more to do, and we'd like your feedback on what to prioritise. See [Initial OAuth2.0 support](/blog/2026-10-08-oauth2-support/).

### Developing ZAP in the LLM Age

We're not closing the door on new contributors, but LLMs have shifted the balance: generating code is easy, reviewing it is the bottleneck. The PR submitter is responsible for the code they propose, and PRs should be small, well tested and ideally come with Automation Framework plans. The PR template has been updated to reflect this. See [Developing ZAP in the LLM Age](/blog/2026-10-13-developing-zap-in-the-llm-age/).

### Script Viewer in the Browser Extension

Version 0.3.0 of the [ZAP Browser Extension](https://github.com/zaproxy/browser-extension/) lets you see a Zest script as you record it, then edit, replay (optionally step by step), load and save it, all without leaving the browser. It is available in both the full extension and the standalone Recorder, and is included in Client Side Integration v0.34.0. See [View, edit, and replay your recorded Zest scripts](/blog/2026-10-21-browser-extension-script-viewer/).

### Detecting PHP2Shell

The new passive *Server Side Technology Version with Known Vulnerabilities* rule (Passive scanner rules v77) checks technology versions disclosed in response headers against known vulnerabilities, initially PHP versions, so ZAP can flag PHP2Shell (CVE-2026-109618 / CVE-2026-109619) without sending any extra requests. See [Detecting PHP2Shell and Other PHP Vulnerabilities with ZAP](/blog/2026-10-22-php2shell-detection-with-zap/).

### ZAP Usage Is Still Growing

The [ZAP statistics](/docs/statistics/bar-charts/) show that ZAP usage is still increasing, and that we've had more direct downloads and Docker pulls than ever before. Thank you to everyone who uses and supports ZAP!

## Ongoing Work

### Global Scan Policy Manager

Work continues on the [Global Scan Policy Manager](/blog/2026-10-01-zap-updates-september-2026/#global-scan-policy-manager). This is a large change that touches many areas of ZAP, but it is a key change that we want to get into the next ZAP release. You can try it out by 
building and running ZAP from the source code.

### LLM Support

The [/docs/desktop/addons/llm-support/automation/#job-llm-config](llm-config) Automation Framework job has been released in the LLM Support add-on (v0.1.0). LLM assisted authentication in the Authentication Helper has landed, but has not been released yet. We expect to release it soon.

## New Contributors
A very warm welcome to the people who started to contribute to ZAP this month!

* [TheJhyeFactor](https://github.com/TheJhyeFactor)
* [si1k](https://github.com/si1k)
* [alienatix](https://github.com/alienatix)
* [liotur](https://github.com/liotur)
* [denissajnar-qbit](https://github.com/denissajnar-qbit)
* [Supersaiyan101](https://github.com/Supersaiyan101)
* [frmdstryr](https://github.com/frmdstryr)
* [re-Tick](https://github.com/re-Tick)
* [shivammm21](https://github.com/shivammm21)
* [arturcatao](https://github.com/arturcatao)
* [malugomesp](https://github.com/malugomesp)
* [tommyquak](https://github.com/tommyquak)
* [iyangarcia](https://github.com/iyangarcia)

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 6 authors have pushed 20 commits to main and 20 commits to all branches. On main, 36 files have changed and there have been 1,392 additions and 46 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 7 authors have pushed 78 commits to main and 78 commits to all branches. On main, 1,832 files have changed and there have been 52,037 additions and 3,475 deletions.

A total of [70 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2026-10+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In October 2026, we released updated versions of 25 add-ons:

##### Active scanner rules
**v84**  
Changed
- Update references and CVE links to avoid redirects.
- Adjust stop checks in the Path Traversal scan rule to terminate sooner.

##### Active scanner rules (beta)
**v67**  
Changed
- Dependency update.
- Maintenance changes.
- Update references and CVE links to avoid redirects.

##### Ajax Spider
**v23.33.0**  
Changed
- Maintenance changes.
- Update dependency.
- Include cause of invalid URL in error message of Ajax Spider job.
- Clarify Automation Framework job behaviour when `clickDefaultElems` is false and no `elements` provided.
- Depend on newer version of Selenium add-on.

##### Alert Filters
**v29**  
Fixed
- The tags stored for an alert are no longer lost when the alert is changed by an alert filter.
- The alert tree is no longer updated twice when an alert is changed by an alert filter.

##### Authentication Helper
**v0.43.0**  
Added
- OAuth2 Authentication method, supporting the `client_credentials` and `password` grant types.
- `type` and `count` parameters to the `diagnostics` automation job, to retain only the last failed authentication attempt (`auth_on_failure`) or a rolling window of failures (`auth_failure_rolling`). With `auth_on_failure` only the error step is recorded, with just its screenshot.

Fixed
- Notify authentication successes/failures for browser login and error paths in Browser and Client Script Based Authentication.
- Do not fail the authentication attempt when not able to take a screenshot for diagnostics.
- Collect authentication diagnostics also when authenticating in an existing browser (e.g. modern spiders) with Client Script Based Authentication.

##### Automation Framework
**v0.61.0**  
Added
- Allow to define for how long a plan can run.
- Add support for the HTTP method in the authentication verification (on newer ZAP versions).
- Support the Authentication Helper add-on's `oauth2` authentication method.

Changed
- Adjust columns in plan display after loading a plan.
- Include cause of invalid URL in error message.
- Plan profiles to use clientSpider instead of ajaxSpider.

Fixed
- Correct technology related warning message.

Removed
- The Params automation support was moved into the Params add-on (Issue 9210).

##### Client Side Integration
**v0.34.0**  
Changed
- Updated Chrome and Firefox full extensions to v0.3.0.

**v0.33.0**  
Changed
- Maintenance changes.
- Updated Chrome and Firefox full extensions to v0.2.4.

Fixed
- Ensure the Client Spider stops when the maximum duration is exceeded when no new nodes/components are found (Related to Issue 9471).
- Fix concurrency issue on browser shutdown.

**v0.32.0**  
Added
- Stand in for the AJAX Spider's `spiderAjax` automation job and `ajaxSpider` API, using the Client Spider, when the AJAX Spider add-on is not installed.
- Add `runOnlyIfModern` option to the `spiderClient` automation job, to only run the Client Spider if a "Modern Web Application" alert has been raised.
- Details of diagnostics we need in order to fix client recording/replaying problems.

Changed
- Updated Chrome and Firefox full extensions to v0.2.3.
- Update the Client Spider clear action title capitalization (Issue 2000).
- Depend on newer version of Selenium add-on.
- Adjust log level to reduce log pollution.

Fixed
- Respect spider and global exclusions (Issue 9439).
- Execute Selenium scripts synchronously when the browser is launched (Issue 9472).
- Address exceptions while handling browser extension events and when running the spider.

##### GraphQL Support
**v0.35.0**  
Changed
- Simplify tab names in the Automation Framework job dialogue (Issue 9408).
- Update dependency.

##### Groovy Support
**v5.0.0**  
Changed
- Update Groovy from 5 to 6.  
  Existing Groovy scripts should work without issues,
  but if you encounter problems, please refer to the following:
  - [Groovy 6 Release Notes](https://groovy-lang.org/releasenotes/groovy-6.0.html#Groovy6.0-breaking)

##### HTTPS Info
**v17**  
Changed
- Depend on newer version of Network add-on.
- The HTTPS Configuration scan rule now skips the scan when an outbound proxy (HTTP or SOCKS) is configured.

Fixed
- Example alert code link.

##### Image Location and Privacy Scanner
**v9**  
Changed
- Updated to Image Location and Privacy Scanner version 1.3; merged from [source](https://github.com/veggiespam/ImageLocationScanner)
- Updated dependency Metadata Extractor to 2.21.0
- Unified filtering of false positives, e.g., location or owner name is `-`

Added
- Re-implemented support for XMP image tags, scan many common tags names for privacy leakage
- Support for proprietary DJI Drone camera location & altitude
- Scan additional basic Exif tags for privacy exposure
- Now scan HEIC extension and mimetype

##### Insights
**v0.7.0**  
Added
- The `insights` job now supports an `exitAutoLevel` option (`medium` or `high`) which is preferred to `exitAutoOnHigh`, and is now the field shown in the job dialog. Plans saved by ZAP will use `exitAutoLevel` instead of `exitAutoOnHigh`.

Changed
- Responses with 4xx status codes are now reported at Medium level when the high threshold is exceeded.

**v0.6.0**  
Fixed
- Correct Automation Framework `insights` job template loading.
- MissingResourceException should no longer happen when loading the Insights add-on, and Alert Filters is not installed.

##### LLM Support
**v0.1.0**  
Added
- Automation Framework support, the `llm-config` job configures the LLM providers.

Changed
- Update dependencies.

##### Linux WebDrivers
**v231**  
Changed
- Update ChromeDriver to 156.0.8078.73.

**v230**  
Changed
- Update ChromeDriver to 156.0.8078.47.

**v229**  
Changed
- Update ChromeDriver to 155.0.8059.84.

**v228**  
Changed
- Update ChromeDriver to 155.0.8059.79.

**v227**  
Changed
- Update ChromeDriver to 155.0.8059.39.

##### Network
**v0.32.0**  
Added
- Add-ons can now be notified of requests that fail to send, such as those failing with a DNS error, connection refused or a timeout, so they can record them.

Changed
- Update dependency.

Fixed
- Restore unbounded HTTP/1 response header size/count, regressed since the HTTP client update in version 0.30.0 (Issue 9509).

**v0.31.0**  
Fixed
- Reinstate NTLM authentication (Issue 9498).

**v0.30.0**  
Added
- Allow other add-ons to know if an outbound proxy is enabled.
- Provide own gzip/deflate content encodings.
- Add statistic for socket timeouts.

Changed
- Update dependencies.
- Update CVE link to avoid redirect.
- Update browser background requests.
- Change default log level of HTTP authenticator to error to avoid flooding the logs with warnings caused by negotiation errors.

Fixed
- Preserve existing host header name case when normalizing (Issue 9428).

##### Params
**v0.1.0**  
Added

- Migrated from core.

##### Passive scanner rules
**v77**  
Added
- Server Side Technology Version with Known Vulnerabilities scan rule, which checks technology versions disclosed in response headers against known vulnerabilities, initially PHP versions against the php-src security advisories.

Changed
- Update dependency.

##### Quick Start
**v60**  
Changed
- Default modern spider browser to Firefox headless.

Fixed
- Persist the default browsers by ID instead of by (translatable) name, so the setting is restored correctly when ZAP is not running in English.

##### Retire.js
**v0.67.0**  
Changed
- Updated with upstream retire.js pattern changes.

##### Selenium
**v15.59.0**  
Changed
- Update Selenium to version 4.51.0.

**v15.58.0**  
Changed
- Update Selenium to version 4.50.0.

**v15.57.0**  
Changed
- Allow callers to configure whether Selenium scripts are executed synchronously when the browser is launched.

##### Technology Detection
**v21.58.0**  
Changed
- Updated with enthec upstream icon and pattern changes.
- Dependency update.

##### Token Generation and Analysis
**v17**  
Changed
- Maintenance changes.
- Now depends on the params add-on (Issue 9210).

##### Value Generator
**v6.9.0**  
Changed
- Now depends on the params add-on (Issue 9210).

##### Windows WebDrivers
**v232**  
Changed
- Update ChromeDriver to 156.0.8078.73.

**v231**  
Changed
- Update ChromeDriver to 156.0.8078.47.

**v230**  
Changed
- Update ChromeDriver to 155.0.8059.84.

**v229**  
Changed
- Update ChromeDriver to 155.0.8059.79.

**v228**  
Changed
- Update ChromeDriver to 155.0.8059.39.

##### macOS WebDrivers
**v231**  
Changed
- Update ChromeDriver to 156.0.8078.73.

**v230**  
Changed
- Update ChromeDriver to 156.0.8078.47.

**v229**  
Changed
- Update ChromeDriver to 155.0.8059.84.

**v228**  
Changed
- Update ChromeDriver to 155.0.8059.79.

**v227**  
Changed
- Update ChromeDriver to 155.0.8059.39.


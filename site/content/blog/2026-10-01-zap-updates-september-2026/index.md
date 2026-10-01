---
title: "ZAP Updates - September 2026"
summary: >
  The AJAX Spider and DOM XSS add-ons have now been fully retired from ZAP's nightly and weekly
  releases, and Phase 1 of the new Global Scan Policy Manager has landed behind a dev-mode flag.
images:
- https://www.zaproxy.org/blog/2026-10-01-zap-updates-september-2026/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2026-10-01"
authors:
- zapbot
---

## Highlights

### AJAX Spider and DOM XSS Add-ons Retired

Following [last month's announcement](/blog/2026-09-08-zap-updates-august-2026/), the removal of the **AJAX Spider** and **DOM XSS Active Scan Rule** add-ons from the nightly and weekly (Docker) releases is now complete. The Quickstart tab now defaults to the headless Firefox (Client Spider) crawler, the bundled Automation Framework profiles and the Chrome AF plan have been switched over to the Client Spider, and the core help has been updated to point to the Client Spider instead of the AJAX Spider. Both add-ons remain available from the Marketplace for anyone who still needs them.

### Alert Filter Fixes

A couple of **Alert Filters** bugs reported on the [ZAP User Group](https://groups.google.com/group/zaproxy-users) have been fixed in the latest weekly release: the `deleteGlobalAlerts` option on an Alert Filter job wasn't being persisted when a plan was saved and reloaded, and a new rule defaulted to Directory Browsing was silently invalid (no name shown, no id/name saved, with a warning logged when the job loaded). While tracking those down we also fixed a bug where tags could be lost from filtered alerts, and some related alert-filtering issues in core.

## Ongoing Work

### Global Scan Policy Manager

The **Global Scan Policy Manager (GSPM)** is a new feature we've started building to address a long-standing pain point: ZAP's scan rules are currently configured in several different, disconnected places. Passive scan rules have their own configuration, active scan rules are configured via scan policies, WebSocket passive scripts are managed separately again, and the [OWASP PTK](/docs/desktop/addons/owasp-ptk/) rules have their own setup too. The GSPM's goal is to give you one place to configure all of ZAP's scan rules, regardless of which add-on or mechanism implements them.

Phase 1 has now landed in the weekly release. It doesn't provide a fully working feature yet - it's only reachable via a new Global Scan Policy dialog in dev mode - but it lays the groundwork: integration with the HTTP passive and active scan rules, policy migration from the old per-context scan policies, support for script-based active and passive scan rules (appearing under their category, or under passive / Server Side), and the plugin listeners needed for active scan scripts. WebSocket and PTK scan rules will be brought into the GSPM in future phases. It's planned to be included in the next full ZAP release, which is hopefully coming soon.

### OAuth 2.0 Support

We're also working on adding **OAuth 2.0 Support** as a new authentication method in the [Authentication Helper](/docs/desktop/addons/authentication-helper/) add-on (not yet merged). It obtains an access token directly from a token endpoint, without needing a browser, currently supporting the `client_credentials` and `password` (Resource Owner Password Credentials) grant types, with automatic refresh token handling, configurable client authentication, and autodetection of session management and verification.

This only covers the non-interactive grant types so far, and we'd like your feedback: what OAuth 2.0 support would be most useful to you? For example, would you need the browser-driven `authorization_code` flow (with or without PKCE), device code flow, support for a particular identity provider, or something else entirely? Let us know on the [ZAP User Group](https://groups.google.com/group/zaproxy-users).

## New Contributors
A very warm welcome to the people who started to contribute to ZAP this month!

* [FediJlassi](https://github.com/FediJlassi)
* [hideintheclouds](https://github.com/hideintheclouds)
* [henrocdotnet](https://github.com/henrocdotnet)
* [silverskyvicto](https://github.com/silverskyvicto)
* [jowilb](https://github.com/jowilb)
* [viru0909-dev](https://github.com/viru0909-dev)
* [harpind3r](https://github.com/harpind3r)
* [mifnaufal](https://github.com/mifnaufal)
* [Yeagerist0](https://github.com/Yeagerist0)

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 6 authors have pushed 15 commits to main and 24 commits to all branches. On main, 77 files have changed and there have been 1,633 additions and 289 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 9 authors have pushed 80 commits to main and 81 commits to all branches. On main, 655 files have changed and there have been 13,038 additions and 6,495 deletions.

A total of [55 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2026-09+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In September 2026, we released updated versions of 8 add-ons:

##### Alert Filters
**v28**  
Fixed
- The `alertFilter` automation framework job now correctly reads the `deleteGlobalAlerts` parameter.
- Defaulting a new automation framework job rule to Directory Browsing (0) correctly recorded.

##### Linux WebDrivers
**v226**  
Changed
- Update ChromeDriver to 154.0.8037.92.

**v225**  
Changed
- Update ChromeDriver to 154.0.8037.57.

**v224**  
Changed
- Update ChromeDriver to 153.0.8010.52.

**v223**  
Changed
- Update ChromeDriver to 153.0.8010.47.

**v222**  
Changed
- Update ChromeDriver to 153.0.8010.36.

**v221**  
Changed
- Update ChromeDriver to 152.0.7977.82.

**v220**  
Changed
- Update ChromeDriver to 152.0.7977.75.

##### OAST Support
**v0.26.0**  
Fixed
- An alert registered after its request was sent is now raised when its OAST payload is called back, instead of being dropped.

##### Passive scanner rules
**v76**  
Changed
- Content Security Policy scan rule analyzes all active CSP headers and META policies together using browser-style intersection (Issue 9403).
- Update dependency.
- Update reference to avoid redirect.
- Updated help entries for the following scan rules, clarifying the data used to supplement their alerts for credit card related findings:
  - Information Disclosure: Referrer
  - PII Disclosure

Fixed
- User Controllable HTML Element Attribute scan rule: reduce false positives for short parameter values in meta content checks (Issue 9461).

Removed
- CSP "Header & Meta" alert (10055-12) is no longer raised.

##### Retire.js
**v0.66.0**  
Changed
- Updated with upstream retire.js pattern changes.

**v0.65.0**  
Changed
- Updated with upstream retire.js pattern changes.

##### Selenium
**v15.56.0**  
Changed
- Update Selenium to version 4.49.0.

**v15.55.0**  
Changed
- Update HtmlUnit driver (Issue 9313).
- Update Selenium to version 4.48.0.

##### Windows WebDrivers
**v227**  
Changed
- Update ChromeDriver to 154.0.8037.92.

**v226**  
Changed
- Update ChromeDriver to 154.0.8037.57.

**v225**  
Changed
- Update ChromeDriver to 153.0.8010.52.

**v224**  
Changed
- Update ChromeDriver to 153.0.8010.47.

**v223**  
Changed
- Update ChromeDriver to 153.0.8010.36.

**v222**  
Changed
- Update ChromeDriver to 152.0.7977.82.

**v221**  
Changed
- Update ChromeDriver to 152.0.7977.75.

##### macOS WebDrivers
**v226**  
Changed
- Update ChromeDriver to 154.0.8037.92.

**v225**  
Changed
- Update ChromeDriver to 154.0.8037.57.

**v224**  
Changed
- Update ChromeDriver to 153.0.8010.52.

**v223**  
Changed
- Update ChromeDriver to 153.0.8010.47.

**v222**  
Changed
- Update ChromeDriver to 153.0.8010.36.

**v221**  
Changed
- Update ChromeDriver to 152.0.7977.82.

**v220**  
Changed
- Update ChromeDriver to 152.0.7977.75.


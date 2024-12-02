---
title: "ZAP Updates - November 2024"
summary: >
  A brand new Scan Policies add-on, how to integrate ZAP with OWASP Noir and ZAP 2.16.0 is getting very close..
images:
- https://www.zaproxy.org/blog/2024-12-02-zap-updates-november-2024/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2024-12-02"
authors:
- simon
---

## Highlights

### Scan Policies Add-On

This month we released a new [Scan Policies](/docs/desktop/addons/scan-policies/) add-on which provides a set of
Scan Policies tuned for different purposes.

This will be included as standard in 2.16.0 but you can try it out on 2.15.0, and it is also included in the 
[weekly and nightly](/download/#docker) releases.

We would love to hear your [feedback](https://groups.google.com/g/zaproxy-users/c/Sa-9L9lSYd4/m/7wae8ilSAAAJ) on them!

### Using Noir with ZAP

Are you having problems getting ZAP to detect your application endpoints?

If so you should see the [Powering Up DAST with ZAP and Noir](/blog/2024-11-11-powering-up-dast-with-zap-and-noir/)
blog post, which explains how you can use [OWASP Noir](https://owasp.org/www-project-noir/) to find endpoints in your
source code and then generate an OpenAPI definition which you can feed into ZAP.

### Community Links

We updated the [ZAP Team](/docs/team/) pages to include all of the social accounts used for the 
[ZAP project](/docs/team/zaproxy/) and to include the ZAP Product Manager: [Antero Silva](/docs/team/antero/).

## Ongoing Work

### 2.16.0 Coming Very Soon

The next full ZAP release, 2.16.0 is coming very soon!
You can follow the [Release 2.16](https://github.com/zaproxy/zaproxy/issues/8706) tracker issue to see exactly how it is progressing.

## New Contributors
A very warm welcome to the people who started to contribute to ZAP this month!

* [Dragos-Stefan Necula](https://dragosstefannecula.co.uk)

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


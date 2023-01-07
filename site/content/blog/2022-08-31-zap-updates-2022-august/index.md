---
title: "ZAP Updates 2022 August"
summary: >
  All of the things that have been happening related to ZAP in August 2022.
images:
- https://www.zaproxy.org/blog/2022-08-31-zap-updates-2022-august/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2022-08-31"
authors: 
    - simon
---

Lots of things are going on with ZAP but I've realised that many of you will not be aware of all of them.

So here is a summary of what has been going on this month - let us know if you find this useful, 
if it is then this could become a regular feature :grin:.

### ZAP Version 2.12.0 - Coming Soon

On 19th August we [announced](https://groups.google.com/g/zaproxy-users/c/2HTkM5fXTEg/m/9HstqC_fAAAJ) 
that the next major version of ZAP, 2.12.0, will be "coming soon".
There's no exact date yet, but most of the changes are already in the weekly releases, so download the most recent one if you want to see what it will look like.

### New Add-on: Param Digger

This month saw the first release and associated [blog post](/blog/2022-08-22-the-param-digger-addon/) 
for the [Param Digger](/docs/desktop/addons/parameter-digger/) add-on.
This is being developed by [Arkaprabha Chakraborty](https://twitter.com/FValkyrie_17) as part of Google Summer of Code 2022.

### Stats

Statistics from the 2 main ZAP repos.

#### [zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)

Excluding merges, 7 authors have pushed 18 commits to main and 18 commits to all branches. 
On main, 324 files have changed and there have been 3,438 additions and 1,047 deletions. 

#### [zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)

Excluding merges, 10 authors have pushed 70 commits to main and 70 commits to all branches. 
On main, 1,015 files have changed and there have been 22,725 additions and 2,555 deletions. 
### Ongoing Work

#### Networking

Work to upgrade the ZAP networking stack to support modern protocols is ongoing.
The next phase will add initial support for HTTP/2 - this is a significant change and we expect this to be merged after
2.12.0 has been released.

#### Spider Migration to an Add-on

The traditional spider has been moved from the core into the 
[zap-extensions](https://github.com/zaproxy/zap-extensions/tree/main/addOns/spider) repo.
This will allow us to update the spider without requiring a full ZAP release.

For more details see the [Spider News](/blog/2022-08-30-spider-move/) blog post.

#### Modern Web App Handling

We do know that ZAP could handle modern web apps better.
Work is going on to make this happen, but it is not publicly available at this time.

#### ZAP vs OWASP Benchmark

ZAP is run against a set of test applications every day - for more details see the [Test Scans](/docs/scans/) page.

This month [OWASP Benchmark](https://owasp.org/www-project-benchmark/) was added to that list.
Initially we are just testing ZAP vs the Command Injection vulnerabilities but we will be expanding support to cover 
all of the relevant tests a.s.a.p.

For more details see [ZAP vs OWASP Benchmark](/docs/scans/benchmark/).

#### HUD Problems on Firefox

Unfortunately the [ZAP HUD](https://github.com/zaproxy/zap-hud/) is no longer working with the latest versions of Firefox.
This is due to recent Firefox changes, the HUD still works with Chrome.
We are trying to fix this problem but it is non trivial - more details in the issue [#1135](https://github.com/zaproxy/zap-hud/issues/1135).

#### Install / Update Add-on First In Automation

The core has been changed to ensure that any add-ons installed or updated from the 
[command line](/docs/desktop/cmdline/) are processed first.
This means that it will now be possible to use command line options for newly installed add-ons, 
and for those add-ons to be correctly used in an [Automation Framework](/docs/automate/automation-framework/) plan.

#### ZAP Test Scans

ZAP now scores __80%__ against [Google Security Crawl Maze](/docs/scans/crawlmaze/), up from 73%.

When we first started testing ZAP against Crawl Maze in March 2022 it only scored 50% so you can see how it has improved.

#### Website Updates

The following new pages were added:

* Blog: [Running ZAP on a raspberry pi](/blog/2022-08-25-zap-on-raspberry-pi/)
* Blog: [The Param Digger Add-on GSOC 2022](/blog/2022-08-22-the-param-digger-addon/) as mentioned above
* Test Scan: [OWASP Benchmark](/docs/scans/benchmark) as mentioned above
* FAQ: [How can you import POST requests?](/faq/how-can-you-import-post-requests/)
* Auth: [Documented SSO Solutions](/docs/authentication/documented-sso-solutions/)

#### Weekly / Live - Alert Issue

On August 24th we became aware of an issue in the recent weekly and live releases.
The problem only appears to have occurred when reading alerts from the Sites tree - as far as we aware the reports should have been generated correctly.
This seems to have affected passive scan results more than active scan ones.
We have fixed the issue and have re-released the weekly and live versions.
If you are using either of these releases we strongly recommend that you update them now.

### New Supporters

* [Marcel Patzelt](https://twitter.com/blinkZ03272259) : new Silver Supporter
* [CREST](https://www.crest-approved.org/) : new Bronze Supporter

### New Third Party Products and Courses

* [Rekono](https://github.com/pablosnt/rekono) : new free, open source project
* [NamicSoft](https://www.nucleussec.com/integrations) : new commercial integration
* [Everable - Automated DAST in CI/CD using OWASP ZAP](https://app.everable.com/course-information/8) : new commercial course

### Updated Add-ons

##### Parameter Digger version 0.1.0

Changed
- Rename multiple options in GUI and documentation.

##### Parameter Miner version 0.0.1

- First version.

##### Active scanner rules version 47

Added
- Cross Site Scripting header splitting attacks.
- The External Redirect scan rule now includes alert references on Alerts, and has example alert functionality for documentation generation purposes.

Changed
- Maintenance changes.
- Updated the External Redirect scan rule to be more accurate.
- The Reflected XSS scan rule now generates alerts for all content-types when alert threshold set to LOW. If alert threshold MEDIUM or HIGH, alerts are raised for HTML responses only.

Fixed
- The Remote File Inclusion scan rule no longer follows redirects before checking the response for content indicating a vulnerability (Issue 5887).
- False positive where Cross Site Scripting payloads are safely rendered in a textarea tag.
- Unescaped tag end causing Cross Site Scripting rule to throw an exception.

##### Wappalyzer - Technology Detection version 21.12.0

Changed
- Maintenance changes.
- Updated with upstream Wappalyzer icon and pattern changes.

##### Retire.js version 0.14.0

Changed
- Updated with upstream retire.js pattern changes.

##### Windows WebDrivers version 42

Changed
- Update ChromeDriver to 104.0.5112.79.

##### MacOS WebDrivers version 43

Changed
- Update ChromeDriver to 104.0.5112.79.

##### Linux WebDrivers version 42

Changed
- Update ChromeDriver to 104.0.5112.79.

##### Ajax Spider version 23.8.0

Added
- Missing 'user' param in the Automation Framework help

Changed
- Update minimum ZAP version to 2.11.1.
- Use Network add-on to proxy Crawljax/browser requests.
- Maintenance changes.

Fixed
- Stop the spider scans when ZAP shuts down ([Issue #6643](https://github.com/zaproxy/zaproxy/issues/6643)).

##### Retire.js version 0.13.0

Changed
- Updated with upstream retire.js pattern changes.
- Performance improvements (Issue 6959).
- Add Retire.js reference to the Rule name to make it more obvious in the options panel.

##### DOM XSS Active scanner rule version 13

Added
- OWASP Web Security Testing Guide v4.2 mappings.

Changed
- Update minimum ZAP version to 2.11.1.
- Use Network add-on to proxy browser requests.

Fixed
- Stop the proxy when ZAP shuts down.



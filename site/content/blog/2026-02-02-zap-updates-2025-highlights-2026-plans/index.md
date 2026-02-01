---
title: "ZAP Updates - 2025 Highlights and Plans for 2026"
summary: >
  Highlights of 2025 and our initial plans for 2026, including more 3rd Party tool integrations, enhanced exploring and, yes, AI integration!
images:
- https://www.zaproxy.org/blog/2026-02-02-zap-updates-2025-highlights-2026-plans/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2026-02-02"
authors:
- simon
---

## Highlights of 2025

2025 was a big year for us, and the first full year in which we had 3 people working on ZAP thanks to [Checkmarx](https://checkmarx.com/).
Not surprisingly we made a lot of progress!

### Authentication Handling Improvements

A major focus area for ZAP in 2025 was enhancing authentication support — a frequent challenge for dynamic application security testing tools. Over the last year and into 2026 the ZAP team has made numerous improvements to make authentication flows easier to configure, more reliable, and more diagnosable.

#### Easier Browser-Based Authentication

Rather than relying solely on manual form scripting or basic methods, ZAP’s Browser Based Authentication was made more robust and reliable. It can now:

* Automatically fill in login forms even if they’re not directly linked from a fixed URL.
* Work across multi-screen login flows.
* Handle manual authentication steps for complex scenarios.
* Support TOTP (time-based one-time password) fields in authentication steps.

#### Client Script Authentication

ZAP introduced a Client Script Authentication method based around client-side Zest scripts — which can be recorded and replayed from a browser. This is more flexible than old script-based authentication and integrates well with the Browser Based approach.

#### Improved Auto-Detection and Session Handling

Work continued to improve auto-detection of session tokens, session maintenance, logout avoidance options for spiders, and verification URL detection — all to ensure ZAP can stay authenticated throughout crawling and scanning without constantly falling out of session.

#### Authentication Diagnostics and Reporting

To help troubleshoot authentication issues (which can be notoriously hard to debug), ZAP now offers a detailed Authentication Report, including:

* Screenshots of login flows
* HTTP traffic logs
* Web element and local/session storage information

These diagnostics make it far easier to pinpoint problems with complex authentication flows when running automated scans.

These improvements reflect multi-month effort and receive enhancements in add-ons like Authentication Helper and Automation Framework, which have steadily added better reporting, detection, and control.

### ZAP 2.17.0 — Enhancing Core Scanning Intelligence

The flagship ZAP 2.17.0 release, finalized around late 2025 and being quickly adopted in 2026, continues to underpin much of the project’s progress:

#### Smarter Alerts and Performance

* Alert de-duplication cuts down noise by consolidating similar findings into a single actionable alert.
* Performance optimisations reduce unnecessary persistence, particularly in headless/CI workflows.
* Improved handling of disk and memory constraints enhances reliability.

These changes streamline both interactive and automated security testing — making ZAP results more usable in development, QA, and continuous delivery environments.

### Ongoing Feature Expansion and Ecosystem Growth

The months leading up to 2026 saw several meaningful enhancements:

* Policy-based alert tagging makes policy configuration cleaner for Automation Framework plans.
* WAVSEP adoption strengthens scanner benchmarking and evaluation.
* Continued improvements in spiders, client integration, and add-on publishing workflows expand the ZAP ecosystem and lower the barrier to contributing.

#### Community and Knowledge Sharing

Beyond code, the ZAP Blog remains a key resource for:

* In-depth technical explorations
* Guides on using ZAP with modern frameworks
* Practical walkthroughs and examples

This ongoing knowledge-sharing amplifies the impact of feature development and helps users get the most from ZAP’s expanding capabilities.

## Plans for 2026

### 3rd Party Browser Tool Integration

ZAP continues to be a cornerstone of open-source web application security testing.
It has always played well with 3rd party projects, and in 2025 we started working closely with some 3rd party OSS projects
which run in the browser.

#### OWASP PTK

The [Integration with OWASP PTK](/blog/2026-01-19-owasp-ptk-add-on/) guest blog post earlier this month got significant attention online, much more that we anticipated!

The new [OWASP PTK](/docs/desktop/addons/owasp-ptk/) add-on preinstalls the PTK extension in the browsers ZAP launches (Chrome, Edge, and Firefox). This unlocks the ability to run DAST, IAST, SAST, and SCA inside the same authenticated session — all while keeping ZAP as the central traffic and context hub.

This is actually just the first step in the integration we have planned, so look out for more announcements soon.

#### Foxhound

We also have a new [Foxhound](/docs/desktop/addons/foxhound/) add-on which provides initial integrations with the 
[Foxhound](https://github.com/SAP/project-foxhound) project.
Thomas Barber and his team [demonstrated this at the Black Hat Arsenal](https://www.linkedin.com/feed/update/urn:li:activity:7404847685364846592/) last month.

Again, this is just the first step in this integration, so expect more announcements and blog posts.

### Exploring Improvements

Last year we focused on authentication. After all, if you cannot authenticate to an application then you cannot test it.

This year exploring applications more effectively will be a key focus for the ZAP project. 

We’ll be investing in improving how ZAP discovers and navigates modern applications, with particular emphasis on enhancing the [Client Spider](/docs/desktop/addons/client-side-integration/spider/) so it can better handle complex, JavaScript-heavy user interfaces and dynamic workflows. 

Alongside this, we’ll be expanding support for _guided scans_, allowing users to record business flows 
that are difficult to explore using fully automated approaches alone.

Together, these improvements aim to make it easier to achieve deeper, more reliable coverage of real-world applications.

### AI Integration

Yes, we have already started adding AI integration into ZAP.

We do understand that some of you may be very anti-AI, especially in security tools, so this will be optional and *opt-in*.

You will be in charge of whether ZAP uses any AI at all, if you do enable it then which LLMs it will connect to, and which models it will use.

We have lots of plans and ideas, but we would be very interested in what sort of AI integrations you would like to see in ZAP.

Let us know via this [ZAP User Group](https://groups.google.com/g/zaproxy-users/c/GCJdJnAVAgw/m/DfjbDYiqAQAJ) thread!

## New Contributors
A very warm welcome to the people who started to contribute to ZAP over the last couple of months!

* [leeN](https://github.com/leeN)
* [SumukhKV](https://github.com/SumukhKV)
* [tmbrbr](https://github.com/tmbrbr)
* [rmtsixq](https://github.com/rmtsixq)
* [preksah](https://github.com/preksah)
* [NANDGOPALSHARMA-29](https://github.com/NANDGOPALSHARMA-29)
* [7amed3li](https://github.com/7amed3li)
* [YASHvardhanVashistha](https://github.com/YASHvardhanVashistha)
* [chenjingen-jane](https://github.com/chenjingen-jane)
* [4ravind-b](https://github.com/4ravind-b)
* [ritorhymes](https://github.com/ritorhymes)
* [AshharAhmadKhan](https://github.com/AshharAhmadKhan)


## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 4 authors have pushed 11 commits to main and 11 commits to all branches. On main, 103 files have changed and there have been 261 additions and 25,846 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 9 authors have pushed 61 commits to main and 61 commits to all branches. On main, 569 files have changed and there have been 11,163 additions and 1,609 deletions.

A total of [52 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2026-01+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In January 2026, we released updated versions of 6 add-ons:

##### GraalVM JavaScript
**v0.13.0**  
Changed
- Update dependencies.

Fixed
- Close script engine when no longer in use (Issue 9230).

##### Linux WebDrivers
**v176**  
Changed
- Update ChromeDriver to 145.0.7632.26.

**v175**  
Changed
- Update ChromeDriver to 144.0.7559.109.

**v174**  
Changed
- Update ChromeDriver to 144.0.7559.96.

**v173**  
Changed
- Update ChromeDriver to 144.0.7559.59.

**v172**  
Changed
- Update ChromeDriver to 143.0.7499.192.

##### OpenAPI Support
**v51**  
Changed
- Disable Swagger Secret Detector Script Scan Rule by default due to JS Engine memory leak (Issue 9230).

**v50**  
Added
- Swagger Secret Detector Script Scan Rule.

**v49**  
Added
- Added an optional LLM extension for importing OpenAPI definitions.
- Initial support for OpenAPI 3.1 definitions.

Changed
- Dependency update.

##### Retire.js
**v0.53.0**  
Changed
- Updated with upstream retire.js pattern changes.
- Update minimum ZAP version to 2.17.0.

##### Windows WebDrivers
**v177**  
Changed
- Update ChromeDriver to 145.0.7632.26.

**v176**  
Changed
- Update ChromeDriver to 144.0.7559.109.

**v175**  
Changed
- Update ChromeDriver to 144.0.7559.96.

**v174**  
Changed
- Update ChromeDriver to 144.0.7559.59.

**v173**  
Changed
- Update ChromeDriver to 143.0.7499.192.

##### macOS WebDrivers
**v176**  
Changed
- Update ChromeDriver to 145.0.7632.26.

**v175**  
Changed
- Update ChromeDriver to 144.0.7559.109.

**v174**  
Changed
- Update ChromeDriver to 144.0.7559.96.

**v173**  
Changed
- Update ChromeDriver to 144.0.7559.59.

**v172**  
Changed
- Update ChromeDriver to 143.0.7499.192.


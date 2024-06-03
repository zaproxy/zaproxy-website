---
title: "ZAP Updates - May 2024"
summary: >
  It was another "full release" month, with 2.15.0 and a brand new add-on for gRPC support.
images:
- https://www.zaproxy.org/blog/2024-06-03-zap-updates-may-2024/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2024-06-03"
authors:
- simon
---

## Highlights

### ZAP 2.15.0

Early in May we released [2.15.0](/blog/2024-05-07-zap-2-15-0/), which means we are still performing around 2 full ZAP
releases per year.

Soon after the release we received a report that Microsoft Defender was flagging the ZAP exe as having a potential problem,
which led to us adding this FAQ: [Why does my Antivirus Tool Flag ZAP?](/faq/why-does-my-antivirus-tool-flag-zap/)

We also contacted the [Microsoft Security Response Center](https://www.microsoft.com/en-us/msrc) and I'm pleased to say they were very prompt at
investigating and fixing the false positive.

### gRPC add-on

We also released a new [gRPC add-on](/blog/2024-05-21-introducing-the-grpc-addon/) - 
try it out and let us know how you get on with it.

As a result of his hard work on this add-on [Amit](/docs/team/amit/) has been promoted to the ZAP Extended Team - well done Amit!

## Ongoing Work

### Funding

Funding is still a significant focus for us, and there is a lot going on behind the scenes. 
Hopefully we will be able to share some news with you before too long.

## New Contributors

A very warm welcome to the people who started to contribute to ZAP this month!

* [Yannickvr](https://github.com/yannickvr)
* [Moeez Ahmed](https://github.com/Moeez905)

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 5 authors have pushed 18 commits to main and 18 commits to all branches. On main, 67 files have changed and there have been 2,337 additions and 1,219 deletions. 

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 8 authors have pushed 70 commits to main and 70 commits to all branches. On main, 2,892 files have changed and there have been 59,421 additions and 15,859 deletions. 

A total of [71 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2024-03+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released add-ons - Full Changelog
In May 2024, we released updated versions of 47 add-ons:

##### Active scanner rules
**v66**  
Changed
- Update minimum ZAP version to 2.15.0.

##### Ajax Spider
**v23.19.0**  
Added
- Video link in help for Automation Framework job.
- Support for menu weights (Issue 8369)

Changed
- Update minimum ZAP version to 2.15.0.
- Maintenance changes.

Fixed
- A typo in an API end-point description.

##### Alert Filters
**v21**  
Changed
- Update minimum ZAP version to 2.15.0.

##### Authentication Helper
**v0.13.0**  
Changed
- Update minimum ZAP version to 2.15.0.
- Maintenance changes.

##### Automation Framework
**v0.40.1**  
Fixed
- Address HTTP authentication failure when the realm is not configured.

**v0.40.0**  
Changed
- Update minimum ZAP version to 2.15.0.

##### Call Home
**v0.12.0**  
Changed
- Update minimum ZAP version to 2.15.0.

##### Common Library
**v1.26.0**  
Added
- Include the Jackson Datatype: JSR310 library for other add-ons to use.

**v1.25.0**  
Added
- Support for code and help links for script scan rules.
Changed
- Update minimum ZAP version to 2.15.0.
- Maintenance changes.

##### DOM XSS Active scanner rule
**v19**  
Changed
- Update minimum ZAP version to 2.15.0.
- Maintenance changes.

##### Database
**v0.4.0**  
Changed
- Update minimum ZAP version to 2.15.0.

##### Diff
**v15**  
Added
- Support for menu weights (Issue 8369).

Changed
- Update minimum ZAP version to 2.15.0.
- Maintenance changes.

##### Directory List v1.0
**v8**  
Changed
- Update minimum ZAP version to 2.15.0.

##### Encoder
**v1.5.0**  
Added
- Support for menu weights (Issue 8369)
Changed
- Update minimum ZAP version to 2.15.0.
- Maintenance changes.

##### Forced Browse
**v16**  
Added
- Support for menu weights (Issue 8369).

Changed
- Update minimum ZAP version to 2.15.0.
- Maintenance changes.

Fixed
- Help content typos.

##### Fuzzer
**v13.13.0**  
Added
- Support for menu weights (Issue 8369)
Changed
- Update minimum ZAP version to 2.15.0.
- Maintenance changes.

##### Getting Started with ZAP Guide
**v17**  
Changed
- Update Getting Started Guide for 2.15.0.

##### GraalVM JavaScript
**v0.7.0**  
Changed
- Update minimum ZAP version to 2.15.0.
- Disable warns about the engine being executed in interpreter mode, that's the expected mode of execution.

##### GraphQL Support
**v0.24.0**  
Changed
- Update minimum ZAP version to 2.15.0.
- Dependency updates.

##### Import/Export
**v0.9.0**  
Added
- Initial PCAP import support (Issue 4812).
- Support for menu weights (Issue 8369)

Changed
- Update minimum ZAP version to 2.15.0.
- Maintenance changes.

##### Invoke Applications
**v15**  
Changed
- Update minimum ZAP version to 2.15.0.

Added
- Support for menu weights (Issue 8369)

##### Linux WebDrivers
**v89**  
Changed
- Update ChromeDriver to 125.0.6422.141.

**v88**  
Changed
- Update ChromeDriver to 125.0.6422.78.

**v87**  
Changed
- Update ChromeDriver to 125.0.6422.76.

**v86**  
Changed
- Update ChromeDriver to 125.0.6422.60.

**v85**  
Changed
- Update ChromeDriver to 124.0.6367.207.

**v84**  
Changed
- Update ChromeDriver to 124.0.6367.201.

**v83**  
Changed
- Update ChromeDriver to 124.0.6367.155.

**v82**  
Changed
- Update minimum ZAP version to 2.15.0.

##### MacOS WebDrivers
**v89**  
Changed
- Update ChromeDriver to 125.0.6422.141.

**v88**  
Changed
- Update ChromeDriver to 125.0.6422.78.

**v87**  
Changed
- Update ChromeDriver to 125.0.6422.76.

**v86**  
Changed
- Update ChromeDriver to 125.0.6422.60.

**v85**  
Changed
- Update ChromeDriver to 124.0.6367.207.

**v84**  
Changed
- Update ChromeDriver to 124.0.6367.201.

**v83**  
Changed
- Update ChromeDriver to 124.0.6367.155.

**v82**  
Changed
- Update minimum ZAP version to 2.15.0.

##### Network
**v0.16.0**  
Changed
- Update minimum ZAP version to 2.15.0.
- Update default user-agents.

Fixed
- Help content typos.

##### OAST Support
**v0.18.0**  
Changed
- Update minimum ZAP version to 2.15.0.
- Maintenance changes.

##### Online menus
**v13**  
Changed
- Update minimum ZAP version to 2.15.0.

##### OpenAPI Support
**v41**  
Changed
- Rely on Common Library add-on for use of Jackson library.

**v40**  
Changed
- Update minimum ZAP version to 2.15.0.
- Maintenance changes.
- Dependency updates.

##### Passive scanner rules
**v58**  
Changed
- Update minimum ZAP version to 2.15.0.
- The library (htmlunit-csp) used by the Content Security Policy scan rule was updated to v4.0.0, which includes support for the wasm-unsafe-eval source expression.

Fixed
- A typo in the Other Info of one of the Retrieved from Cache Alerts.

##### Postman Support
**v0.4.0**  
Changed
- Update minimum ZAP version to 2.15.0.

##### Quick Start
**v47**  
Changed
- Update minimum ZAP version to 2.15.0.

Fixed
- Sub panel names.

##### Replacer
**v18**  
Added
- Rules to disable Caching (Issue 8437).

**v17**  
Changed
- Update minimum ZAP version to 2.15.0.

Added
- Video link in help for Automation Framework job.
- A rule to disable CSP reporting (Issue 740).

##### Report Generation
**v0.32.0**  
Changed
- Update minimum ZAP version to 2.15.0.
- The following reports now include the number of Sites tree nodes actively scanned:
  - Traditional HTML with Requests and Responses

##### Requester
**v7.6.0**  
Changed
- Update minimum ZAP version to 2.15.0.

##### Retest
**v0.9.0**  
Changed
- Update minimum ZAP version to 2.15.0.
- Maintenance changes.

##### Retire.js
**v0.36.0**  
Changed
- Updated with upstream retire.js pattern changes.

**v0.35.0**  
Changed
- Update minimum ZAP version to 2.15.0.
- Updated with upstream retire.js pattern changes.

##### Reveal
**v8**  
Changed
- Update minimum ZAP version to 2.15.0.

##### SOAP Support
**v23**  
Changed
- Update minimum ZAP version to 2.15.0.

##### Script Console
**v45.4.0**  
Added
- Support for Automation Framework loaddir action, which loads all of the scripts under the specified directory.

Changed
- File parameter to `source`, `file` will still work.

**v45.3.0**  
Added
- Support for code and help links for script scan rules.

Changed
- Update minimum ZAP version to 2.15.0.
- Allow to set raw parameter values from Active Rules, by calling `as.setEscapedParam(HttpMessage msg, String param, String value)`.

##### Selenium
**v15.25.0**  
Changed
- Ensure the specified WebDriver is executable always.

**v15.24.0**  
Changed
- Update Selenium to version 4.21.0.

**v15.23.0**  
Changed
- Update minimum ZAP version to 2.15.0.

##### Server-Sent Events
**v13**  
Changed
- Update minimum ZAP version to 2.15.0.
- Maintenance changes.

Fixed
- More gracefully handle missing value for "id" field (Issue 8320)

##### Spider
**v0.11.0**  
Changed
- Update minimum ZAP version to 2.15.0.

Added
- Support for menu weights (Issue 8369)
Fixed
- Fix grammatical error in help content.

##### Technology Detection
**v21.38.0**  
Changed
- Updated with enthec upstream icon and pattern changes.

**v21.37.0**  
Changed
- Update minimum ZAP version to 2.15.0.
- Updated with enthec upstream icon and pattern changes.
- Maintenance changes (standardize on "Technology Detection" naming).

##### Tips and Tricks
**v13**  
Changed
- Update minimum ZAP version to 2.15.0.

##### Value Generator
**v6.6.0**  
Changed
- Update minimum ZAP version to 2.15.0.

##### Wappalyzer - Technology Detection
**v21.36.0**  
Fixed
- Implemented a change to address a resource contention issue when loading Tech Detection details (Issue 8464).

Changed
- Suppress further un-helpful messages from the jsvg library logger.

##### WebSockets
**v31**  
Added
- Support for menu weights (Issue 8369)
Changed
- Update minimum ZAP version to 2.15.0.
- Maintenance changes.

##### Windows WebDrivers
**v89**  
Changed
- Update ChromeDriver to 125.0.6422.141.

**v88**  
Changed
- Update ChromeDriver to 125.0.6422.78.

**v87**  
Changed
- Update ChromeDriver to 125.0.6422.76.

**v86**  
Changed
- Update ChromeDriver to 125.0.6422.60.

**v85**  
Changed
- Update ChromeDriver to 124.0.6367.207.

**v84**  
Changed
- Update ChromeDriver to 124.0.6367.201.

**v83**  
Changed
- Update ChromeDriver to 124.0.6367.155.

**v82**  
Changed
- Update minimum ZAP version to 2.15.0.

##### Zest - Graphical Security Scripting Language
**v45**  
Changed
- Update minimum ZAP version to 2.15.0.
- Update Zest library to 0.21.0:
  - Update Selenium to version 4.20.0.
  - Update HtmlUnit to major version 3.

##### gRPC Support
**v0.0.1**  
Added
- Features
  - ProtoBuf Message Decoding and Encoding in the message view panels.

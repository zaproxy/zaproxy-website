---
title: "ZAP Updates - October 2024"
summary: >
  ZAP Updates are back after a small break.
  Read about the updates from October, including an upgrade to Java 17, scanning of sequenced requests, a potential LLM integration, and more.
images:
- https://www.zaproxy.org/blog/2024-11-01-zap-updates-october-2024/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2024-11-01"
authors:
- akshath
---

It's been a while since the last monthly update, but we're back with the latest ZAP news! Here's everything that happened in October 2024.

## Highlights

### Java Version Upgrade
The minimum Java version needed to build and use ZAP has been changed to Java 17.
The weekly cross platform package, and the nightly and weekly Docker images are now using Java 17.
Support for Java 11 will be dropped soon and the next stable release of ZAP will also use a minimum of Java 17.

### Improved Passive Script Rules Performance
Passive scripts are now cached for all passive scan threads and they are not recompiled for each thread.
In addition, a few concurrency issues were fixed when the Graal.js engine was used with passive scripts.

### Introduction of Lombok into zap-extensions
Lombok was added into the zap-extensions repository and the developer docs were updated with references on setting it up.
We are hoping this will help in reducing boilerplate code and make the codebase more maintainable.

## Ongoing Work

### Sequenced Requests
A lot of interesting work is being done on the scanning and reporting of sequences of requests.
This is expected to be useful for applications where the response of one request is dependent on the previous request.
For example, in an e-commerce application, adding an item to the cart and then checking out.

### LLM Integration
A new contributor is currently working on integrating LLM APIs with ZAP.
The idea is to allow users to enhance existing ZAP functionality and features using LLMs in a way that makes sense.
Some examples include automatically marking alerts as false positives, or determining a sensible sequence of requests using an OpenAPI definition.

### Incremental Add-on Updates
A lot of exciting updates across add-ons are in the pipeline.
- New GraphQL fingerprinting checks were added for a few engines
- A new "ASCIfy" encoder was added to strip all non-ASCII characters from selected strings
- Automation framework enhancements like simplified YAML plans, and some cool new automation jobs

## Join the Discussion

### ZAP Scan Policies

We are considering including a default set of Active Scan Policies with ZAP as part of a new add-on.
These will define the scan rules and associated strengths and thresholds that we recommend using in different situations.
For example, sets of policies for different types of ZAP users, e.g. Developers or QA testers, or policies that include rules defined by popular standards like the OWASP Top 10 or Google CASA.

Read the full discussion and share your thoughts on the [ZAP User Group](https://groups.google.com/g/zaproxy-users/c/bEBOGB48v-I/m/3r5TRPdVAwAJ).

### Backlog Issues

We've added a new `backlog` tag for ZAP issues on GitHub.
These are issues that will be prioritized by the Core team.

Read the full announcement about backlog issues on the [ZAP User Group](https://groups.google.com/g/zaproxy-users/c/i1T0dAm3pMQ/m/Vq4kgoW9AAAJ).

### ZAP Chat Episode: ZAP Project Manager

A new ZAP Chat episode was released this month, introducing the ZAP project manager at Checkmarx.

Watch the [YouTube video here](https://www.youtube.com/watch?v=7kqg7x7d6os) and join the discussion on the [ZAP User Group](https://groups.google.com/g/zaproxy-users/c/QzAQp0nssCM/m/N7KBD3MJBAAJ).

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 5 authors have pushed 16 commits to main and 19 commits to all branches. On main, 34 files have changed and there have been 469 additions and 187 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 8 authors have pushed 80 commits to main and 83 commits to all branches. On main, 530 files have changed and there have been 10,475 additions and 3,093 deletions.

A total of [75 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2024-10+is%3Amerged&type=pullrequests) on the ZAP repos.

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
**v111**  
Changed
- Update ChromeDriver to 130.0.6723.91.

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
**v111**  
Changed
- Update ChromeDriver to 130.0.6723.91.

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
**v111**  
Changed
- Update ChromeDriver to 130.0.6723.91.

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


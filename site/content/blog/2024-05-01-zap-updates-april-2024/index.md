---
title: "ZAP Updates - April 2024"
summary: >
  ZAP professional services, a new Docker Hub org, a new GitHub Action and 2.15.0 is coming soon.
images:
- https://www.zaproxy.org/blog/2024-05-01-zap-updates-april-2024/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2024-05-01"
authors:
- simon
---

## Highlights

### 2.15.0 Coming Soon

The big news this month is that the next full ZAP release is "coming soon".

The exact release date has not been finalised, but we are expecting it to be released this month (May).
You can track the progress in [Issue 8456](https://github.com/zaproxy/zaproxy/issues/8456).

### ZAP Professional Services

This month we also announced [ZAP Professional Services!](/blog/2024-04-08-zap-professional-services/).

This is your chance to get expert guidance and assistance on everything to do with ZAP. Not only that, but by doing so you will help the ZAP project.

All of the money raised from any of these services will help fund ZAP development.

For more details see the [Support](/support/) page.

### New zaproxy DockerHub org

We have a new DockerHub organisation for the ZAP Docker images: https://hub.docker.com/u/zaproxy

Why another org?

When we left OWASP we had to move away from the OWASP DockerHub org.
We chose to use [softwaresecurityproject](https://hub.docker.com/u/softwaresecurityproject) as we
were being funded by the Linux Foundation via the Software Security Project.

Unfortunately that fell through and while ZAP is still part of the [Software Security Project](https://softwaresecurityproject.org/) 
we think it makes more sense for us to have our own DockerHub org.
It is also less to type :wink:

We will still use the [softwaresecurityproject](https://hub.docker.com/u/softwaresecurityproject) org for
2.15.0 but we will probably not use it for the following releases.

We do recommend that you switch from `softwaresecurityproject` to [zaproxy](https://hub.docker.com/u/zaproxy) 
sooner rather than later.

The ZAP images on GitHub are unaffected by this change. 

### Automation Framework GitHub Action

There is a brand new ZAP GitHub action - the 
[ZAP Automation Framework Scan](https://github.com/marketplace/actions/zap-automation-framework-scan).
This allows you run an [Automation Framework](/docs/automate/automation-framework/) plan in a GitHub action.

Why is this important?
Because the Automation Framework provides a [great balance](/docs/getting-further/automation/automation-options/)
between ease of use and flexibility + functionality.
 
If you want to perform any non trivial automation with ZAP then the
[Automation Framework](/docs/automate/automation-framework/) is probably your best bet.

It is worth noting that there are more enhancements planned for this action, including the ability to raise GitHub issues.
We'll publish a blog post telling you all about it in the not too distant future :grin:

## Ongoing Work

### Funding

Funding continues to be a significant focus, and I am delighted to announce that the first ZAP 
[Support Package Contracts](/support/#support-packages) have been signed!

If you need ZAP support then head over to the [Support](/support/) page.
All of the money raised via the professional services will help fund ZAP development - ZAP is a non-profit open source project.

## Website Updates

The following new pages were added to the website in April.

* Blog: [ZAP Professional Services!](/blog/2024-04-08-zap-professional-services/)
* Docs: [Authentication Decision Tree](/docs/authentication/)


## New Contributors

A very warm welcome to the people who started to contribute to ZAP this month!

* [micvm](https://github.com/micvm)
* [frozenSolid](https://github.com/frozenSolid)

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 5 authors have pushed 20 commits to main and 20 commits to all branches. On main, 42 files have changed and there have been 858 additions and 325 deletions. 

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 7 authors have pushed 36 commits to main and 36 commits to all branches. On main, 165 files have changed and there have been 1,671 additions and 372 deletions.  

A total of [74 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2024-04+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released add-ons - Full Changelog
In April 2024, we released updated versions of 17 add-ons:

##### Alert Filters
**v20**  
Added
- Video link in help for Automation Framework job.

Changed
- Reword label in the automation job to prevent any confusion between the Alert Filters and the Alerts.
- Maintenance changes.

##### Automation Framework
**v0.39.0**  
Added
- Allow reports to know the number of Sites tree nodes actively scanned (Issue 7022).

Changed
- Allow to run remote plans through the command line.

**v0.38.0**  
Fixed
- Correctly expose all information in the `planProgress` API view (Issue 8433). This might break existing clients as the format has changed.
  - JSON changed to, e.g.:
  ```json
  {
    "warn" : [ ],
    "planId" : 0,
    "started" : "2024-04-08T00:00:00.615Z",
    "finished" : "2024-04-08T00:00:00.702Z",
    "error" : [ ],
    "info" : [ "Job requestor started", "Job requestor finished, time taken: 00:00:00" ]
  }
  ```
  - XML changed to, e.g.:
  ```xml
   <planProgress type="set">
     <planId>0</planId>
     <started>2024-04-08T00:00:00.615Z</started>
     <finished>2024-04-08T00:00:00.702Z</finished>
     <info type="list">
       <message>Job requestor started</message>
       <message>Job requestor finished, time taken: 00:00:00</message>
     </info>
     <warn type="list"/>
     <error type="list"/>
   </planProgress>
  ```

##### Common Library
**v1.24.0**  
Added
- Helper classes for scripts used as scan-rules (Issue 7105).

##### GraalVM JavaScript
**v0.6.0**  
Changed
- Update Active and Passive Script Templates to include a `getMetadata` function. This will allow them to be used as regular scan rules.
- Depend on the `commonlib` and `scripts` add-ons for scan rule scripts.
- Maintenance changes.

##### Groovy Support
**v3.2.0**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.
- Replace usage of singletons with injected variables (e.g. `model`, `control`) in scripts.
- Dependency updates.
- Update Active and Passive Script Templates to include a `getMetadata` function. This will allow them to be used as regular scan rules.
- Depend on the `commonlib` and `scripts` add-ons for scan rule scripts.

Fixed
- Updated encode-decode script template to conform to the latest method signatures.

##### Image Location and Privacy Scanner
**v5**  
Changed
- Update minimum ZAP version to 2.14.0.
- Maintenance changes.

Added
- Website alert links (Issue 8189).

##### Linux WebDrivers
**v81**  
Changed
- Update ChromeDriver to 124.0.6367.91.

**v80**  
Changed
- Update ChromeDriver to 124.0.6367.60.

**v79**  
Changed
- Update ChromeDriver to 123.0.6312.122.

**v78**  
Changed
- Update ChromeDriver to 123.0.6312.105.

##### MacOS WebDrivers
**v81**  
Changed
- Update ChromeDriver to 124.0.6367.91.

**v80**  
Changed
- Update ChromeDriver to 124.0.6367.60.

**v79**  
Changed
- Update ChromeDriver to 123.0.6312.122.

**v78**  
Changed
- Update ChromeDriver to 123.0.6312.105.

##### Postman Support
**v0.3.0**  
Added
- Automation support.

Fixed
- Correct deserialization of item groups (Issue 8400).

##### Python Scripting
**v15**  
Changed
- Maintenance changes.
- Update Active and Passive Script Templates to include a `getMetadata` function. This will allow them to be used as regular scan rules.
- Depend on the `commonlib` add-on for scan rule scripts.
- Update minimum `scripts` add-on version to 45.1.0.

##### Quick Start
**v46**  
Changed
- Maintenance changes.
- AJAX spider selection to include "if modern" option.

Fixed
- Help content typos.

##### Retire.js
**v0.34.0**  
Changed
- Updated with upstream retire.js pattern changes.

##### Script Console
**v45.2.0**  
Added
- Active and Passive Scripts with a `getMetadata()` function are now treated as first-class scan rules (Issue 7105).

Fixed
- Error when trying to run an unsupported script type through the Automation Framework.
- The "Scripts Passive Scanner" scan rule was being loaded twice.

##### Selenium
**v15.22.0**  
Changed
- Update Selenium to version 4.20.0.

**v15.21.0**  
Changed
- Update Selenium to version 4.19.1.

##### Wappalyzer - Technology Detection
**v21.35.0**  
Changed
- Maintenance changes.

Fixed
- A typo in the help content.

**v21.34.0**  
Changed
- Updated with enthec upstream icon and pattern changes.

##### Windows WebDrivers
**v81**  
Changed
- Update ChromeDriver to 124.0.6367.91.

**v80**  
Changed
- Update ChromeDriver to 124.0.6367.60.

**v79**  
Changed
- Update ChromeDriver to 123.0.6312.122.

**v78**  
Changed
- Update ChromeDriver to 123.0.6312.105.

##### Zest - Graphical Security Scripting Language
**v44**  
Added
- Support for menu weights (Issue 8369)

Changed
- Update minimum `scripts` add-on version to 45.1.0.
- Maintenance changes.

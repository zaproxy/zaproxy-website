---
title: "ZAP Updates - January 2024"
summary: >
  ZAP funding investigations, a CLA and Google Summer of Code.
images:
- https://www.zaproxy.org/blog/2024-02-02-zap-updates-january-2024/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2024-02-02"
authors:
- simon
---

## Highlights

### ZAP Funding

As mentioned in the [ZAP Chat 13 2023 Review](https://www.youtube.com/watch?v=VPVuxftv99A) video we are trying to
work out how to fund ZAP more effectively going forwards.

ZAP is the world's most popular web scanner and is used by many [3rd Party Services](/third-party-services/), most of whom do not contribute to ZAP in any way.

There is a lot going on which I cannot talk about right now, but hopefully I will be able to share more in the near future.

### Contributor License Agreement

We introduced a [Contributor License Agreement](/blog/2024-10-23-zap-contributor-license-agreement/)
which now must be signed before any contributions to the 2 main repos can be merged.

### Google Summer of Code

We have applied to be a [Google Summer of Code](/docs/gsoc/) mentoring organisation. 

One of the possible GSoC projects is a [new web GUI](https://www.youtube.com/watch?v=s8DKKTTHsGM) - this has proved
to be a very popular suggestion!

### ZAP Chat Video Series

We released 4 new [ZAP Chat](/zap-chat/) videos last month:

* [ZAP Chat 13 2023 Review](https://www.youtube.com/watch?v=VPVuxftv99A)
* [ZAP Chat 14 Google Summer of Code](https://www.youtube.com/watch?v=Cm_ol-PA738)
* [ZAP Chat 15 New Web GUI?](https://www.youtube.com/watch?v=s8DKKTTHsGM)
* [ZAP Chat 16 Automation Framework Part 7 - Authentication](https://www.youtube.com/watch?v=_CKzFqDi33A)

## Ongoing Work

### Improved Automation Capabilities

More progress has been made on a new GitHub Action which will support the [Automation Framework](/docs/automate/automation-framework/).

### Desktop Usability Improvements

Work has started on a set of desktop usability improvements following some great feedback from [Tib3rius](https://tib3rius.com/).

It's worth noting that specific and actionable usability feedback is especially welcome and will be prioritised.

### Old Release Archiving

We are now only maintaining the last 4 weekly and monthly releases.
All of the full releases prior to 2.11 have been archived.

Next week we will be archiving 2.11 and the plan is to archive 2.12 the week after that.

## Website Updates

The following new pages were added to the website in January.

* Blog: [2023 in Review](/blog/2024-01-03-2023-in-review/)
* Blog: [ZAP Contributor License Agreement](/blog/2024-10-23-zap-contributor-license-agreement/)
* Blog: [Signing Requests using RSA Keys](/blog/2024-01-29-signing-requests-using-rsa-keys/)
* Docs: [Google Summer of Code](/docs/gsoc/)
  * [Advice and Guidance](/docs/gsoc/advice-and-guidance/)
  * [2024](/docs/gsoc/2024/)
  * [2023](/docs/gsoc/2023/)
  * [2022](/docs/gsoc/2022/)
  * [2021](/docs/gsoc/2021/)
  * [2020](/docs/gsoc/2020/)


## New Contributors

A very warm welcome to the people who started to contribute to ZAP this month!

* [Aditya Parihar](https://github.com/PariharAditya)
* [Caroline Russell](https://github.com/cerrussell)
* [Ganesh Dagadi](https://www.linkedin.com/in/ganesh-dagadi)
* [Tib3rius](https://tib3rius.com/)
* [8linkz](https://github.com/8linkz)

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 5 authors have pushed 17 commits to main and 17 commits to all branches. On main, 47 files have changed and there have been 627 additions and 122 deletions. 

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 11 authors have pushed 71 commits to main and 71 commits to all branches. On main, 536 files have changed and there have been 6,522 additions and 10,595 deletions. 

A total of [104 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2024-011+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released add-ons - Full Changelog
In January 2024, we released updated versions of 19 add-ons:

##### Active scanner rules
**v62**  
Changed
- The Source Code Disclosure - /WEB-INF Folder rule now includes example alert functionality for documentation generation purposes (Issue 6119).

**v61**  
Changed 
- Update reference for Server Side Include (Issue 8262) 
Fixed
- False positives on redirects for:
  - Cloud Metadata (Issue 7710)
  - Hidden Files

**v60**  
Changed
- Leave data empty instead of adding "N/A" for the scan rules:
  - Cross Site Scripting (Persistent) - Prime
  - Cross Site Scripting (Persistent) - Spider
- Update reference for Server Side Code Injection (Issue 8262).
- Now depends on minimum Common Library version 1.21.0.

Fixed
- Threshold handling in the Hidden File Finder scan rule.
- Improved the following scan rules by using time-based linear regression tests:
  - Server Side Template Injection (Blind)
  - SQL Injection - Hypersonic SQL
  - SQL Injection - MsSQL
  - SQL Injection - MySQL

Added
- Help entry for the Spring Actuators scan rule (missed during previous promotion).
- Website alert links to the help page (Issue 8189).
- The following scan rules now include example alert functionality for documentation generation purposes (Issue 6119) and in some cases updated references (Issue 8262).
  - CRLF Injection
  - Remote OS Command Injection
  - GET for POST
  - ELMAH Information Leak
  - .env Information Leak
  - .htaccess Information Leak
  - Trace.axd Information Leak

##### Active scanner rules (alpha)
**v46**  
Changed
- Move MongoDB time based tests to its own scan rule, NoSQL Injection - MongoDB (Time Based) with ID 90039 (Issue 7341).
- Depend on newer version of Common Library add-on.

**v45**  
Changed
- Update minimum ZAP version to 2.14.0.
- Depend on newer version of Common Library add-on.
- Add website alert links to the help page (Issue 8189).

Fixed
- Fix time-based false positives in NoSQL Injection - MongoDB scan rule.

##### Active scanner rules (beta)
**v50**  
Changed
- References for the following scan rules were updated (Issue 8262):
    - Exponential Entity Expansion (Billion Laughs Attack)
    - Relative Path Confusion
    - HTTPS Content Available via HTTP
    - Remote Code Execution - Shell Shock
- The following scan rules now include example alert functionality for documentation generation purposes (Issue 6119):
    - HTTPS Content Available via HTTP
    - Remote Code Execution - Shell Shock (it now also uses Alert Refs (Issue 7100))

**v49**  
Changed
- Update minimum ZAP version to 2.14.0.
- Update references for Expression Language Injection and HTTP Parameter Pollution (Issue 8262).
- The Source Code Disclosure - SVN scan rule includes example alert functionality for documentation generation purposes (Issue 6119).

Removed
- Help entry for the Spring Actuators scan rule (missed during previous removal/promotion).

##### Authentication Helper
**v0.11.0**  
Changed
- Maintenance changes.
- Dropped "to Clipboard" from ZAP copy menu items or buttons (Issue 8179).
- Update cookies in header based session management, to cope with apps that set them via JavaScript.

Fixed
- Read the user details from the session rather than the individual messages, which could cause an NPE.

##### Automation Framework
**v0.35.0**  
Added
- Video links in help for Automation Framework jobs.

Changed
- Allow to include techs in a context.

Fixed
- Show method and URL when outputting the status code mismatch of `requestor` job.

##### Client Side Integration
**v0.8.0**  
Changed
- Updated the Chrome extension to v0.0.8.

##### Common Library
**v1.22.0**  
Added
- Add alert tag for scan rules that use time based tests.

**v1.21.0**  
Added
- Add solution to 'Server Misconfiguration' and 'Application Misconfiguration' vulnerabilities (Issue 8056).

Changed
- Update Vulnerabilities' references to use https links and retire some which were out-dated (Issue 8262).
- Maintenance changes.

##### Dev Add-on
**v0.5.0**  
Added
- Auth page which uses header and a cookie set via JavaScript.

##### Linux WebDrivers
**v70**  
Changed
- Update ChromeDriver to 121.0.6167.85.

**v69**  
Changed
- Update geckodriver to 0.34.0. Previous version included 0.33.0.

**v68**  
Changed
- Update geckodriver to 0.34.0.

##### MacOS WebDrivers
**v70**  
Changed
- Update ChromeDriver to 121.0.6167.85.

**v69**  
Changed
- Update geckodriver to 0.34.0. Previous version included 0.33.0.

**v68**  
Changed
- Update geckodriver to 0.34.0.

##### OpenAPI Support
**v39**  
Added
- Video link in help for Automation Framework job.

Changed
- Dependency updates.

##### Passive scanner rules
**v55**  
Changed
- The Salvation2 library used by the CSP scan rule has been replaced by htmlunit-csp.
- The following rules now include example alert functionality for documentation generation purposes (Issue 6119):
    - HTTPS to HTTP Insecure Transition in Form Post
    - HTTP to HTTPS Insecure Transition in Form Post
    - Secure Pages Include Mixed Content
    - User Controllable JavaScript Event (XSS)
    - Cookie without SameSite Attribute
    - X-Debug-Token Information Leak
    - Retrieved from Cache
- The following scan rules now have alert references (Issue 7100):
    - Cookie without SameSite Attribute 
    - Retrieved from Cache (raw text was also trimmed from one Alert reference (Issue 8262))

Fixed
- An issue where Other Info on alerts for the following rules may have been hard to read (missing spaces or new lines):
    - HTTPS to HTTP Insecure Transition in Form Post
    - HTTP to HTTPS Insecure Transition in Form Post
    - User Controllable JavaScript Event (XSS)

**v54**  
Changed
- The Big Redirect scan rule will now also alert on responses that have multiple HREFs (idea from xnl-h4ck3r).
- The references for the following scan rules are now all HTTPS (Issue 8262) and in some cases updated:
    - Loosely Scoped Cookie
    - Charset Mismatch
    - Strict-Transport-Security Header
    - Content Security Policy (CSP) Header Not Set
    - CSP
    - Session ID in URL Rewrite
    - HTTP Server Response Header
    - Cookie Poisoning
    - User Controllable HTML Element Attribute (Potential XSS)
    - X-Content-Type-Options Header Missing
    - Content-Type Header Missing
    - Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s)
    - Retrieved from Cache
- The Absence of Anti-CSRF Tokens scan rule now takes into account the Partial Match settings from the Anti-CSRF Options (Issue 8280).
- On Non-LOW threshold, PII Scan rule only evaluates HTML, JSON and XML responses (Issue 8264).
- Maintenance changes.
- The following rules now include example alert functionality for documentation generation and cross linking purposes (Issues 6119, and 8189).
    - Big Redirect
    - Information Disclosure: Debug Errors
    - Information Disclosure: In URL
    - Information Disclosure: Referrer
    - Cookie Poisoning
    - User Controllable Charset
    - Open Redirect
    - User Controllable HTML Element Attribute (Potential XSS)
    - Heartbleed OpenSSL Vulnerability (Indicative)
    - Strict-Transport-Security Header
    - Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s)
    - X-Content-Type-Options Header Missing
    - Content-Type Header Missing
- The CWE for the Cookie Poisoning scan rule was updated to a more specific one.
- The Strict-Transport-Security Header and Big Redirect scan rules now use alert references for their different types of alerts (Issue 7100).

##### Passive scanner rules (alpha)
**v42**  
Changed
- Update minimum ZAP version to 2.14.0.
Added
- Website alert links (Issue 8189).
- Full Path Disclosure vulnerability passive scanner (Issue 413).

##### Passive scanner rules (beta)
**v36**  
Changed
- Update minimum ZAP version to 2.14.0.
- The Source Code Disclosure rule no longer considers responses that contain ISO control characters (those which are likely to be binary file types) (Issue 8191).

##### Report Generation
**v0.28.0**  
Changed
- Default to same dir as plan if none specified.

Fixed
- Ensure the Sections' options are fully shown always in Generate Report Dialog (Issue 8259).
- Replace env vars in URL when used for report file name.

##### Retire.js
**v0.30.0**  
Changed
- Updated with upstream retire.js pattern changes.
- Now only targets relevant responses (HTML and JS).

##### Selenium
**v15.18.0**  
Changed
- Update Selenium to version 4.17.0.

**v15.17.0**  
Changed
- Update Selenium to version 4.16.1.

##### Spider
**v0.9.0**  
Added
- Video link in help for Automation Framework job.

Changed
- The sitemap.xml parser will now accept and process a greater range of possible file content (Issue 8299).

##### Windows WebDrivers
**v70**  
Changed
- Update ChromeDriver to 121.0.6167.85.

**v69**  
Changed
- Update geckodriver to 0.34.0. Previous version included 0.33.0.

**v68**  
Changed
- Update geckodriver to 0.34.0.

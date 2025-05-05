---
title: "ZAP Updates - April 2025"
summary: >
  April 2025 updates and ongoing feature development statuses.
images:
- https://www.zaproxy.org/blog/2025-05-05-zap-updates-april-2025/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2025-05-05"
authors:
- akshath
---

This month was all about small but meaningful improvements.

## Highlights
### ZAP Wins Inaugural DefectDojo Award
We’re proud to announce that ZAP has won the inaugural DefectDojo Open Source Award for being one of the Best Dynamic Application Security Testing (DAST) Tools out there.
This award recognizes ZAP’s contributions to the open-source cybersecurity ecosystem - [read more here](/blog/2025-04-22-zap-wins-inaugural-defectdojo-award-for-open-source/).

### New ZAP Success Story
A new success story featuring Possible Security, a Riga-based cybersecurity firm, was published to the website in April.
They highlight ZAP’s role as a core tool in their web and mobile app penetration tests.
[Read the full story here](/success/possiblesecurity/).

### Authentication Improvements
This month brought several improvements to ZAP’s authentication tooling.
The browser-based recorder received multiple fixes and enhancements, while the team also began discussions around a potential authentication wizard, aimed at streamlining and improving the overall authentication setup experience.

### Spidering Enhancements
We continued to iterate on both the AJAX spider and Client spider, focusing on better handling of dynamic content and improved coverage of modern, JavaScript-driven web applications, especially when authentication is also involved.

## Ongoing Work
### Continued Enhancements to Authentication
Work is steadily progressing to make authentication even more reliable and adaptable.
We're focusing on improving support for complex login sequences, multi-step authentication, and modern SPA frameworks, ensuring ZAP can keep pace with today's evolving web technologies.

### LLM Add-on Pull Request
We're actively reviewing a pull request for a Large Language Model (LLM) add-on.
This experimental feature aims to leverage LLMs within ZAP in a meaningful way.

## Miscellaneous Updates
### PENTEST Tags Added to Scan Rules
We’ve added PENTEST policy tags to all Java active and passive scan rules, helping users identify rules most relevant to penetration testing.
(Essentially this is all rules except the Example rules in the alpha add-ons.)

### Windows Binary False Positives Resolved
ZAP’s Windows binary was being falsely flagged as malicious by a few vendors, including FortiGuard and Ikarus.
This issue was resolved after outreach, though Alibaba did not respond and the Chromium team’s reply was disappointing.
We're continuing to monitor and engage where needed to minimize disruption for users.

### New PortSwigger Lab Solution Blog Post
A detailed walkthrough on using ZAP to solve PortSwigger's "Broken Brute-Force Protection, IP Block" lab was published on the blog.
[Read the full guide here](/blog/2025-04-09-portswigger-labs-broken-brute-force-protection-ip-block/).

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 4 authors have pushed 12 commits to main and 12 commits to all branches. On main, 33 files have changed and there have been 1,202 additions and 426 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 7 authors have pushed 90 commits to main and 91 commits to all branches. On main, 549 files have changed and there have been 7,419 additions and 2,127 deletions.

A total of [77 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2025-04+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In April 2025, we released updated versions of 6 add-ons:

##### Advanced SQLInjection Scanner
**v16**  
Changed
- Update minimum ZAP version to 2.16.0.
- Maintenance changes.
- The included active scan rule has been tagged of interest to Penetration Testers.

##### Common Library
**v1.32.0**  
Added
- Add an alert tag for scan rules that are believed to be of interest to Penetration Testers (essentially everything except the Example rules).

##### Linux WebDrivers
**v137**  
Changed
- Update ChromeDriver to 136.0.7103.49.

**v136**  
Changed
- Update ChromeDriver to 135.0.7049.114.

**v135**  
Changed
- Update ChromeDriver to 135.0.7049.97.

**v134**  
Changed
- Update ChromeDriver to 135.0.7049.95.

**v133**  
Changed
- Update ChromeDriver to 135.0.7049.84.

**v132**  
Changed
- Update ChromeDriver to 135.0.7049.42.

##### MacOS WebDrivers
**v137**  
Changed
- Update ChromeDriver to 136.0.7103.49.

**v136**  
Changed
- Update ChromeDriver to 135.0.7049.114.

**v135**  
Changed
- Update ChromeDriver to 135.0.7049.97.

**v134**  
Changed
- Update ChromeDriver to 135.0.7049.95.

**v133**  
Changed
- Update ChromeDriver to 135.0.7049.84.

**v132**  
Changed
- Update ChromeDriver to 135.0.7049.42.

##### Script Console
**v45.11.0**  
Fixed
- NPE when using scripts with no UI.

**v45.10.0**  
Fixed
- NPE when using some scripts after re-installing the scripts add-on.
- Correct error message of the Automation Framework job.
- Templates and Zest scripts were not being shown in the editor (Issue 8922).

Added
- Standardized Policy Tags to the base Scripts Passive Scanner.

Changed
- Depends on an updated version of the Common Library add-on.

##### Windows WebDrivers
**v137**  
Changed
- Update ChromeDriver to 136.0.7103.49.

**v136**  
Changed
- Update ChromeDriver to 135.0.7049.114.

**v135**  
Changed
- Update ChromeDriver to 135.0.7049.97.

**v134**  
Changed
- Update ChromeDriver to 135.0.7049.95.

**v133**  
Changed
- Update ChromeDriver to 135.0.7049.84.

**v132**  
Changed
- Update ChromeDriver to 135.0.7049.42.


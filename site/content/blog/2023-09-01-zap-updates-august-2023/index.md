---
title: "ZAP Updates - August 2023"
summary: >
  August 2023 was a big change for us!
images:
- https://www.zaproxy.org/blog/2023-09-01-zap-updates-august-2023/images/zapbot-monthly-updates-social.png
type: post
tags:
- blog
- update
date: "2023-09-01"
authors: 
- simon
---

This month saw one of the biggest changes to ZAP since it was launched in 2010 - the move to a brand new foundation!

We have also published a new [questionnaire](https://docs.google.com/forms/d/e/1FAIpQLSeslne7nAjiK-oCckMXU39ESa47QjK08p4bT63O2T6EDzR05g/viewform?usp=sf_link) to find out what you think we should focus our development efforts on - so please fill this in.

And despite all of the migration work there have been several other very significant changes this month, so read on...

## Highlights
### ZAP Move to SSP from OWASP
The (very) big news this month was the [move from OWASP to the Software Security Project](/blog/2023-08-01-zap-is-joining-the-software-security-project/).

The move means that we now have doubled the number of people able to work on ZAP full time, from 1 to 2 :grin:

A lot of effort this month has focused on rebranding and moving away from some of the OWASP accounts we were using.

The following URLs, services, and defaults have changed:

#### Docker Hub
The official ZAP Docker images are now in the [Software Security Project](https://hub.docker.com/u/softwaresecurityproject)
Docker Hub Organisation.
The OWASP links should continue to work but we recommend you change to use the new ones ASAP.

Note that you can also pull the ZAP Docker images from [GitHub Container Registry](https://github.com/zaproxy/zaproxy/pkgs/container/zaproxy/versions?filters[version_type]=tagged).

#### Crowdin
The Crowdin projects used for translating ZAP have changed to:

* https://crowdin.com/project/zaproxy for translating the Desktop
* https://crowdin.com/project/zap-help for translating the Desktop Help

#### API Clients

The Python API client is now: https://pypi.org/project/zaproxy/

#### WebSwing Default Certificate Names

The certificates ZAP creates when [launching Webswing](/docs/docker/webswing/#proxying-through-zap)
have changed to:

* zap_root_ca.crt - the public ZAP Root CA certificate
* zap_root_ca.key - the private ZAP Root CA certificate


### ZAP on Winget
[ZAP is now available via Winget](/blog/2023-08-21-zap-is-available-via-winget/) - the official 
Microsoft Windows Package Manager.

### Community Scripts Tips (and Tricks)
A [blog post](/blog/2023-08-25-community-tips-and-tricks/) was published drawing attention to the new section added to the [community-scripts repository](https://github.com/zaproxy/community-scripts/tree/main/other/tips) -
please submit your ideas and usage tips for ZAP and its add-ons here.

### ZAP Development Focus Questionnaire
A [blog post](/blog/2023-08-29-what-should-we-focus-on/) was published highlighting the new ZAP questionnaire - this is your chance to influence what we, the ZAP Core Team, focus our efforts on.
Thank you to everyone who has already completed it (the current results are very revealing!) and if you have not completed it
then please do so ASAP!

### GraalJS Classloader Fix

We have had an ongoing problem with the [GraalVM JavaScript](/docs/desktop/addons/graalvm-javascript/) add-on which meant that it was not possible to reference classes in ZAP add-ons. 
This significantly impacted its usefulness.

The good news is that following a fix in the GraalVM code and some core changes this is no longer a problem!
Note that as we have to make core changes, this fix will only work in the nightly and weekly (from next week) releases until
2.14.0 is released.

### API Support for File Transfers

The latest weekly release supports the ability to upload and download files to and from ZAP via the API.
For more details see [this post](https://groups.google.com/g/zaproxy-users/c/rAH6TQZf1Ow/m/UogNejGlBQAJ) on the ZAP User Group.

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 7 authors have pushed 39 commits to main and 39 commits to all branches. On main, 133 files have changed and there have been 1,677 additions and 47,904 deletions. 

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 8 authors have pushed 74 commits to main and 74 commits to all branches. On main, 657 files have changed and there have been 8,390 additions and 2,731 deletions.

A total of [192 PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2023-08+is%3Amerged&type=pullrequests) on the ZAP repos. 

## Ongoing Work
### 2.14.0 Release
We are actively working on getting ZAP 2.14.0 ready for release.
You can track the progress in the [2.14.0 Milestone](https://github.com/zaproxy/zaproxy/milestone/10).

## Google Summer of Code
Both of the Google Summer of Code projects are progressing well and we hope to be able to release new add-ons for them soon.

## New Supporters
As per the blog: [ZAP is Joining the Software Security Project](/blog/2023-08-01-zap-is-joining-the-software-security-project/) the [Software Security Project](https://softwaresecurityproject.org/) is now sponsoring both
myself and [Ricardo](/docs/team/thc202/) to work full time on ZAP!

Please find a list of all our supporters on the [Supporters page](/supporters/).

## New Contributors
A very warm welcome to the people who started to contribute to ZAP in the last 2 months (we did not have an update blog post last month)

- Patrick Double [double16](https://github.com/double16)
- Laurent Laubin - Quarkslab
- Shershon A J [Shershon25](https://github.com/Shershon25)

## Website Updates

The following new pages were added:

* Alert: [Access Control Issue - Improper Authentication](/docs/alerts/10101/)
* Alert: [Access Control Issue - Improper Authorization](/docs/alerts/10102/)
* Blog: [ZAP is Joining the Software Security Project](/blog/2023-08-01-zap-is-joining-the-software-security-project/)
* Blog: [ZAP is Available via Winget](/blog/2023-08-21-zap-is-available-via-winget/)
* Blog: [Community - Tips and Tricks](/blog/2023-08-25-community-tips-and-tricks/)
* Blog: [What Should We Focus On?](/blog/2023-08-29-what-should-we-focus-on/)
* FAQ: [Why does ZAP Access Out of Scope Domains?](/faq/why-does-zap-access-out-of-scope-domains/)

The following pages had significant changes:

* FAQ: [How can you speed up scans?](/faq/how-can-you-speed-up-scans/)
* Authentication: [Documented SSO Solutions/](/docs/authentication/documented-sso-solutions/)

## Released add-ons - Full Changelog
In August 2023, we released updated versions of 10 add-ons:

##### Common Library (v1.16.0)
Added
- Provide Jackson parsing library, to reuse the library in other add-ons (Issue 7961).

Changed
- Maintenance changes.

##### Linux WebDrivers (v58)
Changed
- Update ChromeDriver to 115.0.5790.170.

##### Linux WebDrivers (v59)
Changed
- Update ChromeDriver to 116.0.5845.96.

##### MacOS WebDrivers (v58)
Changed
- Update ChromeDriver to 115.0.5790.170.

##### MacOS WebDrivers (v59)
Changed
- Update ChromeDriver to 116.0.5845.96.

##### Report Generation (v0.24.0)
Changed
- Maintenance changes.
- The following reports now include "Other Info" for alerts:
    - Traditional HTML Report
    - Traditional HTML Report with requests and responses
    - Traditional Markdown Report
    - Traditional PDF Report
- Depend on Common Library add-on to reuse libraries (Issue 7961).
- Update program name in reports.

##### Retire.js (v0.25.0)
Changed
- Updated with upstream retire.js pattern changes.
- Maintenance changes.

##### Wappalyzer - Technology Detection (v21.23.0)
Changed
- Maintenance changes.
- Update minimum ZAP version to 2.13.0.
- Updated with upstream Wappalyzer icon and pattern changes.

##### Windows WebDrivers (v57)
Changed
- Update ChromeDriver to 115.0.5790.170.

##### Windows WebDrivers (v58)
Changed
- Update ChromeDriver to 116.0.5845.96.

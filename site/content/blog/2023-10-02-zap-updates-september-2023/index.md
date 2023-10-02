---
title: "ZAP Updates - September 2023"
summary: >
  Both of our GSoC students completed their projects, and we started a new video series.
images:
- https://www.zaproxy.org/blog/2023-10-02-zap-updates-september-2023/images/zapbot-monthly-updates-social.png
type: post
tags:
- blog
- update
date: "2023-10-02"
authors: 
- simon
---

## Highlights

This month both of our Google Summer of Code students finished their projects, and I am also delighted to tell you that they are both continuing to contribute to ZAP even though GSoC has officially finished.

You can read more about their projects in the blog posts they have written:

* Blog: [GSoC 2023 Browser Recorder](/blog/2023-09-11-browser-recorder/)
* Blog: [Postman Add-on](/blog/2023-09-25-postman-add-on/)

We also started a new set of videos: [ZAP Chat Video Series](/blog/2023-09-15-zap-chat-video-series/)

Don't forget to fill in the [ZAP Development Focus 2023](https://docs.google.com/forms/d/e/1FAIpQLSeslne7nAjiK-oCckMXU39ESa47QjK08p4bT63O2T6EDzR05g/viewform?usp=sf_link) Questionnaire, if you have not already done so!

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 7 authors have pushed 18 commits to main and 18 commits to all branches. On main, 53 files have changed and there have been 910 additions and 1,247 deletions. 

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 8 authors have pushed 93 commits to main and 93 commits to all branches. On main, 2,026 files have changed and there have been 79,343 additions and 7,954 deletions. 

A total of [83 PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2023-08+is%3Amerged&type=pullrequests) on the ZAP repos. 

## Ongoing Work
### 2.14.0 Release
We are actively working on getting ZAP 2.14.0 ready for release.
You can track the progress in the [2.14.0 Milestone](https://github.com/zaproxy/zaproxy/milestone/10).

## New Supporters

* [Tecvity](https://tecvity.co/) : new [Bronze Supporter](/supporters/#bronze)

Please find a list of all our supporters on the [Supporters page](/supporters/).


## Website Updates

The following new pages were added:

* Alerts: The [Alert Details](/docs/alerts/) page now includes the CWE and WASC Ids, unless you are using a smaller screen
* Blog: [Parsing .DS_Store files with ZAP](/blog/2023-09-08-ds-store-parsing/)
* Blog: [GSoC 2023 Browser Recorder](/blog/2023-09-11-browser-recorder/)
* Blog: [ZAP Chat Video Series](/blog/2023-09-15-zap-chat-video-series/)
* Blog: [Postman Add-on](/blog/2023-09-25-postman-add-on/)
* Vidoes: [ZAP Chat](/zap-chat/) page added

The following pages had significant changes:

* Docs: [Student Hall of Fame](/student-hall-of-fame/) updated to include Aryan and Vitika
* Docs: Aryan and Vitika added to the [Team Page](/docs/team/)
* Supporters: [Tecvity](https://tecvity.co/) was added as a [Bronze Supporter](/supporters/#bronze)

## Released add-ons - Full Changelog
In September 2023, we released updated versions of 30 add-ons:

##### Ajax Spider (v23.16.0)
Changed
- Maintenance changes.
- Depend on newer versions of Automation Framework and Common Library add-ons (Related to Issue 7961).
- Depend on newer version of Network add-on and allow to access the ZAP API while spidering.

##### Client Side Integration (v0.0.1)
- First version.

##### Client Side Integration (v0.1.0)
Changed
- Updated the Firefox extension to v0.0.6.
- Updated the Chrome extension to v0.0.5.

##### Client Side Integration (v0.2.0)
Changed
- Updated the Chrome extension to v0.0.6.
- Disable client events automatically only for Zest recording.
- Create Firefox profile to enable the ZAP extension for all sites.

##### Eval Villain (v0.3.0)
Changed
- Updated with new version of Eval Villain.
- Update minimum ZAP version to 2.13.0.

##### Linux WebDrivers (v60)
Changed
- Update ChromeDriver to 117.0.5938.62.

##### Linux WebDrivers (v61)
Changed
- Update ChromeDriver to 117.0.5938.88.

##### Linux WebDrivers (v62)
Changed
- Update ChromeDriver to 117.0.5938.92.

##### MacOS WebDrivers (v60)
Changed
- Update ChromeDriver to 117.0.5938.62.

##### MacOS WebDrivers (v61)
Changed
- Update ChromeDriver to 117.0.5938.88.

##### MacOS WebDrivers (v62)
Changed
- Update ChromeDriver to 117.0.5938.92.

##### Network (v0.11.0)
Added
- Allow to create custom servers with the ZAP API.

Changed
- Maintenance changes.
- Update names of generated root CA certificate and issued server certificates.
- Help improvements.

Fixed
- Correct declaration of mandatory parameters of the API endpoint `setRateLimitRuleEnabled`.

##### Network (v0.11.1)
Fixed
- Ensure servers are stopped when initialising after installation in `cmd` and `daemon` modes.

##### Network (v0.11.2)
Fixed
- Ensure the main proxy with custom port (`-port`) is stopped when initialising after installation in `cmd` and `daemon` modes.

##### Passive scanner rules (alpha) (v41)
Changed
- Maintenance changes.
- Use HTTPS and resolve redirections in the alert references.
- The alerts ASP.NET ViewState Disclosure and ASP.NET ViewState Integrity no longer have the evidence duplicated in the Other Info field.
- Depend on newer version of Common Library add-on.
- Use vulnerability data directly from Common Library add-on.

##### Passive scanner rules (beta) (v35)
Changed
- Use HTTPS and resolve redirections in the alert references.
- The alerts of the Source Code Disclosure scan rule no longer have the evidence duplicated in the Other Info field.

##### Passive scanner rules (v51)
Added
- The following now include example alert functionality for documentation generation purposes (Issue 6119):
  - Loosely Scoped Cookie scan rule.

Changed
- Dependency updates.
- Maintenance changes.
- The alerts of the Hash Disclosure scan rule no longer have the evidence duplicated in the Other Info field.
- Depend on newer version of Common Library add-on.
- Use vulnerability data directly from Common Library add-on.

##### Postman Support (v0.0.1)
- First version.

##### Quick Start (v39)
Added
- ZAPit recon scan.

Changed
- Update names of the default cert and report.

##### Quick Start (v40)
Fixed
- ZAPit help links.
- Scan could incorrectly select leaf node for active scanning.

##### Quick Start (v41)
Added
- ZAPit: report summary of all requests and responses made.
- ZAPit: report technology version if available.

Fixed
- ZAPit: Support cookies in redirects.

##### Retest (v0.7.0)
Changed
- Depend on newer versions of Automation Framework and Common Library add-ons (Related to Issue 7961).
- Use vulnerability data directly from Common Library add-on.

##### Script Console (v40)
Changed
- Allow to select a script node without focusing on it.
- Allow to display script without focusing on it.
- Maintenance changes.
- Depend on newer version of Automation Framework add-on (Related to Issue 7961).

##### Selenium (v15.14.0)
Added
- Add statistics for browser launch successes and failures that include the requester, e.g.:
  - `stats.selenium.launch.<requester-id>.<browser-id>`
  - `stats.selenium.launch.<requester-id>.<browser-id>.failure`
- Allow to configure additional (CLI) arguments for Chrome and Firefox.
- Support for selecting a default Firefox profile.

Changed
- Maintenance changes.
- Update Selenium to version 4.12.1.

##### Windows WebDrivers (v59)
Changed
- Update ChromeDriver to 117.0.5938.62.

##### Windows WebDrivers (v60)
Changed
- Update ChromeDriver to 117.0.5938.88.

##### Windows WebDrivers (v61)
Added
- ChromeDriver for x64 arch.

##### Windows WebDrivers (v62)
Changed
- Update ChromeDriver to 117.0.5938.92.

##### Zest - Graphical Security Scripting Language (v40)
Added 
- Client support to record Zest scripts.

Changed
- Maintenance changes.

Fixed
- Resolved the browser window focus loss problem during the recording of Zest scripts.

##### Zest - Graphical Security Scripting Language (v41)
Added
- Allow rendering Zest scripts in YAML. The format (JSON/YAML) may be changed via the Zest Options screen.

Changed
- Depend on Common Library add-on.
- Maintenance changes.

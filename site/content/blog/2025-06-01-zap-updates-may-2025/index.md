---
title: "ZAP Updates - May 2025"
summary: >
  TODO
images:
- https://www.zaproxy.org/blog/2025-06-01-zap-updates-may-2025/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2025-06-01"
authors:
- TODO
---

## Highlights
TODO

## Ongoing Work
TODO

## New Contributors
A very warm welcome to the people who started to contribute to ZAP this month!

TODO: Add from https://github.com/zaproxy/zap-core-help/pulls?q=is%3Apr+credits+is%3Aclosed

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 4 authors have pushed 7 commits to main and 7 commits to all branches. On main, 16 files have changed and there have been 628 additions and 34 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 4 authors have pushed 65 commits to main and 65 commits to all branches. On main, 296 files have changed and there have been 3,739 additions and 2,356 deletions.

A total of [92 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2025-05+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In May 2025, we released updated versions of 5 add-ons:

##### Dev Add-on
**v0.10.0**  
Added
- Basic CSRF test app.
- Page with input elements that appear after a delay and off the displayed screen.
- Auth app which uses multiple (faked) domains.
- An auth example where there's a div that may obscure the login fields.

##### Linux WebDrivers
**v141**  
Changed
- Update ChromeDriver to 137.0.7151.55.

**v140**  
Changed
- Update ChromeDriver to 136.0.7103.113.

**v139**  
Changed
- Update ChromeDriver to 136.0.7103.94.

**v138**  
Changed
- Update ChromeDriver to 136.0.7103.92.

##### MacOS WebDrivers
**v141**  
Changed
- Update ChromeDriver to 137.0.7151.55.

**v140**  
Changed
- Update ChromeDriver to 136.0.7103.113.

**v139**  
Changed
- Update ChromeDriver to 136.0.7103.94.

**v138**  
Changed
- Update ChromeDriver to 136.0.7103.92.

##### Windows WebDrivers
**v141**  
Changed
- Update ChromeDriver to 137.0.7151.55.

**v140**  
Changed
- Update ChromeDriver to 136.0.7103.113.

**v139**  
Changed
- Update ChromeDriver to 136.0.7103.94.

**v138**  
Changed
- Update ChromeDriver to 136.0.7103.92.

##### Zest - Graphical Security Scripting Language
**v48.6.0**  
Added
- Client element waitForMsec parameter.

Changed
- Update Zest library to 0.29.0:
  - Allow to access the `WebElement` referenced by a `ZestClientElement`.
  - Add new `waitForMsec` parameter to all client elements.
  - Change `ZestClientElementClick`, `ZestClientElementSendKeys`, and `ZestClientElementSubmit` to wait for the element to also be enabled when using `waitForMsec`.
  - Update Selenium to version 4.32.0.
  - Change `ZestClientElementClick` to click on the position of the element instead of the element itself when obscured, to better reproduce a manual click.
  - Change `ZestClientElementScrollTo` to only scroll to the element when not already in view and to scroll with `nearest` vertical alignment, to ensure the element is kept visible.
- Allow to copy the script's file system path from the Edit Zest Script dialogue.

Fixed
- Print statements should print to the relevant script Output tab.
- Recording client Zest scripts.


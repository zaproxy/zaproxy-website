---
title: "ZAP Updates 2023 January"
summary: >
  The January 2023 updates including authentication improvements and future plans.
images:
- https://www.zaproxy.org/blog/2023-02-02-zap-updates-2023-january/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2023-02-02"
authors: 
    - simon
---

### Authentication Improvements

The [Authentication Help](/blog/2023-01-19-authentication-help/) blog post introduced a new add-on focused on
making ZAP authentication easier.

The initial release just included support for authentication request identification and automatic configuration but the blog post also explained that future plans include: 

* Header based session handling - a new session management method which will support an arbitrary number of headers based on data from the authentication response.
* Session handling detection - automatically detecting common session management methods.
* Session handling configuration - automatically configuring ZAP to handle session management in a similar way to the authentication handling above.
* Verification detection - reporting a set of URLs that appear to be suitable for authentication verification.
* Verification configuration - automatically configuring ZAP to handle authentication verification.

A PR for Header based session management has already been submitted and is in review: 
[#4374](https://github.com/zaproxy/zap-extensions/pull/4374)

Another blog post: [Authentication using Selenium](/blog/2023-02-01-authenticating-using-selenium/) (which strictly speaking was in February:wink:) detailed how to set up ZAP to handle complex authentication for a modern web app.

### Jump to History ID

The core was updated to add an option to jump to a specific request in the History table using the ID.
This is available via the context menu in the History table and using the CTRL + ALT + J keyboard combination.
It is available in the latest weekly release.

### OWASP Global AppSec Dublin

[OWASP Global AppSec Dublin](https://dublin.globalappsec.org/) will be running from Feb 13-16 (2 days training, 2 days conf).

I'm going so if you are too then please let me know - I'd love to catch up with ZAP users and contributors!

I'll be at the conference on 15th only (probably on or around the Jit stand) but also at the [Jit & Semgrep Happy Hour](https://lu.ma/owasp-dublin-happyhour) on Feb 14th 5pm-8pm.

You're all invited, but book a ticket if you want to come along as they are likely to all go quickly!

### Stats

Statistics from the 2 main ZAP repos.

#### [zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)

Excluding merges, 5 authors have pushed 10 commits to main and 10 commits to all branches. 
On main, 210 files have changed and there have been 1,630 additions and 1,414 deletions. 

#### [zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)

Excluding merges, 6 authors have pushed 47 commits to main and 47 commits to all branches. 
On main, 500 files have changed and there have been 5,837 additions and 2,774 deletions. 

### Ongoing Work

#### HTTP/2 Support

As explained in the [2022 Review](/blog/2023-01-03-2022-in-review/) HTTP/2 Support is complete in the weekly releases and will be included in the next full ZAP release.

As such it will be removed from this section from next month.

#### Authentication

The authentication improvements already made are detailed above.
Future changes are planned and will be detailed in the section in future months.

#### Selenium 4

[Selenium](https://www.selenium.dev/) v4 has been out for a while and we are actively working on updating ZAP to use it.
There is a chance that this update could break existing scripts - more details when we have them.

#### Website Updates

The following new pages were added:

* Blog: [Authentication Help](/blog/2023-01-19-authentication-help/)
* Success Story: [Codific](/success/codific/)
* FAQ: [What is ZAP's assurance case?](/faq/what-is-zaps-assurance-case/)

### Updated Add-ons

##### Active scanner rules (beta) version 44

Changed
- Use lower case HTTP field names for compatibility with HTTP/2.

Fixed
- Preserve the HTTP version in the scan rules:
  - Backup File Disclosure
  - Bypassing 403
  - Cross-Domain Misconfiguration
  - Relative Path Confusion
  - Source Code Disclosure - Git
  - Source Code Disclosure - SVN
  - Possible Username Enumeration

##### Linux WebDrivers version 49

Added
- Add aarch64/arm64 geckodriver (Issue 7650).

##### Authentication Helper version 0.1.0

Added
- Support of authentication request identification and configuration.

##### Windows WebDrivers version 48

Changed
- Update ChromeDriver to 109.0.5414.74.

##### MacOS WebDrivers version 49

Changed
- Update ChromeDriver to 109.0.5414.74.

#####  Linux WebDrivers version 48

Changed
- Update ChromeDriver to 109.0.5414.74.

#####  Retire.js version 0.19.0

Changed
- Updated with upstream retire.js pattern changes.
- Maintenance changes.


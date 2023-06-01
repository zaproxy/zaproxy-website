---
title: "ZAP Updates - May 2023"
summary: >
  May 2023 updates and ongoing feature development statuses.
images:
- https://www.zaproxy.org/blog/2023-06-01-zap-updates-may-2023/images/zapbot-monthly-updates-social.png
type: post
tags:
- blog
- update
date: "2023-06-01"
authors: 
- akshath
---

Welcome to our monthly updates blog post!
Join us as we reflect on the work done on ZAP in May, which includes some exciting new features around authentication, the AJAX spider, and the GraphQL add-on.

{{< thanks-sponsors >}}

## Highlights

### Authentication Tester
The Authentication Helper add-on now adds a new Authentication Tester dialog which can be used to test and configure authentication in ZAP.
Read the [blog post](/blog/2023-05-23-authentication-tester/) for more information.

### AJAX Spider Element Exclusion
{{< callout-lavender >}} This feature was sponsored by [**NightVision**](https://www.nightvision.net/). {{< /callout-lavender >}}

The AJAX Spider now allows excluding elements from being crawled, for example, to prevent log outs while crawling the target app.
The exclusions can be configured by XPath, Text, and Attribute via the GUI, API, and the automation framework.

### Improved GraphQL Support
**Spidering**  
The GraphQL add-on has better spidering support, which means it should be able to detect GraphQL endpoints in web applications with more accuracy.
An alert is raised if the discovered endpoint supports introspection.

**Fingerprinting**  
The add-on also alerts you if it is able to detect the specific GraphQL implementation being used by the server. It draws inspiration from fingerprinting techniques used in the tool [graphw00f](https://github.com/dolevf/graphw00f).

### HUD Announcement
The HUD is no longer under active development.
The HUD is a unique and innovative interface that we know some people love. However, it also needs a non trivial amount of maintenance and we don’t have enough volunteers to maintain it.
If you are interested in becoming a maintainer of the HUD, please [reach out](https://groups.google.com/group/zaproxy-hud)!

Read the full announcement [here](https://github.com/zaproxy/zap-hud#the-hud-is-no-longer-under-active-development).

## Other Significant Changes

### Active Scan Bug Fix
A core bug pertaining to stopping active scans was [fixed](https://github.com/zaproxy/zaproxy/pull/7883).

### Node.js API Client Release Candidate
A new version of the Node.js ZAP API client was released and published to the [npm repository](https://www.npmjs.com/package/zaproxy).
Please try it out and [provide feedback](https://github.com/zaproxy/zap-api-nodejs/issues)!

### AMF add-on Retirement
The AMF add-on is being retired. Dependencies of the add-on are no longer reliably available and the add-on is less important with Flash being EOLed.

## Ongoing Work
### Selenium 4
[Selenium](https://www.selenium.dev/) v4 has been out for a while and we are actively working on updating ZAP to use it.
Zest has been updated to use the latest version. Other add-ons will be updated soon.

### Improved Modern Web App Handling Support
{{< callout-lavender >}} This feature is sponsored by [**Jit**](https://www.jit.io/zap?utm_source=zapproxy&utm_medium=banner&utm_campaign=zap-proxy-website-banner). {{< /callout-lavender >}}

We're actively working on making it easier for ZAP to test modern web applications.

### Global Rate Limiting
There is an [open pull request](https://github.com/zaproxy/zap-extensions/pull/4011) (by a first time contributor!) to support rate-limiting all outbound HTTP requests made by ZAP.

## Google Summer of Code
Two students - [Aryan](https://groups.google.com/g/zaproxy-develop/c/2y3HM1zy3bI/m/9LEoWQRWAQAJ) and [Vitika](https://groups.google.com/g/zaproxy-users/c/pArhbMJw5KA/m/bzGCsZlFBwAJ) - were selected to work on ZAP this year :tada:! They're working on the following projects:

### Import Postman Definitions
Vitika is working on allowing ZAP to import Postman definitions, which will enable ZAP to parse and attack API endpoints contained in them. [Read more](https://summerofcode.withgoogle.com/programs/2023/projects/OlBxaE5X).

### ZAP Browser Recorder
Aryan is working on the [ZAP Browser extension](https://github.com/zaproxy/browser-extension) which will enable users to record client-side browser interactions and replay them in ZAP. [Read more](https://summerofcode.withgoogle.com/programs/2023/projects/lx6XL1Rd).

## New Contributors
A very warm welcome to the people who started to contribute to ZAP this month!
- Yang Bai [@Geekby](https://www.geekby.site/)

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 6 authors have pushed 25 commits to main and 25 commits to all branches. On main, 71 files have changed and there have been 2,227 additions and 1,069 deletions. 

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 9 authors have pushed 66 commits to main and 66 commits to all branches. On main, 1,641 files have changed and there have been 84,912 additions and 83,622 deletions. 

## Released add-ons - Full Changelog
In May 2023, we released updated versions of 19 add-ons:

##### Active scanner rules (beta) (v46)
Changed
- Maintenance changes.
- The Insecure HTTP Method Scan rule now allows PUT/PATCH methods, if they return JSON or XML data in response (Issue 7772).
- The Source Code Disclosure - Git scan rule now includes example alert functionality for documentation generation purposes (Issue 6119).

##### Active scanner rules (v54)
Changed
- Maintenance changes.

Fixed
- Correct IP used for AWS/GCP in the Cloud Metadata Potentially Exposed scan rule (Issue 7829).

##### Ajax Spider (v23.14.0)
Added
- Allow to exclude elements from crawl (Issue 5875).
- Configure logging of dependencies directly, instead of relying on core.

##### Authentication Helper (v0.5.0, v0.6.0, v0.7.0)
Added
- Support for verification type of "autodetect" (post 2.12).
- Support for login pages where the username has to be submitted before the password field is accessible.
- Authentication tester dialog.

Fixed
- Ensure verification processor shut down on exit, otherwise the AF hangs.

Changed
- Promoted to Beta

##### Automation Framework (v0.28.0)
Added
- Support for verification type of "autodetect" (post 2.12).

##### DOM XSS Active scanner rule (v15)
Changed
- Maintenance changes.

Fixed
- Disable JSON view in Firefox to prevent hangs when the "Save As" option is invoked.

##### Dev Add-on (v0.2.0)
Added
- Auth pages where the password field is not accessible until the username is filled in.

##### GraphQL Support (v0.15.0, v0.16.0)
Added
- An informational alert is raised if a GraphQL endpoint that supports introspection is discovered during spidering.
- An informational alert is raised when the GraphQL server implementation is identified using fingerprinting techniques.

Changed
- Dependency updates.
- Improved detection of GraphQl endpoints while spidering.
- It is no longer a requirement for schema URLs to end with `.graphql` or `.graphqls` when importing from the UI.

Fixed
- Display the whole operation name in the Sites tree (could be missing a character).

##### Linux WebDrivers (v56)
Changed
- Update ChromeDriver to 114.0.5735.90.

##### MacOS WebDrivers (v56)
Changed
- Update ChromeDriver to 114.0.5735.90.

##### Network (v0.8.0)
Added
- Allow to log client side HTTP traffic for debug purposes, using the name `org.zaproxy.addon.network.http`.

Fixed
- Do not pass-through requests to the local proxies themselves (e.g. ZAP domain, aliases).
- Correctly handle concurrent requests (Issue 7838).
- Close connection on recursive request after notifying all handlers to still allow custom local proxies to serve or rewrite the request.
- Ensure WebSocket and SSE connections are not incorrectly reused (Issue 7730).

##### Passive scanner rules (alpha) (v39)
Added
- Base64, Example, Site Isolation, and Source Code Disclosure scan rules now all provide example alerts for documentation purposes. 
As well as Alert Refs where applicable (Issues 6119 & 7100).

##### Passive scanner rules (beta) (v33)
Changed
- The following scan rules now have functionality to generate example alerts for documentation purposes (Issue 6119).
    - In Page Banner Information Leak
    - Java Serialization Object
    - HTTP Parameter Override
    - Sub Resource Integrity Attribute Missing

##### Passive scanner rules (v48)
Added
- Added alert examples to Directory Browsing (Issue 6119).
- Added Trusted Domains in Cross-Domain JavaScript Source File Inclusion (Issue 7775).

Changed
- Application Error Scan Rule no longer checks JavaScript or CSS responses unless threshold is Low (Issue 7724).
- The Cross-Domain JavaScript Source File Inclusion scan rule now includes example alert functionality for documentation generation purposes (Issue 6119).
- Adjust alert details of Directory Browsing, use same name and description, and use the other info field for the name of the web server identified.

##### Retire.js (v0.22.0)
Changed
- Updated with upstream retire.js pattern changes.

##### Selenium (v15.12.0, v15.12.1)
Changed
- Maintenance changes.

Fixed
- Disable JSON view in Firefox for DOM XSS rule to prevent hangs when the "Save As" option is invoked.
- Install Firefox extensions without using a profile (Issue 7878).

##### Spider (v0.4.0)
Fixed
- Set content-length even when body is empty, unless GET request.

##### Wappalyzer - Technology Detection (v21.21.0)
Changed
- Updated with upstream Wappalyzer icon and pattern changes.

##### Windows WebDrivers (v55)
Changed
- Update ChromeDriver to 114.0.5735.90.

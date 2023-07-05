---
title: "ZAP Updates - June 2023"
summary: >
  June 2023 updates and ongoing feature development statuses.
images:
- https://www.zaproxy.org/blog/2023-07-05-zap-updates-june-2023/images/zapbot-monthly-updates-social.png
type: post
tags:
- blog
- update
date: "2023-07-05"
authors: 
- akshath
---

Welcome to our monthly updates blog post!  
There were a lot of incremental updates to ZAP in June 2023.

## Highlights
### Browser-Based Authentication Support in the AJAX Spider
The AJAX Spider now supports crawling authenticated web pages with the browser-based authentication mode.

### Selenium 4
All ZAP add-ons are now using [Selenium](https://www.selenium.dev/) v4.
A nice thing about this update is that the messages written to stdout by browsers will no longer be shown in the ZAP output.
Please test your Selenium scripts with the latest weekly release and let us know if anything does not work as expected. Read the [Dev Group post](https://groups.google.com/g/zaproxy-users/c/qtXsiOWb7cg) for more information.

### Docker images on GHCR
We now publish all our Docker images on GitHub Container Registry, along with DockerHub.
While anyone can use these images, we expect these to be useful for large organizations which may be hitting DockerHub's image pull limits.
Read the [blog post](/blog/2023-06-13-ghcr-docker-images) for more details.

### Community Scripts Tips (and Tricks)
A new section was added to the [community-scripts repository](https://github.com/zaproxy/community-scripts/tree/main/other/tips) for people to share their ideas and usage tips for ZAP and its add-ons.

## Ongoing Work
### 2.13.0 Release
We are actively working on getting ZAP 2.13.0 ready for release.
You can track the progress at [zaproxy/zaproxy#7924](https://github.com/zaproxy/zaproxy/issues/7924).

### Global Rate Limiting
There is an [open pull request](https://github.com/zaproxy/zap-extensions/pull/4011) (by a first time contributor!) to support rate-limiting all outbound HTTP requests made by ZAP.

## Google Summer of Code
Two students - [Aryan](https://groups.google.com/g/zaproxy-develop/c/2y3HM1zy3bI/m/9LEoWQRWAQAJ) and [Vitika](https://groups.google.com/g/zaproxy-users/c/pArhbMJw5KA/m/bzGCsZlFBwAJ) - were selected to work on ZAP this year :tada:! They're working on the following projects:

### Import Postman Definitions
Vitika is working on allowing ZAP to import Postman definitions, which will enable ZAP to parse and attack API endpoints contained in them. [Read more](https://summerofcode.withgoogle.com/programs/2023/projects/OlBxaE5X).

### ZAP Browser Recorder
Aryan is working on the [ZAP Browser extension](https://github.com/zaproxy/browser-extension) which will enable users to record client-side browser interactions and replay them in ZAP. [Read more](https://summerofcode.withgoogle.com/programs/2023/projects/lx6XL1Rd).

## Miscellaneous Updates
### ZAP vs. OWASP Juice Shop
We now run daily ZAP scans against OWASP Juice Shop, in order to benchmark the AJAX Spider. You can view more details about the scan [here](/docs/scans/juiceshop/).

## New Supporters
We are grateful to our new supporters for their sponsorship of ZAP development work!
- Samir Kelekar
- Noah Newdorf

Please find a list of all our supporters on the [Supporters page](/supporters/).

## New Contributors
A very warm welcome to the people who started to contribute to ZAP this month!
- [ciceroff](https://github.com/ciceroff)
- Chris Dailey ([@dailz-c](https://github.com/dailz-c))
- Thiago Gomes

## Released add-ons - Full Changelog
In June 2023, we released updated versions of 18 add-ons:

##### Active scanner rules (v55)
Changed
- The Parameter Tamper Scan rule now includes example alert functionality for documentation generation purposes (Issue 6119)

Fixed
- Fix typo in ASP payload of Server Side Code Injection scan rule.
- Include complete solution of Server Side Include scan rule.
- Ensure Custom Payloads support can be properly unloaded.

Added
- The Hidden File Finder scan rule now check for Blazor WASM config files.

##### Ajax Spider (v23.14.1)
Fixed
- Handle job with no parameters when reading Excluded Elements (Issue 7889).

##### Alert Filters (v16)
Added
- Allow to specify the HTTP method when filtering the alerts (Issue 5967).

Changed
- Maintenance changes.

##### Authentication Helper (v0.8.0)
Changed
- Prefer username fields with known id/name strings.

Fixed
- Correct example alert of Session Management Response Identified scan rule.

##### Automation Framework (v0.29.0)
Added
- Statistic name to test summary.

Fixed
- Test taking into account previous statistic values.
- Clear Output tab on new plan.

##### Forced Browse (v13)
Changed
- Maintenance changes.
- Default number of threads to 2 * processor count.

##### GraphQL Support (v0.17.0)
Added
- It is now possible to disable the query generator completely.

Changed
- Dependency updates.

##### Linux WebDrivers (v56)
Changed
- Update ChromeDriver to 114.0.5735.90.

##### MacOS WebDrivers (v56)
Changed
- Update ChromeDriver to 114.0.5735.90.

##### Network (v0.9.0)
Changed
- Use `TRACE` level (instead of `DEBUG`) to log client side HTTP traffic to avoid accidentally enabling it when debugging other add-ons.

Fixed
- Do not close the client connection when the server closes it, if not required, to keep the client connection in good state and be used longer.

##### OpenAPI Support (v34)
Changed
- Dependency updates.

Fixed
- Fix exception when generating data for parameters without schema.
- An exception which might occur on large definition imports (Issue 7876).

##### Parameter Digger (v0.2.0)
Fixed
- NullPointerException which could occur with header guesser.

Changed
- Update minimum ZAP version to 2.12.0.
- Maintenance changes.
- Default number of threads to 2 * processor count.
- Change panel designs to allow message selection.

##### Passive scanner rules (v49)
Changed
- The X-AspNet-Version Response Header Scan Rule now includes example alert functionality for documentation generation purposes (Issue 6119).
- The Information Disclosure Suspicious Comments scan rule:
    - Now includes example alert functionality for documentation generation purposes (Issue 6119).
    - Now has a Alert Tag with a OWASP WSTG reference.
    - Added 'DEBUG' to list of suspicious comments.
    - Added custom payload support (via Custom Payloads add-on).
    - Removed suspicious-comments.txt file in favor of payload editing via Custom Payloads add-on.

Fixed
- Ensure Custom Payloads support can be properly unloaded.

##### Report Generation (v0.21.0, v0.22.0)
Added
- Add ZAP version to HTML and PDF reports.
- Automation job: support for sites (Issue 7858).

Fixed
- Validate that `outputSummary`'s job field `summaryFile` has a parent directory.
- Change SARIF's Base64 encoder to not rely on the default character encoding.

##### Retire.js (v0.23.0)
Changed
- Updated with upstream retire.js pattern changes.

##### Value Generator (v6.3.0)
Changed
- Renamed to "Value Generator" to more clearly identify to users what the add-on does.

##### Wappalyzer - Technology Detection (v21.22.0)
Changed
- Updated with upstream Wappalyzer icon and pattern changes.

##### Windows WebDrivers (v55)
Changed
- Update ChromeDriver to 114.0.5735.90.

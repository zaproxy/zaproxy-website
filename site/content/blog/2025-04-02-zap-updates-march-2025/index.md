---
title: "ZAP Updates - March 2025"
summary: >
  We released [2.16.1](/blog/2025-03-25-zap-2-16-1/) and made more authentication handling improvements.
images:
- https://www.zaproxy.org/blog/2025-04-02-zap-updates-march-2025/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2025-04-02"
authors:
- simon
---

## Highlights

{{< blockquote-alert type="important">}}
The big news last month was the release of [2.16.1](/blog/2025-03-25-zap-2-16-1/)!
{{< /blockquote-alert >}}

As part of this release the [Script Console](/docs/desktop/addons/script-console/) now uses the main 
[Output](/docs/desktop/ui/tabs/output/) tab instead of its own "Script Output" panel.
We would love to have [feedback](https://groups.google.com/group/zaproxy-users) on this change :grin:.

Improving ZAP handling of authentication has been a big focus recently, especially relating to 
[Browser Based Authentication](/docs/desktop/addons/authentication-helper/browser-auth/).

## Ongoing Work

While we will still be improving authentication handling, we will also be focusing more on the scan rules, so expect
more scan rule releases in the next few weeks.

In [2.16.0](/blog/2025-01-10-zap-2-16-0/#standard-policy-definitions) we introduced 
[Standard Policy Definitions](/docs/desktop/addons/scan-policies/) which cover active scan rules.
We do not have the equivalent of these for passive scan rules (yet) but we will be making similar recommendations for the passive scan rules.
More details when these changes are available.

Work is also being done in the core to improve ZAP's handling of anti CSRF tokens - we have found some problems with this
when using lots of threads.

## Website Changes

The following significant changes have been made to this website:

* A new [Script Security](/docs/getting-further/script-security/) advanced guide
* Even more [Authentication Tests](/docs/scans/auth/)

{{< blockquote-alert type="note">}}
We now have the option to highlight important information, as demonstrated here!
{{< /blockquote-alert >}}

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 7 authors have pushed 20 commits to main and 20 commits to all branches. On main, 93 files have changed and there have been 1,106 additions and 258 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 8 authors have pushed 81 commits to main and 82 commits to all branches. On main, 1,031 files have changed and there have been 17,843 additions and 4,081 deletions.

A total of [88 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2025-03+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In March 2025, we released updated versions of 26 add-ons:

##### Active scanner rules
**v71**  
Fixed
- External Redirect scan rule to regenerate anti CSRF tokens.

##### Active scanner rules (beta)
**v58**  
Changed
- Replace usage of CWE-200 for the Insecure HTTP Method scan rule (Issue 8714).
- Include exception message of failed attacks in the Server Side Request Forgery scan rule.

Fixed
- Address potential/theoretical reDoS issue in the Insecure HTTP Method scan rule.

##### Ajax Spider
**v23.23.0**  
Changed
- Maintenance changes.

Fixed
- Only count processed URLs. Browsers can make lots of background requests which distort the numbers.

##### Authentication Helper
**v0.25.0**  
Changed
- Use TOTP data defined under user credentials for Client Script and Browser Based Authentication, when available.
- Maintenance changes.
- Depend on newer version of Common Library add-on.

Added
- The Authentication Report now includes information around authentication failures (if applicable).

**v0.24.0**  
Added
- Document custom steps for Browser Based Authentication.
- Document Authentication Report diagnostics data.
- Sanitized post data to auth diagnostics.
- Help content for configuration and use of Header Based Session Management via ZAP API (these additions will only work properly when used with ZAP 2.16.1 or later).

Changed
- Add any session related cookies which are not being tracked.
- Ignore non proxied requests in auth tester diagnostics.
- Replace credentials with special tokens.
- Rewrite of the auth request detection code to handle more cases.
- Add domain to context if creds posted to it and using using auto-detect for session management.
- Skip disabled authentication steps when creating the context from the Authentication Tester dialog.

Fixed
- Allow the Client Script Authentication, and Browser Based Authentication method types as well as Header Based Session Management to be configured via the API (these fixes will only work properly when used with ZAP 2.16.1 or later).
- Bug where some of the data structures were not being reset when the session changed.
- Address concurrent modification exceptions.

**v0.23.0**  
Added
- If authentication fails then try to find a likely looking login link.
- Persist diagnostics to the session and include it in the Authentication Report (JSON) for Client Script and Browser Based Authentication methods.
- A reset button.
- Checks to try to find a verification URL with a login link, if nothing better has been found.

Changed
- Prefer form related fields in Browser Based Authentication for the selection of username field.
- Tweaked the auth report summary keys.
- Only check URLs and methods once for being good verification requests.
- Added API support to the browser based auth method proxy.

Fixed
- Correctly read the API parameters when setting up Browser Based Authentication.
- Tweaked auth report output to ensure that values are properly escaped.
- Report to use better stats with browser based auth.
- Session handling to cope with X-CSRF-Token headers.

##### Automation Framework
**v0.49.0**  
Added
- Document how the TOTP data is defined for a user.
- Use TOTP data defined under user credentials when creating or setting up a context.

Changed
- Progress and log messages with regard to setting scan rule threshold or strength no longer include commas in scan rule ID numbers.
- Depend on newer version of Common Library add-on.

Fixed
- Address exception when loading Client Script authentication method.
- Address exception that would happen when running a plan while having unsaved scripts.

**v0.48.0**  
Changed
- Allow to use variables for the TOTP data.
- Allow to enable diagnostics for Client Script and Browser Based Authentication methods.

Fixed
- Ensure that the Exit Status job accounts for False Positive alerts (Issue 8875).

##### Client Side Integration
**v0.15.0**  
Added
- Add API endpoints for the Client Spider.

**v0.14.0**  
Added
- Added an API action to export the Client Map.

Fixed
- Correct Client Passive Scan Queue counter, which could be showing one when none left.
- Correctly fill input elements when spidering (Issue 8851).

##### Common Library
**v1.31.0**  
Added
- Replace the default Output panel with a tabbed version to allow multiple sources of output to be displayed in separate tabs.
- Add support functionality for usage of TOTP data defined under user credentials.

##### Database
**v0.8.0**  
Changed
- Allow other add-ons to use Flyway for database migration tasks.

##### GraphQL Support
**v0.28.0**  
Fixed
- A Null Pointer Exception which occurred when installing the add-on when Tech Detection (Wappalyzer) add-on was already installed (Issue 8902).

**v0.27.0**  
Fixed
- A Null Pointer Exception which occurred when Fingerprinting and the Tech Detection (Wappalyzer) add-on wasn't available (Issue 8890).

##### Import/Export
**v0.14.0**  
Changed
- Caps fix in Import menu (Issue 2000).

Fixed
- Sites Tree export now correctly handles node names with newlines and special characters (Issue 8858).

##### Linux WebDrivers
**v131**  
Changed
- Update ChromeDriver to 134.0.6998.165.

**v130**  
Changed
- Update ChromeDriver to 134.0.6998.90.

**v129**  
Changed
- Update ChromeDriver to 134.0.6998.88.

**v128**  
Changed
- Update ChromeDriver to 134.0.6998.35.

##### MacOS WebDrivers
**v131**  
Changed
- Update ChromeDriver to 134.0.6998.165.

**v130**  
Changed
- Update ChromeDriver to 134.0.6998.90.

**v129**  
Changed
- Update ChromeDriver to 134.0.6998.88.

**v128**  
Changed
- Update ChromeDriver to 134.0.6998.35.

##### Network
**v0.21.0**  
Fixed
- Ensure message properties are kept mutable even in case of connection close.

##### OpenAPI Support
**v45**  
Fixed
- Correct definition detection while spidering.

Changed
- Clarified an error message which occurs in automation if there's a problem importing.

##### Passive Scanner
**v0.2.1**  
Fixed
- Allow add-ons to obtain (empty) tags before the extension is fully initialised to prevent exceptions.

Changed
- Automation Framework progress and log messages with regard to setting scan rule threshold no longer include commas in scan rule ID numbers.

##### Passive scanner rules
**v64**  
Changed
- The CSP scan rule now treats Wildcard directives separately from those which are undefined but have no fallback (Issue 8700).

**v63**  
Fixed
- Refactored Loosely Scoped Cookie to comply with the latest RFC standards and streamline the loosely scoped cookie check (Issue 8863).
- The Absence of Anti-CSRF Tokens scan rule now only considers forms with GET method at Low Threshold. (Forms submitted via GET, not forms delivered via GET.)
- The Information Disclosure - Suspicious Comments scan rule:
    - Should now be less false positive prone on JavaScript findings (Issues 6622 & 6736).
    - Now skips obvious font requests even if their content type is text/html or text related.
- Updated Timestamp Disclosure Scan Rule to skip JavaScript files when Alert Threshold is set to High (Issue 8380).

Changed
- Replace usage of CWE-200 for the following rules (Issue 8712):
    - Application Error Disclosure (Issue 8716)
    - HTTP Server Response Header
    - Hash Disclosure
    - Information Disclosure - Debug Error Messages
    - Information Disclosure - Sensitive Information in HTTP Referrer Header
    - Information Disclosure - Sensitive Information in URL
    - Information Disclosure - Suspicious Comments
    - Private IP Disclosure
    - Server Leaks Information via "X-Powered-By" HTTP Response Header
    - Session ID in URL Rewrite
    - Timestamp Disclosure
    - X-Backend-Server Header Information Leak
    - X-ChromeLogger-Data (XCOLD) Header Information Leak
    - X-Debug-Token Information Leak
- Removed lack of "report-uri" or "plugin-types" from "CSP: Wildcard Directive" alerts when missing. plugin-types is deprecated and report-uri has no impact for this issue. (Issue 8700)

##### Passive scanner rules (alpha)
**v44**  
Changed
- Update minimum ZAP version to 2.16.0.
- Maintenance changes.
- Replace usage of CWE-200 for the Base64 Disclosure scan rule (Issue 8730).

##### Passive scanner rules (beta)
**v43**  
Changed
- Replace usage of CWE-200 for the In Page Banner Information Leak scan rule (Issue 8731).
- Add support for 'credentialless' COEP value in the Insufficient Site Isolation Against Spectre Vulnerability scan rule (Issue 8840).

##### Report Generation
**v0.38.0**  
Fixed
- Themes are once again properly taken into account when generating reports (Issue 8854).

Added
- Allow report data to be cleaned up after the report generation.
- Allow reports to read HTTP messages through the report helper.

##### Retire.js
**v0.46.0**  
Changed
- Updated with upstream retire.js pattern changes.

**v0.45.0**  
Changed
- Updated with upstream retire.js pattern changes.
- Make Alert's Description, Solution, and References generic, and provide finding specific details via Other Info.

##### Script Console
**v45.9.0**  
Fixed
- Remove unnecessary custom parameter handling.

Changed
- Use the main Output panel for script output.

##### Selenium
**v15.36.0**  
Changed
- Update Selenium to version 4.30.0.

**v15.35.0**  
Added
- Add debug log for the Firefox profile creation.

Changed
- Create profiles with Firefox headless.

##### Spider
**v0.14.0**  
Changed
- Maintenance changes.
- Handle zero max parse size as unlimited.

##### Technology Detection
**v21.45.0**  
Changed
- Updated with enthec upstream icon and pattern changes.

##### Windows WebDrivers
**v131**  
Changed
- Update ChromeDriver to 134.0.6998.165.

**v130**  
Changed
- Update ChromeDriver to 134.0.6998.90.

**v129**  
Changed
- Update ChromeDriver to 134.0.6998.88.

**v128**  
Changed
- Update ChromeDriver to 134.0.6998.35.

##### Zest - Graphical Security Scripting Language
**v48.5.0**  
Changed
- Use TOTP data defined under user credentials during authentication when available.
- Update Zest library to 0.25.0:
  - Update Selenium to version 4.30.0.
- Depend on newer version of Common Library add-on.


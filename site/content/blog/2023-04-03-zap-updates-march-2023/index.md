---
title: "ZAP Updates - March 2023"
summary: >
  March 2023 updates and ongoing feature development statuses.
images:
- https://www.zaproxy.org/blog/2023-04-03-zap-updates-march-2023/images/zapbot-monthly-updates-social.png
type: post
tags:
- blog
- update
date: "2023-04-03"
authors: 
    - akshath
---

We didn't manage to publish a blog post for February 2023, but we're back with one for March!

March may have seemed like a quiet month for ZAP, but a lot has been happening behind the scenes :sparkles:!

{{< thanks-sponsors >}}

## Highlights

[zaproxy#7804](https://github.com/zaproxy/zaproxy/pull/7804)  
A core bug in the Passive Scan Controller which hindered passive scans for high traffic was discovered and fixed.

[zap-extensions#4479](https://github.com/zaproxy/zap-extensions/pull/4479)  
It is now possible to include scripts inline in automation framework plans. This is a step towards making AF plans fully self-contained.

[zap-extensions#4455](https://github.com/zaproxy/zap-extensions/pull/4455)  
The Authentication Helper add-on now supports browser based authentication.

[zap-extensions#4409](https://github.com/zaproxy/zap-extensions/pull/4409)  
You can now right click anywhere in ZAP to generate and paste an OAST payload from a configured service.



## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 5 authors have pushed 16 commits to main and 16 commits to all branches.
On main, 36 files have changed and there have been 3,124 additions and 2,867 deletions. 

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 7 authors have pushed 49 commits to main and 49 commits to all branches.
On main, 236 files have changed and there have been 6,143 additions and 871 deletions. 



## Ongoing Work
**Authentication**  
We are actively working on improving the authentication experience in ZAP.
For example, changes to add automatic detection and configuration of header-based session management to ZAP are being tested actively at the moment.

**Selenium 4**  
[Selenium](https://www.selenium.dev/) v4 has been out for a while and we are actively working on updating ZAP to use it.
There is a chance that this update could break existing scripts - more details when we have them.

**Form Handler RegEx Support**  
You will soon be able to match parameters names in HTTP requests using regular expressions using the Form Handler add-on.

**GraphQL IDE**  
The GraphQL add-on is being updated to include [GraphiQL](https://github.com/graphql/graphiql/).
The GraphQL IDE will be exposed via the ZAP API and all requests made using the IDE will be proxied through ZAP.

**NodeJS API Client**  
The [ZAP API NodeJS client](https://github.com/zaproxy/zap-api-nodejs/) and tooling around it were updated in March. The client is pending a release.

**2.13.0 Release**  
We may do a major release of ZAP as soon as April 2023.



## Website Updates
There is now a new page on this website which talks about how you can [sponsor ZAP development](/sponsor/).
Simon also wrote a blog post titled ["How Should We Fund Zap Development?"](/blog/2023-03-09-how-should-we-fund-zap-development/) which goes into detail about the current status of ZAP funding.

On the new Sponsor page, you can also find our [new policy on historic donations](/sponsor/#historic-donations).
As per this policy, sponsors were [reassigned to new levels](https://github.com/zaproxy/zaproxy-website/pull/1620) for 2023.

We would like to give a shout-out to our new Bronze level sponsor, [Tenebris](https://tenebris.com/). They were added to the [supporters](/supporters/) page.

We were also made aware of a new third-party-service that uses ZAP called Checkmarx DAST. They were added to the [Third Party Products and Services](/third-party-services/) page.

The [roadmap](/docs/roadmap/) was updated to reflect the latest status of ongoing ZAP development.



## Miscellaneous Updates
The [ZAP API .NET Client](https://github.com/zaproxy/zap-api-dotnet) was updated for ZAP 2.12.0 and a [new version](https://github.com/zaproxy/zap-api-dotnet/releases/tag/v2.12.0) was released.

We're now using [UptimeRobot](https://uptimerobot.com/) to monitor the statuses of various ZAP services. [Click here](https://stats.uptimerobot.com/W03Dvh6Wk4) to see the dashboard.

A new Gradle Plugin called [gradle-plugin-common](https://github.com/zaproxy/gradle-plugin-common) was created for managing common build related configurations and tasks across ZAP repositories.



## Released add-ons - Full Changelog
In March 2023, we released updated versions of 23 add-ons:

##### Community Scripts (v16)
Added
- httpsender/UpgradeHttp1To2.js - changes all HTTP/1.1 requests to use HTTP/2
- standalone/devTools.js - Tools used to explore objects returned by the Java engine and better plug Nashorn objects into it

Changed
- encode-decode/double-spacer.js - adapted to the functionality of Encoder 1.0.0.

Removed
- standalone/Run report.js - no longer working, the old/deprecated class that it used was removed.

Fixed
- active/User defined attacks.js - correctly escape dot character in some evidence strings.
- targeted/curl_command_generator.js - prevent and warn on local file inclusion when generating the command.
  Thanks to James Kettle (@albinowax) for reporting.

##### Script Console (v36, v37, v38)
Added
- Support for inline scripts in the Automation Framework.

Fixed
- extender/Copy as curl command menu.js - prevent and warn on local file inclusion when generating the command.
  Thanks to James Kettle (@albinowax) for reporting.
- Do not require a name if file provided when adding script with automation job.

Changed
- Maintenance changes.

##### Requester (v7.2.0)
Fixed
- Allow to read HTTP/2 trailing headers.

Changed
- Maintenance changes.

##### Automation Framework (v0.25.1, v0.26.0)
Added
- Support for dynamically added browser based authentication.

Fixed
- NPE when accessing active scan job.

##### Ajax Spider (v23.13.0)
Added
- Automation Framework - HTML elements to click support

Fixed
- Close the AJAX Spider dialogue when uninstalling the add-on.

##### Quick Start (v37)
Fixed
- Show correct error message when unable to access the provided URL, also, add the scheme if none provided.
- Ensure the add-on is not in use before uninstalling.

##### OAST Support (v0.15.0)
Added 
- A context menu to paste payloads from all the supported OAST services (Issue 7665).

##### Encoder (v1.1.0)
Added
- A context menu active on the output text areas facilitating the replacement of input text.
- PowerShell encoder (hat tip to hackvertor/hackvertor#71 for the idea and details).

##### Browser View (v6)
Added
- Add info and repo URLs.

Changed
- Update minimum ZAP version to 2.12.0.
- Maintenance changes.
- Make missing JavaFX logging less verbose in regular use.
- Update help with the requirements to use the add-on.

##### Authentication Helper (v0.3.0)
Added
- Support for browser based authentication.

##### WebDrivers (Windows: v51; Linux, MacOS: v52)
Changed
- Update ChromeDriver to 111.0.5563.64.

##### Wappalyzer - Technology Detection (v21.19.0)
Changed
- Updated with upstream Wappalyzer icon and pattern changes.
- Maintenance changes.

##### Retire.js (v0.20.0)
Changed
- Updated with upstream retire.js pattern changes.
- Alert Tags for CVEs now include standardized links.

##### Passive scanner rules (beta) (v32)
Changed
- Maintenance changes.

Fixed
- The Cacheable scan rule should now be more tolerant when parsing s-max-age values.

##### Passive scanner rules (alpha) (v38)
Fixed
- Use case insensitive HTTP field name check in Insufficient Site Isolation Against Spectre Vulnerability scan rule.

Changed
- Maintenance changes.

##### Passive scanner rules (v46)
Changed
- The PII Disclosure scan rule:
    - Now includes a solution statement.
    - Now more specifically portrays alert Evidence.
    - Now includes example alert functionality for documentation generation purposes (Issue 6119).
    - Will now only consider PDFs at Low threshold.
- Maintenance changes.
- The HeartBleed scan rule alert now includes a CVE tag.
- Timestamp Disclosure scan rule now excludes values in "RateLimit-Reset", "X-RateLimit-Reset", and "X-Rate-Limit-Reset" headers (Issue 7747).

Fixed
- The CSP Missing scan rule now alerts when the Content-Security-Policy header is missing, and when the obsolete X-Content-Security-Policy or X-WebKit-CSP are found (Issue 7653).

##### Active scanner rules (beta) (v45)
Changed
- Maintenance changes.
- The Log4Shell scan rule alerts now include Alert References and Tags.
- The Spring4Shell scan rule now includes a CVE Alert Tag and reference link.

Fixed
- Use same non-default port in the HTTP Only Site scan rule.

##### Active scanner rules (v53)
Changed
- Maintenance changes.
- The SQL Injection Scan Rule filters reflected payload containing escaped characters like '&amp;' and '&quot;' before response content comparison to reduce false negatives.

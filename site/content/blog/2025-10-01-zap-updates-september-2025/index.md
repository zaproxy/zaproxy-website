---
title: "ZAP Updates - September 2025"
summary: >
  Configuring scan policies with alert tags, WAVSEP adoption, alert de-duplication and a new add-on publishing guide.
images:
- https://www.zaproxy.org/blog/2025-10-01-zap-updates-september-2025/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2025-10-01"
authors:
- simon
---

## Highlights

As we head into October, here’s a roundup of what’s been happening around ZAP over the past month: new features, enhancements, and behind-the-scenes improvements you should know about.

### Configuring Scan Policies with Alert Tags

You can now [configure scan policies with alert tags](/blog/2025-09-03-configuring-scan-policies-with-alert-tags/) in [Automation Framework](/docs/automate/automation-framework/) plans.

This will make configuring scan policies much more intuitive and maintainable.

### WAVSEP Adoption

ZAP is officially [adopting and maintaining WAVSEP](/blog/2025-09-08-zap-is-adopting-wavsep/) (the Web Application Vulnerability Scanner Evaluation Project). 

WAVSEP provides a testbed of web app vulnerabilities used to benchmark and evaluate scanners.

By bringing it in under the ZAP umbrella, the team hopes to keep it updated, extend it to support new types of vulnerabilities, and ensure it's a reliable baseline for evaluation. 

We also welcome contributions from the community!

### Alert De-Duplication

The team is introducing a new mechanism to [suppress duplicate alerts](/2025-09-30-alert-de-duplication/), especially from passive scans. 

* Duplicate alerts often happen when passive scans flag essentially the same issue across multiple URLs (even with trivial differences).
* ZAP is evolving its Alert Tree logic to adopt naming rules from the Sites Tree, so repeated alerts collapse into a single representative instance. 
* Systemic alerts (e.g. missing security headers across many endpoints) will get a new SYSTEMIC tag; beyond a certain threshold, additional instances of that alert will be suppressed. 
* Reporting, APIs, and alerts will include a nodeName field to help with consistent comparisons across scans. 

These changes should help reduce noise, make scan results more meaningful, and improve cross-scan comparisons.

### ZAP Add-on Publishing Guide

We have a new guide for [publishing ZAP Add-ons](/docs/guides/how-to-publish-a-zap-addon/),
designed to assist developers who want to contribute add-ons to the growing ZAP ecosystem.

The new streamlined process should make it much easier to publish add-ons on the 
[ZAP Marketplace](/addons/).
You can now maintain add-ons in your own repos and we'll fork/update them when
you would like the add-ons to be released.

If you have any questions about developing or publishing add-ons then just ask them on the
[ZAP Developer Group](https://groups.google.com/group/zaproxy-develop).

## Ongoing Work

We have also been making more improvements to authentication handling.

Beyond the [Microsoft login enhancements](/blog/2025-09-02-zap-updates-august-2025/#microsoft-online-login-support) announced last month, the ZAP team continues to invest in broader authentication support.

The aim is to keep improving ZAP's support for the wide range of authentication flows used in real world apps.

As these updates land, you are encouraged to test your particular auth flows (especially those that fail or only partially succeed) and provide feedback — this helps us refine detection, handling, and fallback logic.

We are also getting closer to releasing 2.17.0. No date yet, but stay tuned for more news!

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 7 authors have pushed 18 commits to main and 18 commits to all branches. On main, 26 files have changed and there have been 2,704 additions and 1,905 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 6 authors have pushed 80 commits to main and 80 commits to all branches. On main, 1,953 files have changed and there have been 25,468 additions and 13,632 deletions.

A total of [92 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2025-09+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In September 2025, we released updated versions of 32 add-ons:

##### Active scanner rules
**v74**  
Added
- QA CICD policy tag to selected rules.

Changed
- Update alert references to latest locations to fix 404s and resolve redirections.
- The SQL Injection - Oracle (Time Based) rule now uses DBMS_SESSION.SLEEP instead of an "expensive" query.

Fixed
- Hidden Files rule raising false positives if server returning 200 for files that don't exist (Issue 8434).

**v73**  
Changed
- Maintenance changes.
- Depends on an updated version of the Common Library add-on.
- The following scan rules and their alerts have been renamed to clarify that they're time based (Issue 7341).
    - SQL Injection - Oracle
    - SQL Injection - MsSQL 
    - SQL Injection - MySQL
    - SQL Injection - Hypersonic
    - SQL Injection - SQLite
    - SQL Injection - PostgreSQL
- The Remote OS Command Injection scan rule has been broken into two rules; one feedback based, and one time based (Issue 7341). This includes assigning the time based rule ID 90037.
- The External Redirect scan rule payload were slightly re-ordered to prioritize HTTPS variants.
- For Alerts raised by the SQL Injection scan rules the Attack field values are now simply the payload, not an assembled description.
- The Cross Site Scripting (Reflected) scan rule was updated to address potential false negatives when the injection context is a tag name and there is some filtering.
- The Path Traversal scan rule now includes further details when directory matches are made (Issue 8379).
- Add help details about behavior of scan rules which leverage OAST (Issue 8682).

Added
- Rules (as applicable) have been tagged in relation to HIPAA and PCI DSS.
- The Cloud Metadata Potentially Exposed scan rules now has a CWE reference.
- Scan rules which execute time based attacks now include the "TEST_TIMING" alert tag.
- The XPath Injection scan rule now supports error patterns provided via the Custom Payloads add-on (Issue 8958). A minimum of Custom Payloads 0.15.0 is required to take advantage of this optional functionality.

##### Active scanner rules (alpha)
**v51**  
Changed
- Update alert references to latest locations to fix 404s and resolve redirections.

**v50**  
Changed
- Depends on an updated version of the Common Library add-on.

Added
- Rules (as applicable) have been tagged in relation to HIPAA and PCI DSS.
- The Web Cache Deception scan rule now has a CWE reference.

##### Active scanner rules (beta)
**v62**  
Added
- QA CICD policy tag to selected rules.

Changed
- Update alert references to latest locations to fix 404s and resolve redirections.

**v61**  
Changed
- Add alert references to CORS Header scan rule alerts (Issue 7100).

**v60**  
Changed
- Depends on an updated version of the Common Library add-on.
- Add help details about behavior of scan rules which leverage OAST (Issue 8682)

Fixed
- Error logs to always include stack trace.

Added
- Rules (as applicable) have been tagged in relation to HIPAA and PCI DSS.
- The 403 Bypass scan rule now has a CWE reference.
- The Shell Shock scan rule now has the TEST_TIMING alert tag.

##### Ajax Spider
**v23.26.0**  
Added
- Support for stopping the spiderAjax automation job.

##### Authentication Helper
**v0.29.0**  
Added
- Add login word variant for Spanish.
- Log exception during authentication with diagnostics enabled.
- Add the statistics of the site of the verification URL to the Authentication Report.
- Add Authentication Report section for the domains accessed during the authentication.

Changed
- Update alert references to latest locations to fix 404 and resolve redirection.
- Search also for login elements with ARIA role button.
- Show always the diagnostic HTTP messages in the Sites tree and History tab when importing the Authentication Report.
- Include the site in the site statistics of the Authentication Report.

Fixed
- Collect the current value of the element's attributes for the authentication diagnostics.
- In the Authentication Report set authentication successful only when the login was verified with the indicators.

**v0.28.0**  
Added
- Add wait authentication step to Browser Based Authentication.
- Include Web Element's selector in the Authentication Report.
- Support for tracking authentication and CSRF headers automatically for Header based auth.
- Add Authentication Report section for the log file and for the Automation Framework plan.
- Support for step delay in Browser Based Authentication, which replaces the auth tester "demo mode".
- Support for min wait for time in Client Script Authentication.
- Allow to manage the authentication diagnostics through the GUI.

##### Automation Framework
**v0.53.0**  
Fixed
- Correct Session Management script's path validation with variables.
- Correct default value for Active Scan option `handleAntiCSRFTokens` in templates and help.

**v0.52.0**  
Added
- Support for step delay in Browser Based Authentication.
- Support for min wait for in Client Script Authentication.
- Support for url in activeScan job.
- Support for stopping plans and jobs.
- Allow selecting rules in policy definitions using alert tags.

Changed
- Refer to output panel for errors.

Fixed
- Bug in handling headers with colons in the values.
- Use default authentication poll frequency when none specified, if the value is less than one a progress warning occurs.
- Do not warn if "enabled" or "alwaysRun" properties specified.
- Use the authentication method's diagnostics state when creating a plan from a context.

##### Call Home
**v0.15.0**  
Added
- LLM, and Value Generator (Form Handler) stats to telemetry.

##### Client Side Integration
**v0.17.0**  
Added
- Edge recorder link to help.
- Support for stopping the spiderCient automation job.
- Support for configuring the client passive scan rules via the passiveScan-config Automation Framework job. This add-on now depends on the pscan add-on.

Changed
- Updated Chrome and Firefox extensions to v0.1.6.
- Reduce warnings when passive scanning.

Fixed
- Error logs to always include stack trace.
- Log Firefox missing at debug instead of error.

##### Common Library
**v1.36.0**  
Added
- QA CICD policy tag.

**v1.35.0**  
Changed
- Update dependency.
- Expose constant related to authentication.

##### Custom Payloads
**v0.15.0**  
Added
- Added support for adding payloads which are disabled by default.

##### Image Location and Privacy Scanner
**v7**  
Changed
- Update alert reference and help link to latest location.

##### Import/Export
**v0.15.0**  
Changed
- Update dependency.
- Use always the same newlines (LF) when exporting HAR files.

##### Linux WebDrivers
**v158**  
Changed
- Update ChromeDriver to 140.0.7339.207.

**v157**  
Changed
- Update ChromeDriver to 140.0.7339.185.

**v156**  
Changed
- Update ChromeDriver to 140.0.7339.82.

**v155**  
Changed
- Update ChromeDriver to 140.0.7339.80.

##### MacOS WebDrivers
**v158**  
Changed
- Update ChromeDriver to 140.0.7339.207.

**v157**  
Changed
- Update ChromeDriver to 140.0.7339.185.

**v156**  
Changed
- Update ChromeDriver to 140.0.7339.82.

**v155**  
Changed
- Update ChromeDriver to 140.0.7339.80.

##### Network
**v0.23.0**  
Added
- NetworkUtils class.

Changed
- Use only positive serial numbers for the Root CA certificate (Issue 8984).

Fixed
- Correctly inform about unknown proxy host on all OSes.

##### OpenAPI Support
**v46**  
Fixed
- Warn logs to always include stack trace.
- Correct generation of empty object.

##### Passive Scanner
**v0.5.0**  
Changed
- Updated Automation Framework template plans and help content for passiveScan-* jobs to be more consistent.

**v0.4.0**  
Added
- Allow to configure the option max body size through the API (Issue 8974).
- Support for stopping the passiveScan-wait automation job.

Changed
- To only record `stats.pscan.<rule-name>` statistics for scanners that have no IDs.
- To support other add-ons which manage passive scan rules. These rules will not currently be fully supported in the UI.

##### Passive scanner rules
**v67**  
Changed
- Add alert references to HTTP Server Response Header scan rule alerts (Issue 7100, 9050).
- Update alert references to latest locations to fix 404s and resolve redirections.

##### Passive scanner rules (alpha)
**v46**  
Changed
- Update alert references to latest locations to fix 404s and resolve redirections.

##### Passive scanner rules (beta)
**v46**  
Changed
- Update alert references to latest locations to fix 404s and resolve redirections.

**v45**  
Changed
- Add alert references to Content Cacheability scan rule alerts (Issue 7100).

##### Postman Support
**v0.7.0**  
Changed
- Enable API functionality for imports.

##### Report Generation
**v0.41.0**  
Changed
- Corrected a minor typo and image alt tags in the help.

Added
- An ISO 8601 date and time field (ex: "created": "2025-09-03T12:49:35.236211400Z") has been added to the Traditional JSON, Traditional JSON with Requests and Responses, Traditional XML, Traditional XML with Requests and Responses.

**v0.40.0**  
Changed
- Provide/log details on report errors through the Automation Framework job.
- Allow to include Automation Framework errors and warnings in the Traditional JSON Report with Requests and Responses report.

##### Retire.js
**v0.49.0**  
Changed
- Updated with upstream retire.js pattern changes.

##### SOAP Support
**v28**  
Added
- QA CICD policy tag to active scan rules.

**v27**  
Fixed
- When parsing WSDL files ensure the dateTime values are generated in UTC.

**v26**  
Added
- The SOAP Action Spoofing, SOAP XML Injection, and WSDL File Detection scan rules now all have CWE references.

##### Scan Policies
**v0.5.0**  
Changed
- Updated based on Rules' Policy Tag assignments.

Added
- QA CI/CD scan policy help.

**v0.4.0**  
Changed
- Updated based on Rules' Policy Tag assignments.

##### Script Console
**v45.13.0**  
Changed
- Update help with newer JavaScript engine and links.

Fixed
- Error logs to always include stack trace.

##### Selenium
**v15.40.0**  
Changed
- Update Selenium to version 4.35.0.

##### Spider
**v0.16.0**  
Added
- Support for stopping the spider automation job.

##### Technology Detection
**v21.48.0**  
Changed
- Updated with enthec upstream icon and pattern changes.
- During load the time taken to process the data files will be shown in human readable format (generally seconds), as well as milliseconds (ms).
- Maintenance changes.

##### Tips and Tricks
**v15**  
Changed
- Change IRC tip to reference Slack.

##### Windows WebDrivers
**v159**  
Changed
- Update ChromeDriver to 140.0.7339.207.

**v158**  
Changed
- Update ChromeDriver to 140.0.7339.185.

**v157**  
Fixed
- Re-release because of accidental binary deletion of version 156.

**v155**  
Changed
- Update ChromeDriver to 140.0.7339.80.

##### Zest - Graphical Security Scripting Language
**v48.9.0**  
Changed
- Allow to keep auhtenticator's proxy running after the authentication.


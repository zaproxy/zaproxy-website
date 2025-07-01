---
title: "ZAP Updates - June 2025"
summary: >
  A new Intro video, lots of authentication work, and more news on the ZAP browser extensions.
images:
- https://www.zaproxy.org/blog/2025-07-01-zap-updates-june-2025/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2025-07-01"
authors:
- simon
---


## Highlights

Once again it's been a very busy couple of months for the ZAP team. So busy that we didn't have time to post an update last month!

### New Introduction Video

We have a brand new "Intro to ZAP by Checkmarx" video:

{{< youtube uuid="yywD8ebNn6o" >}}

Feedback appreciated 😀

### Authentication Changes

Authentication has continued to be a big focus for us. The documentation is definitely lagging behind, but the plan is to 
publish new articles / blog posts ASAP.

### Browser Extensions

As you may already know, ZAP now has 2 browser extensions. These were originally introduced to stream data from
the browser back to ZAP, but they have been extended to support recording the actions you take in the browser.

ZAP now supports these [Client Side Scripts](/docs/desktop/addons/client-side-integration/record/) as authentication scripts,
so you can use them to record complex authentication flows.

#### ZAP Full Extension

The "Full" extension is supported on Firefox and Chrome:
* [Firefox - ZAP by Checkmarx Browser Extension](https://addons.mozilla.org/en-GB/firefox/addon/zap-browser-extension)
* [Chrome - ZAP by Checkmarx Browser Extension](https://chromewebstore.google.com/detail/zap-by-checkmarx-browser/cgkggmillbmmpokepnicllalaohphffo)

While these are available on the relevant browser stores, we don't expect many people to download them from there.
They are bundled with ZAP (as part of the [Client Side Integration](/docs/desktop/addons/client-side-integration/) add-on) 
and are automatically installed on the browsers launched from ZAP.

#### ZAP Recorder Extension

The Recorder extension is a cut down version of the Full extension, and only allows you to record scripts, it will not try to stream any data to ZAP.

You will need to install this extension manually, as it's designed to be used where you need to record a script on a machine
without ZAP installed.

As of last month this extension is now available on Edge as well as Firefox and Chrome:

* [Firefox - ZAP by Checkmarx Browser Recorder](https://addons.mozilla.org/en-GB/firefox/addon/zap-by-checkmarx-recorder/)
* [Chrome - ZAP by Checkmarx Browser Recorder](https://chromewebstore.google.com/detail/zap-by-checkmarx-recorder/belmenkmkfloppjbbgibipmgcmnkaiki)
* [Edge - ZAP by Checkmarx Browser Recorder](https://microsoftedge.microsoft.com/addons/detail/zap-by-checkmarx-recorder/okgkpllibfpmngdhhponlojjgeabfeee)

#### ZAP in Ten / ADDO Videos

Unfortunately the ZAP in Ten and All Day Dev Ops videos have been deleted from Vidyard. We never had copies of these videos
and it was not possible to download them from that site, so they are probably gone for good 😢.

However, as they were getting fairly old and a bit out of date this could be a good time to record a new series, 
starting from scratch again 😀.

More news when we have it.

## Ongoing Work

Authentication will still be a focus for us, but we will also be starting to change our focus to look at both crawling modern web apps more effectively, and the scan rules.


## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 5 authors have pushed 8 commits to main and 8 commits to all branches. On main, 13 files have changed and there have been 241 additions and 168 deletions.

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 9 authors have pushed 68 commits to main and 83 commits to all branches. On main, 1,921 files have changed and there have been 17,732 additions and 3,818 deletions.

A total of [77 human PRs were merged](https://github.com/search?q=org%3Azaproxy+type%3Apr+-author%3Azapbot+-author%3Aapp%2Fdependabot+sort%3Aupdated-asc+closed%3A2025-06+is%3Amerged&type=pullrequests) on the ZAP repos.

## Released Add-ons - Full Changelog
In June 2025, we released updated versions of 33 add-ons:

##### Active scanner rules
**v72**  
Added
- Some Postgres error messages in the SQL Injection scan rule.
- All rules have been tagged of interest to Penetration Testers.

Changed
- SQL Injection scan rule to start using ComparableResponse - part of the work to reduce False Positives.
- Depends on an updated version of the Common Library add-on.
- Due to it being 2025 and the mass adoption of HTTPS: De-prioritized plain HTTP payloads in the External Redirect scan rule.

Fixed
- SQL Injection scan rule to treat a 500 response to an SQLi attack as a likely vulnerability.
- Use location header in SQL injection response comparisons (Issue 8651).
- Addressed False Negative with simple allow list handling in the External Redirect scan rule.

##### Active scanner rules (alpha)
**v49**  
Changed
- Update minimum ZAP version to 2.16.0.
- Maintenance changes.
- Depends on an updated version of the Common Library add-on.

Added
- All rules (except examples) have been tagged of interest to Penetration Testers.

##### Active scanner rules (beta)
**v59**  
Changed
- The extension now has a user friendly name for use in the GUI.
- Depends on an updated version of the Common Library add-on.

Added
- All rules have been tagged of interest to Penetration Testers.

##### Ajax Spider
**v23.24.0**  
Added
- Allow to configure how the scope is checked, either Flexible or Strict, to allow or not access to out of scope domains.
- Allow to avoid logout elements.

Changed
- Maintenance changes.

Fixed
- Allow access to domains out of context (e.g. SSO) when using Client Script and Browser Based Authentication.

##### Alert Filters
**v24**  
Changed
- Use the alert reference for statistics.
- Workaround core issue that prevents the filters to be correctly applied (Issue 8888).

Added
- Added parameter descriptions for the ZAP API.

##### Authentication Helper
**v0.26.0**  
Added
- Add configuration support for the wait time after Client Script Based Authentication.
- Include the Web Element being interacted with in the Client Script Based Authentication diagnostics.
- Allow to enable authentication diagnostics for Client Script and Browser Based Authentication through the GUI.
- Automation Framework errors to the Authentication Report.
- Replace TOTP token during Client Script Based Authentication.
- Include more diagnostics in Client Script and Browser Based Authentication methods.
- Improve Authentication Report:
  - Add the ID of the step to make it easier to match with extracted screenshots.
  - Include the script used by the Client Script Based Authentication.
  - Add the initiator to the HTTP Messages to know what those messages correspond to.
  - Include the tag name of the Web Element, now collecting `button`s along with `input`s.
- Detection of session tokens in non standard headers.
- Search for username/password fields under shadow DOMs with Browser Based Authentication.

Changed
- Warn when the recorded script used with Client Script Based Authentication does not launch a browser.
- Updated to depend on Zest add-on 48.6.0.
- Maintenance changes.
- Depend on reports 0.39.0 to include AF errors.
- Use Header Based Session Management configuration to find a better candidate authentication message with Client Script and Browser Based Authentication methods.
- Client Script authentication to refresh the page of no suitable verification URL found.
- Wait for the detection of the session method in Client Script Based Authentication method.
- Include the name of the interaction in the Client Script Based Authentication diagnostics.
- Clear fields before sending keys for Browser Based Authentication, including when using steps.
- Do not add an empty line to the start of the Other Info of Session Management Response Identified scan rule's alerts.
- Update the Client Script Based Authentication help page with the new Automation Framework `scriptInline` field.
- The Authentication Request Detection and Session Management Detection scan rules now skip resources (images, css, js, etc) which are unlikely to be relevant.
- The Verification Detection scan rule now skips messages that seem related to login/logout/registration functionality.
- Now depends on minimum Common Library version 1.33.0.

Fixed
- Correct descriptions of the Zest script steps in the Authentication Report.
- Fix loading/saving of Client Script Based Authentication through the GUI.
- Inject user credentials into the script when running the Client Script Based Authentication browser integration.
- Delay when recording diagnostics.
- Allow to use zero login page wait for Client Script and Browser Based Authentication methods through the GUI.
- Ensure Client Script Based Authentication method has a clean state when reauthenticating.
- Handle missing username field in Browser Based Authentication.
- Correct the processing of cookies with the same name in Header Based Session Management method.
- Correct redirection handling when checking verification URLs.
- Verification URL comparison.
- Use the session token from JSON string response.
- Do not auto configure the Header Based Session Management method with duplicated session tokens.
- Ensure that auth messages with both known and unknown Session tokens are correctly processed.
- Respect Client Script Based Authentication's Login Page Wait when authenticating in browsers (e.g. AJAX Spider).
- Correct handling of JSON arrays in the Authentication Request Identified scan rule.

##### Automation Framework
**v0.50.0**  
Added
- Add support for the wait time of the Client Script Based Authentication.
- Allow to inline scripts for Script and Client Script Based Authentication.

Changed
- Maintenance changes.
- Adjusted further dialog, progress, and log messages with regard to preventing inclusion of commas in scan rule ID numbers. As well as ensuring consistency in use of ID (full caps) for table column headings, and the Add Add-ons dialog.

Fixed
- Correctly handle missing script engines.
- Correct error messages of the statistics test.
- Allow to use zero login page wait for Client Script and Browser Based Authentication methods.
- Ensure log and progress messages related to scripts and script engines are not all referred to as session management related.

##### Client Side Integration
**v0.16.0**  
Added
- Client Spider scope check.
- Added optional parameters for Page Load Time and Max Crawl Depth to the Client Spider API.
- Recording advice and guidance.

Changed
- Updated Chrome and Firefox extensions to v0.1.3.

Fixed
- Client Spider to allow all requests while authenticating.
- Ensure that the `clientSpider` API endpoint `status` returns 100(%) only when finished.

##### Common Library
**v1.33.0**  
Added
- Constants related to authentication.

##### Encoder
**v1.7.0**  
Fixed
- Address malformed HTML in the help.

##### Fuzzer
**v13.16.0**  
Changed
- Maintenance changes.
- Use a scrollbar in the Default Category combo box instead of making the options panel larger (Issue 8923).

##### Image Location and Privacy Scanner
**v6**  
Added
- Updated to Image Location and Privacy Scanner version 1.2; merged from [source](https://github.com/veggiespam/ImageLocationScanner)
    - Updated dependency Metadata Extractor to 2.19.0
    - Added support for scanning HEIF image format used by modern iPhone images
    - Added support for Samsung, more Reconyxs, & Sony camera proprietary privacy leakage 
    - Added detection for a few new information leakage tags in currently supported cameras.
    - Added GPS elevation detection
- The rule has been tagged of interest to Penetration Testers and QA.

Changed
- Depends on an updated version of the Common Library add-on.
- Update minimum ZAP version to 2.16.0.

Removed
- No longer support XMP as it was too unreliable.

##### Linux WebDrivers
**v145**  
Changed
- Update ChromeDriver to 138.0.7204.49.

**v144**  
Changed
- Update ChromeDriver to 137.0.7151.119.

**v143**  
Changed
- Update ChromeDriver to 137.0.7151.70.

**v142**  
Changed
- Update ChromeDriver to 137.0.7151.68.

##### MacOS WebDrivers
**v145**  
Changed
- Update ChromeDriver to 138.0.7204.49.

**v144**  
Changed
- Update ChromeDriver to 137.0.7151.119.

**v143**  
Changed
- Update ChromeDriver to 137.0.7151.70.

**v142**  
Changed
- Update ChromeDriver to 137.0.7151.68.

##### Network
**v0.22.0**  
Fixed
- A typo in the help with regard to Transparent Proxying.

Changed
- Default Global Exclusions patterns:
    - All case insensitive (Issue 8930).
    - Fix a naming mistake in "ExtParam - .NET adx resources (SR/WR.adx?d=)" adx should have been axd.
    - Extend Image related patterns to include svg and webp.
    - Extend Audio/Video patterns to include webm.
- Change default log level of cookies processing to error to avoid flooding the logs with warnings when the cookies are rejected/invalid.

##### OAST Support
**v0.22.0**  
Changed
- Link to repositories/documentation instead of service URLs in the help content.
- No longer provide a default server URL for Interactsh due to (random) unavailability.

##### Passive Scanner
**v0.3.0**  
Changed
- Adjusted further dialog, progress, and log messages with regard to preventing inclusion of commas in scan rule ID numbers. As well as ensuring consistency in use of ID (full caps) for table column headings.
- Depend on the Common Library add-on.
- Log all errors that might happen during the passive scan.

Added
- The Stats Passive Scan Rule been tagged of interest to Penetration Testers, as well as adding tags associated with DEV or QA applicability.

##### Passive scanner rules
**v65**  
Added
- All rules have been tagged of interest to Penetration Testers, as well as adding tags associated with DEV or QA applicability.

Changed
- Depends on an updated version of the Common Library add-on.
- Clarified details of the Viewstate scan rule alerts, in some instances they were misleading (containing colons suggesting further data).
- The Open Redirect scan rule (ID: 10028) and its alerts have been renamed "Off-site Redirect" as this is a passive rule which compares the authority of the origin and destination and there is no assurance of a truly "open" redirect.

##### Passive scanner rules (alpha)
**v45**  
Added
- All rules have been tagged of interest to Penetration Testers, as well as adding tags associated with DEV or QA applicability.

Changed
- Depends on an updated version of the Common Library add-on.

##### Passive scanner rules (beta)
**v44**  
Changed
- Dropped period from extension name used in the GUI.
- Depends on an updated version of the Common Library add-on.

Fixed
- A false positive with the Sub Resource Integrity Attribute Missing scan rule with regard to which link tags it raises alerts on (Issue 8938).

Added
- All rules have been tagged of interest to Penetration Testers, as well as adding tags associated with DEV or QA applicability.

##### Report Generation
**v0.39.0**  
Changed
- Caps fixed for Section Selections of the Risk and Confidence HTML report (Issue 2000).

Added
- The Automation Framework progress to the report data when run via an AF job.
- Statistics to the traditional extended JSON and XML reports.

Fixed
- Correct error messages of the Automation Framework job.

##### Retire.js
**v0.47.0**  
Changed
- Updated with upstream retire.js pattern changes.
- Depends on an updated version of the Common Library add-on.
- Maintenance changes.

Added
- The scan rule as been tagged of interest to Penetration Testers, as well as adding tags associated with DEV or QA applicability.

##### Reveal
**v10**  
Fixed
- The content length is now properly set on responses which have been modified (Issue 8947).

Changed
- Maintenance changes.

##### Revisit
**v6**  
Changed
- Update minimum ZAP version to 2.16.0.
- Maintenance changes.
- Minor fix in help content.

##### SOAP Support
**v25**  
Added
- The WSDL passive scan rule has been tagged of interest to Penetration Testers and QA.
- The included active scan rules have been tagged of interest to Penetration Testers.

Changed
- Depends on an updated version of the Common Library add-on.

##### Scan Policies
**v0.3.0**  
Changed
- Updated based on Rules' Policy Tag assignments.
- Updated help to cover the PENTEST Policy Tag.

##### Script Console
**v45.12.0**  
Changed
- Maintenance changes.

Fixed
- Loop when trying to extract an underlying script exception.

##### Selenium
**v15.37.0**  
Changed
- Update Selenium to version 4.33.0.

Fixed
- Prevent concurrent modification exceptions.
- Restore loading of extensions with newer Chrome versions.

##### Spider
**v0.15.0**  
Changed
- Include anti-csrf tokens as part of irrelevant parameters.
- Ignore irrelevant parameters in request bodies (`x-www-form-urlencoded`) (Related to Issue 7771).
- Skip all URIs with `javascript` schemes.
- Changed to title caps on the Irrelevant Parameters table "title" in the Options dialog (Issue 2000).

Added
- Add an option to allow users to indicate the Spider should attempt to avoid logout related paths/functionality.

Fixed
- An incorrect column name in the Irrelevant Parameters table used by the Options dialog (Domain should have been Name).

##### Technology Detection
**v21.46.0**  
Changed
- Updated with enthec upstream icon and pattern changes.

##### WebSockets
**v33**  
Changed
- Add website alert links to the help page (Issue 8189).
- Replace usage of CWE-200 for the following rules (Issue 8712):
    - Email Disclosure.
    - Debug Error Disclosure.

##### Windows WebDrivers
**v145**  
Changed
- Update ChromeDriver to 138.0.7204.49.

**v144**  
Changed
- Update ChromeDriver to 137.0.7151.119.

**v143**  
Changed
- Update ChromeDriver to 137.0.7151.70.

**v142**  
Changed
- Update ChromeDriver to 137.0.7151.68.

##### Zest - Graphical Security Scripting Language
**v48.7.0**  
Changed
- Update Zest library to 0.30.0:
  - Update Selenium to version 4.33.0.
  - Send RETURN key if submit fails for input elements not in a form.


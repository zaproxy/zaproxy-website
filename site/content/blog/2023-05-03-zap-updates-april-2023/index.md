---
title: "ZAP Updates - April 2023"
summary: >
  April 2023 updates - the ZAP 2.13.0 Release Candidate is available now!
images:
- https://www.zaproxy.org/blog/2023-05-03-zap-updates-april-2023/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2023-05-03"
authors: 
    - simon
---

We have 2 big announcements this month - see the [Highlights](#highlights) for details!

There is also a [New Contributors](#new-contributors) section in which we list new people who have started to contribute to ZAP in the last month.

{{< thanks-sponsors >}}

## Highlights

### ZAP 2.13.0 Release Candidate

Yesterday's [weekly release](/download/#weekly) is in fact the 2.13.0 Release Candidate!

Please give it a try and let us know if you have any problems with it.

### Authentication Auto-Detection

ZAP can now detect and configure itself to handle authentication for a range of sites - see 
[Authentication Auto-Detection](/blog/2023-05-02-authentication-auto-detection/) 
for more details.

We do need your feedback in order to make this support better.

## Other Significant Changes

### Unsupportive 3rd Party Services

We have changed the [3rd Party Services](/third-party-services/) page to split out "unsupportive" services which use ZAP but do not contribute back. 
If you use ZAP via these companies please get in touch with them and ask them how they plan to start 
[supporting ZAP](/supporters/). :grin:

### Form Handler RegEx Support
You can now match parameters names in HTTP requests using regular expressions using the 
[Form Handler](/docs/desktop/addons/value-generator/) add-on.


### Automation Framework Job Times

The [Automation Framework](/docs/desktop/addons/automation-framework/) has been changed to show how long each job takes
to run in both the desktop GUI and in the text results output.

## New Contributors

A very warm welcome to the people who started to contribute to ZAP this month!

* [@andrealvesdev](https://twitter.com/andrealvesdev)
* [Chandaluri Vamsi Krishna](https://twitter.com/Vamsikrishna99C)
* [Giothysham](https://github.com/Giothysham)
* [GRVial](https://github.com/GRVial)

As this is a new section here are the new contributors for March as well :grin:

* [Aryan Gupta](https://www.linkedin.com/in/aryan-gupta-78273a1b6)
* [David Hall](https://github.com/davidahall)
* [Sparsh Sethi](https://github.com/code-sparsh)
* [PlainUrban](https://github.com/PlainUrban)

If we missed anyone then please [get in touch](mailto:zaproxy-admin@googlegroups.com) ASAP and we will correct that oversight!

## GitHub Pulse
Here are some statistics for the two main ZAP repositories:

[zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)  
Excluding merges, 6 authors have pushed 15 commits to main and 15 commits to all branches. On main, 41 files have changed and there have been 860 additions and 111 deletions. 

[zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)  
Excluding merges, 13 authors have pushed 55 commits to main and 55 commits to all branches. On main, 1,141 files have changed and there have been 20,591 additions and 7,570 deletions.

## Ongoing Work
**Authentication**  
We are actively working on improving the authentication experience in ZAP.
As mentioned above [Authentication Auto-Detection](/blog/2023-05-02-authentication-auto-detection/) has been released and should make it much easier to authenticate to a range of sites.
However many more changes are planned - stay tuned for more details.

**Selenium 4**  
[Selenium](https://www.selenium.dev/) v4 has been out for a while and we are actively working on updating ZAP to use it.
There is a chance that this update could break existing scripts - more details when we have them.

**GraphQL IDE**  
The GraphQL add-on is being updated to include [GraphiQL](https://github.com/graphql/graphiql/).
The GraphQL IDE will be exposed via the ZAP API and all requests made using the IDE will be proxied through ZAP.

**NodeJS API Client**  
The [ZAP API NodeJS client](https://github.com/zaproxy/zap-api-nodejs/) and tooling around it were updated in March. The client is pending a release.

## Website Updates

The following new pages were added:

* Blog: [Authentication Auto-Detection](/blog/2023-05-02-authentication-auto-detection/)

The following pages had significant changes:

* [Internal Statistics](/docs/internal-statistics/)
* [3rd Party Services](/third-party-services/) - split out "unsupportive" services which use ZAP but do not contribute back

## Released add-ons - Full Changelog
In April 2023, we released updated versions of 22 add-ons:

##### Dev Add-on (v0.1.0)
Changed

- Auth pages to provide a variety of verification responses.

##### Automation Framework (v0.27.0)
Added
- Support for dynamically added auto-detect authentication.
- Support for dynamically added auto-detect session management.
- Show job time taken in panel and output.

Fixed
- Correct file path resolution with environment variables.

##### Authentication Helper (v0.4.0)
Added
- Support for session management identification.
- Support for auto-detect authentication.
- Support for auto-detect session management.
- Support for auto-detect verification.

Fixed
- Clear launched browser authentication when disabled, otherwise it would prevent enabling it again.

##### Dev Add-on (v0.0.1)
- First version.

##### Windows WebDrivers (v53)
Changed
- Update ChromeDriver to 112.0.5615.49.

##### MacOS WebDrivers (v54)
Changed
- Update ChromeDriver to 112.0.5615.49.

##### Linux WebDrivers (v54)
Changed
- Update ChromeDriver to 112.0.5615.49.

##### Ajax Spider (v23.13.1)
Fixed
- Honour `-config` arguments when applying the default allowed resources (Issue 7809).

##### Form Handler (v6.2.1)
Fixed
- Correctly read fields provided with `-config` arguments when setting up the default fields.

##### Windows WebDrivers (v52)
Changed
- Update geckodriver to 0.33.0.

##### MacOS WebDrivers (v53)
Changed
- Update geckodriver to 0.33.0.

##### Linux WebDrivers (v53)
Changed
- Update geckodriver to 0.33.0.

##### Wappalyzer - Technology Detection (v21.20.0)
Changed
- Updated with upstream Wappalyzer icon and pattern changes.

##### Retire.js (v0.21.0)
Changed
- Updated with upstream retire.js pattern changes.

##### Report Generation (v0.20.0)
Added
- The Traditional JSON report, Traditional JSON Report with requests and responses, Traditional XML Report and Traditional XML Report with requests and responses now has "otherinfo" field per alert instance (Issue 7260).

Changed
- Include templates available when reporting invalid template in the automation job.

Deprecated
- The "otherinfo" field in the alert will be removed and replaced by the "otherinfo" field in the alert instances.

Fixed
- Correct ID of Markdown template listed in the help page.

##### Passive scanner rules (v47)
Fixed
- Correct required version of Common Library add-on.
- Prevent error with the CSP scan rule when scanning `meta` elements with missing `http-equiv` attribute.

##### OpenAPI Support (v33)
Changed
- Dependency updates.

Fixed
- Fix null pointer exception when importing a definition with requestBody content set as an empty dictionary (Issue 7808).

##### Network (v0.7.0)
Changed
- Maintenance changes.
- Fallback to HTTP/1.1 in the main proxy if the client does not negotiate a protocol (ALPN) (Issue 7699).
- Read all main proxy configurations (`-config`) available, even if they don't include an address.
- Increase buffer used to read the HTTP body, to make reads more efficient.
- Clarify the description of command line arguments `-host` and `-port`.

Fixed
- Ensure the whole HTTP response is delivered to the client before closing the connection.

##### GraphQL Support (v0.14.0)
Fixed
- Do not report errors parsing valid JSON arrays.

Changed
- Dependency updates.

##### Form Handler (v6.2.0)
Added
- Statistics.

Changed
- Maintenance changes.
- The value generator can now match fields based on regex.
- Expanded the list of default fields and values.

##### Import/Export (v0.5.0)
Changed
- Log cause of error when failed to import the HAR file.

Fixed
- Ensure the 'ZAP messages' Export delimiters are consistent with the Import expectation.

##### Eval Villain (v0.2.0)
Changed
- Updated with new version of Eval Villain.
- Update minimum ZAP version to 2.12.0.


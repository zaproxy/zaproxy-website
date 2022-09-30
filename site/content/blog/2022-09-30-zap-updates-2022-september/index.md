---
title: "ZAP Updates 2022 September"
summary: >
  The September 2022 updates, including our new Platinum Supporter - Jit, 
  GSoC 2022 success, more news on the forthcoming 2.12.0 release, and no less than 31 add-on updates!
images:
- https://www.zaproxy.org/blog/2022-09-30-zap-updates-2022-september/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2022-09-30"
authors: 
    - simon
---

The September 2022 updates, including our new Platinum Supporter - Jit, 
GSoC 2022 success, more news on the forthcoming 2.12.0 release, and no less than 31 add-on updates!

### New Platinum Supporter: Jit

[Jit](https://jit.io) are now a Platinum ZAP Supporter as a result of sponsoring me to work pretty much full time on ZAP.

For more details see the [blog post](/blog/2022-09-14-new-platinum-supporter-jit/).
It was also covered on ZDNET: [Jit and ZAP: Improving programming security](https://www.zdnet.com/article/jit-and-zap-improving-programming-security/)

### Google Summer of Code 2022 - Success

I'm delighted to be able to tell you that [Arkaprabha Chakraborty](https://twitter.com/FValkyrie_17)
has successfully completed his GSoC project [Param Digger](/blog/2022-08-22-the-param-digger-addon/).
Even better, Arka is still working hard on this add-on and so you can expect another release (and blog post)
with more features soon.

### ZAP Version 2.12.0 - Mid October?

The next weekly ZAP release (expected Monday 3rd September) will be the 2.12.0 Release Candidate (RC)!
We will announce it on the ZAP Groups and [twitter](https://twitter.com/zaproxy) so please download it,
try it out and report any problems you find. __You__ are our QA Department!

If there are not any significant problems with the RC then we anticipate 2.12.0 will be released mid October.

### ZAP Roadmap

We have finally published a [Roadmap](/docs/roadmap/)!

This is a "live" page that we will update to reflect what we are working on.
If there is something else you think we should be working on then get in touch, 
or even better, [get involved](/docs/contribute/) - ZAP is a community project that anyone can contribute to!

There is also a new [Roles and Governance](/docs/contribute/roles-and-governance/) page.

### GitHub Twitch Event

I will be interviewed on the GitHub Open Source Friday Twitch Stream on Friday, September 30, 2022 at 10 am ET.
You can signup [here](https://www.meetup.com/github/events/288789575/) but it should also be available to view after the event - 
more details when we have them.

### Stats

Statistics from the 2 main ZAP repos.

#### [zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)

Excluding merges, 5 authors have pushed 36 commits to main and 36 commits to all branches. 
On main, 129 files have changed and there have been 1,870 additions and 1,132 deletions. 

#### [zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)

Excluding merges, 9 authors have pushed 87 commits to main and 87 commits to all branches. 
On main, 2,372 files have changed and there have been 23,195 additions and 9,385 deletions. 

### Ongoing Work

#### 2022/09/09 Live Docker Issue

On September 9th our daily tests which use the Live Docker image failed.
This turned out to be a bug in code committed the day before.
We warned the community via the [User Group](https://groups.google.com/g/zaproxy-users/c/_TwG1hhoZeE/m/7x3zgcwwBgAJ), 
[Developer Group](https://groups.google.com/g/zaproxy-develop/c/eSQNrXQ2fRE/m/YIzRWjjcBwAJ), 
and [Twitter](https://twitter.com/zaproxy/status/1568168756140032000).

We identified the problem, implemented and tested the fix, re-released the Live Docker image and re-ran the daily tests.
We were able to confirm that the problem was fixed and that the latest Live image was safe to use in under 2 hours.

#### HUD Problems on Firefox

The problems with the [ZAP HUD](https://github.com/zaproxy/zap-hud/) working with the latest versions of Firefox
have mostly been fixed!

There are some outstanding problems, e.g. the tutorial appears to be broken, but in general it is working much better than before.

#### Website Updates

The following new pages were added:

* Blog: [New Platinum Supporter: Jit](/blog/2022-09-14-new-platinum-supporter-jit/)
* Blog: [Hacking ZAP - ZAP Extender Scripts](h/blog/2022-09-13-zap-extender-scripts/)
* Contribute [Roadmap](/docs/roadmap/)
* Contribute: [Roles and Governance](/docs/contribute/roles-and-governance/)
* Contribute: [Test ZAP](/docs/contribute/testing)
* Developer Guide: [ZAP Session Database](/docs/developer/zap-session-db/)

The following pages had significant changes:

* Community: [Student Hall of Fame](/student-hall-of-fame/) added Arkaprabha
* Contribute: [Core Team](/docs/contribute/core-team/#duties) new 'Duties' section

### New Supporters

* [Jit](https://www.jit.io/zap) : [new Platinum Supporter](/blog/2022-09-14-new-platinum-supporter-jit/)!

### New Third Party Products and Courses

* [Scan Factory](https://in.scanfactory.io/) : new commercial service
* [Strobes Security](https://www.strobes.co/integrations) : new commercial integration
* [Virtuoso](https://docs.virtuoso.qa/guide/advanced-topics/virtuoso-bridge/#virtuoso-bridge-proxy-support) : new commercial integration

### Updated Add-ons

##### Windows WebDrivers version 44

Changed
- Update ChromeDriver to 106.0.5249.61.

##### MacOS WebDrivers version 45

Changed
- Update ChromeDriver to 106.0.5249.61.

##### Linux WebDrivers version 44

Changed
- Update ChromeDriver to 106.0.5249.61.

##### Zest - Graphical Security Scripting Language version 36

Changed
- Update minimum ZAP version to 2.11.1.
- Use Network add-on to proxy client authentication requests.
- Maintenance changes.

##### Wappalyzer - Technology Detection version 21.13.0

Changed
- Maintenance changes.
- Updated with upstream Wappalyzer icon and pattern changes.

##### Server-Sent Events version 11

Changed
- Maintenance changes.
- Update minimum ZAP version to 2.11.1.

Fixed
 - Properly close the server side connection when no longer in use (Issue 6424).
- Increase the size of the URL column (Issue 7354).

##### Ajax Spider version 23.9.0

Changed
- Maintenance changes.

Added
- Support for automation monitor tests.
- Added 'runOnlyIfModern' Automation Framework option.

Fixed
- Automation Framework dialog - min numberOfBrowsers now 1.
- Automation Framework job - correctly pick up URL from context.

##### SOAP Support version 14

Changed
- Dependency updates.
- Maintenance changes.
- Use Spider add-on (Issue 3113).
- Use Form Handler add-on directly.
- Promoted to Beta status.

##### Selenium version 15.10.0

Added
- Option to register and run 'browserHooks'.

Changed
- Maintenance changes.

##### Script Console version 31

Added
- Automation ScriptJob - Enable or Disable any script and run a targeted script (Issue 7025).
- Promoted to Release status.

Changed
- 'Copy as curl command menu.js' added change that prevents curl from adding User-Agent when no User-Agent should be present.
- Maintenance changes.

##### Retest version 0.3.0

Changed
- Update minimum ZAP version to 2.11.1.
- Scan Rule ID values are no longer displayed with commas.
- Maintenance changes.

Fixed
- The Retest dialog now properly resets between ZAP sessions (Issue 7147).

##### Replacer version 10

Fixed
- Allow the replacement type to be changed in existing rules (Issue 3840).

Added
 - Allow to manage the replacer rules programmatically, for example, through ZAP scripts.

Changed
- Update minimum ZAP version to 2.11.1.
- Maintenance changes.
- Promoted to Release status.

##### Quick Start version 34

Changed
- Spider checkboxes in Automated Scan will be disabled when scan is running. (Issue 7072)
- Use Network add-on to obtain main proxy address/port.
- Maintenance changes.
- Use Spider add-on (Issue 3113).

Fixed
- Accept any 2xx result code instead of just 200.

##### OAST Support version 0.11.0

Changed
- Maintenance changes.
- Rename the `OAST Register Request Handler.js` script template to `OAST Request Handler.js`
  and use the Extender script type for it. The request handler is now removed when the
  script is disabled.
- Promoted to Beta status.

Added
- Default services notes in the help documents.
- Extension description and UI name.
- Allow unregistering specific OAST Request handlers.

Fixed
- Synchronized alerts cache access to avoid locks

##### Image Location and Privacy Scanner version 4

Changed
- Update minimum ZAP version to 2.11.1.
- Maintenance changes.

Added
- OWASP Web Security Testing Guide v4.2 mappings.

##### GraphQL Support version 0.10.0

Changed
- Maintenance changes.
- Update dependency, which reduces add-on file size (Issue 7322).
- Use Spider add-on (Issue 3113).

##### FuzzDB Files version 9

Changed
- Updated RAFT lists based on more recent SecLists contributions
- Update minimum ZAP version to 2.11.1.

##### Fuzzer version 13.7.0

Changed
- Allow circular redirects always.
- Maintenance changes.

##### Custom Payloads version 0.12.0

Changed
- Maintenance changes.
- Update minimum ZAP version to 2.11.1.
- Add help content linking to the Scan Rules which support Custom Payloads.

##### Bug Tracker version 4

Changed
- Update minimum ZAP version to 2.11.1.
- Dependency updates.
- Maintenance changes.
- Updated to use PAT not password (https://github.blog/changelog/2021-08-12-git-password-authentication-is-shutting-down/).

##### Retire.js version 0.15.0

Changed
- Updated with upstream retire.js pattern changes.

##### Active scanner rules (beta) version 42

Changed
- Maintenance changes.
- Improved description, solution, and references for the Integer Overflow scan rule.
- Added new Custom Payloads alert tag to the example alerts of the Hidden File Finder and User Agent scan rules.

Added
- New User Agent strings to the User Agent fuzz scan rule.
- Additional source control paths for the Hidden Files finder scan rule.

##### Active scanner rules (alpha) version 39

Changed
- Maintenance changes.
- Forbidden Bypass scan rule will now also try a bypass based on the use of a tab character.

Fixed
- Fix an exception in Spring Actuator Information Leak scan rule when scanning responses without Content-Type header.
- Correct path composition in Web Cache Deception scan rule.

##### Active scanner rules version 48

Changed
- Command Injection Scan Rule: Decode HTML entities in HTML responses before attempting to search for attack validation patterns.

##### OpenAPI Support version 28

Added
- Imported specs are now persisted to the session database. They are used by the new variant to mark path parameters as
  Data Driven Nodes.

Fixed
- JSON body examples specified under `schema` were being enclosed in quotes.
- Error message when `apiFile` field is not accessible was outputting the `targetUrl` and not the incorrect filename (Issue 7370).

Changed
- Maintenance changes.
- Use Spider add-on (Issue 3113).
- Use Form Handler add-on directly.
- DDNs added as Structural Modifiers have been superseded by a custom variant. The variant supports nested DDNs and leaf
  DDNs, prevents non-parameter URL paths from being merged with DDNs, and treats paths with different HTTP methods
  uniquely. DDNs are named with the parameter name from the spec.

##### Form Handler version 6.0.0

Changed
- Maintenance changes.
- Expose value generator for other add-ons (Related to Issue 3113).

##### Passive scanner rules (alpha) version 36

Changed
- Update minimum ZAP version to 2.11.1.
- Maintenance changes.
- Sub Resource Integrity Attribute Missing scan rule now supports Trusted Domains.
- The Base64 Disclosure scan rule will now ignore headers which are known to contain irrelevant Base64 like strings or are covered by other rules (ETag, Authorization, X-ChromeLogger-Data, X-ChromePhp-Data) (Issue 6619).
- Added new Custom Payloads alert tag to the example alerts of the Dangerous JS Function scan rule.
- Permissions Policy scan rule updated for consistency and documentation purposes (Issue 7458).

Fixed
- False positive condition from Sub Resource Integrity Attribute Missing scan rule when rel=canonical is used (Issue 7040).
- Threading issue in Dangerous JS Functions rule - only reproducible with currently unreleased core changes.

##### Passive scanner rules (beta) version 30

Changed
- Maintenance changes.
- Reverse Tabnabbing scan rule now leverages the Common Library Trusted Domains implementation.

##### Passive scanner rules version 43

Changed
- Reduce Cache Control scan rule confidence to Low, and add new reference (Issue 6446).
- Added new Custom Payloads alert tag to the example alerts of the Username IDOR and Application Error scan rules.
- Maintenance changes.
- The Timestamp Disclosure scan rule is now scoped to a 10 year range with a cap at the Y2038 rollover point (Issue 6741).
- The Content Security Policy Header Not Set scan rule will no longer alert if CSP is specified via META tag (Issue 7303).

##### Common Library version 1.10.0

Changed
- Maintenance changes.

##### Automation Framework version 0.17.0

Added
- Add Save As button that allows user to save the automation plan to a different file (Issue 7178).
- Support for monitor tests.

Changed
- Maintenance changes.
- Rely on spider add-on (Issue 3113).
- passiveScan-config job resets the state, as scanOnlyInScope is often confusing in the GUI.
- Deprecated the addOns job.

Fixed
- Correct loading of custom scripts (e.g. Zest).
- The activeScan and spider jobs no longer switch tabs when they run.


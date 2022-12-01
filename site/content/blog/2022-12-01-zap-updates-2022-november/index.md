---
title: "ZAP Updates 2022 November"
summary: >
  The November 2022 updates, following the 2.12.0 release.
images:
- https://www.zaproxy.org/blog/2022-12-01-zap-updates-2022-november/images/zapbot-monthly-updates.png
type: post
tags:
- blog
- update
date: "2022-12-01"
authors: 
    - simon
---

There were no updates for October, but that does not mean that nothing happened!

### ZAP 2.12.0!

At the end of October we released ZAP [2.12.0](/blog/2022-10-27-zap-2-12-0-the-ten-thousand-star-release/).
Full releases are obviously a major event for us (as we only usually do a couple a year) and this was
the reason for no October updates blog post :grin:

Uptake has been very good, but we are aware of some problems when updating add-ons - [see below](#zap-2120-updating-issues).

### SARIF Reports

The [Report Generation](/docs/desktop/addons/report-generation/) add-on now supports
[SARIF JSON](/docs/desktop/addons/report-generation/report-sarif-json/) reports, thanks to 
[Albert Tregnaghi](https://twitter.com/dejcup).

### Monthly Active Scan Statistics

At the start of November we published statistics on the first set of 
[Monthly Active Scan Rule Statistics](/blog/2022-11-03-monthly-active-scan-rule-statistics/).
We aim to update these every month, and are still not aware of any other web scanners (commercial or open source) who are publishing equivalent data.

### OWASP AppSec USA

The OWASP Global AppSec USA Conference was held in San Francisco.

This was going to be the first conference I had ever attended without speaking at .. 
but then one of the keynote speakers had to drop out and I was asked to take their place 😲

I decided I needed to have a bigger scope than 'just' ZAP so ended up giving a talk titled
[OWASP - What's the Point?](https://owasp2022globalappsecsf.sched.com/event/1EHTz).

It seemed to go down well and I'll share the recording once it has been published.

I talked to a lot of people and heard some great feedback about ZAP!
I also made some very good contacts, including people and companies who we now plan to collaborate with - 
more details when we have something to show :wink:.

### DevOpsDays Tel Aviv

I will be giving a Spotlight Talk at [DevOpsDays Tel Aviv](https://devopsdays.org/events/2022-tel-aviv/welcome/) on 
"Evolution of OSS: Perspective from a Decade of Maintaining A (Wildly) Popular Open Source Project " - no prizes for guessing which project that is :wink:.

If you attend then please come over and say "Hi"! :grin:

### Stats

Statistics from the 2 main ZAP repos.

#### [zaproxy](https://github.com/zaproxy/zaproxy/pulse/monthly)

Excluding merges, 7 authors have pushed 21 commits to main and 21 commits to all branches. 
On main, 33 files have changed and there have been 1,310 additions and 385 deletions. 

#### [zap-extensions](https://github.com/zaproxy/zap-extensions/pulse/monthly)

Excluding merges, 6 authors have pushed 70 commits to main and 70 commits to all branches. 
On main, 3,149 files have changed and there have been 117,471 additions and 34,917 deletions. 

### Ongoing Work

#### HTTP/2 Support

This is going very well and is nearing completion!

Stay tuned for an announcement, hopefully very soon...

#### ZAP 2.12.0 Updating Issues

We are aware of problems updating add-ons in ZAP 2.12.0 

The symptoms include a message saying that the mandatory "network" add-on is missing and various errors
relating the the installing and uninstalling of add-ons.

This problem can occur with ZAP installed locally and when using the Docker images.

The workaround is to update ZAP on the command line and then to start it again as before.

To update ZAP on the command line run:

`zap.sh -cmd -addonupdate`

We have a solution to this problem but it requires a core change.

This will be available in the Live and Weekly releases very soon, and as long as we do not receive any more
reports of problems with those then we will look at releasing a new bug fix version - 2.12.1.

#### Website Updates

The following new pages were added:

* Blog: [Monthly Active Scan Rule Statistics](/blog/2022-11-03-monthly-active-scan-rule-statistics/)
* Blog: [ZAP 2.12.0 - the Ten Thousand Star Release](/blog/2022-10-27-zap-2-12-0-the-ten-thousand-star-release/)
* Contribute [Run a ZAP Hackathon](/docs/contribute/run-a-zap-hackathon/)
* FAQ: [How can I fix 'browser was not found'?](/faq/how-can-i-fix-browser-was-not-found/)

The following pages had significant changes:

* [ZAP Marketplace](/addons/) nearly all of the add-ons were released as part of 2.12.0.
* [OWASP ZAP Desktop User Guide](/docs/desktop/) this was completely regenerated as part of 2.12.0.
* [ZAP Team](/docs/team/) updated to include pictures and social links.

### Updated Add-ons

As noted above, nearly all add-ons were updated for 2.12.0.

Updates since that release:

##### Windows WebDrivers version 47 

Changed
- Update ChromeDriver to 108.0.5359.71.

#####  MacOS WebDrivers version 48

Changed
- Update ChromeDriver to 108.0.5359.71.

##### Linux WebDrivers version 47

Changed
- Update ChromeDriver to 108.0.5359.71.

#####  Report Generation version 0.17.0

Added
- SARIF reporting

Changed
- The XML and JSON reports now include programName metadata elements (Issue 6640).

#####  SOAP Support version 16

Changed

- The SOAP `Support.js` input vector script is removed when the add-on is uninstalled.
- Dependency updates.

##### GraphQL Support version 0.12.0

Changed
- The GraphQL Support Script has been superseded by a variant.
- Argument names will now be used to get values from the form handler add-on, instead of argument types.
- Dependency updates and maintenance changes.

Fixed
- Introspection was not working for some applications (Issue 7602).
- Variables in JSON queries were being added incorrectly.
- Attack payloads were being injected outside the quotes of inline string arguments.

##### OpenAPI Support version 30

Changed
- Dependency updates.
- Each imported endpoint is included in the selected context, unless its URL matches an already existing *Include in Context* regex entry.
  
#####  Wappalyzer - Technology Detection version 21.16.0

Changed
- Updated with upstream Wappalyzer icon and pattern changes.

#####  Retire.js version 0.17.0

Changed
- Updated with upstream retire.js pattern changes.

#####  Network version 0.5.0

Fixed
- Fix authentication with TRACE requests and HTTP/NTLM reauthentication to proxy (Issue 7566).

##### Network version 0.4.0

Added
- Allow to enable and configure ALPN for local servers/proxies.

Changed
- Update dependencies.

Fixed
- Allow to send TRACE requests with payload and with an outgoing proxy (Issue 7578).
- Correct HTTP/NTLM reauthentication to target and proxy (Issue 7566).

##### Wappalyzer - Technology Detection version 21.15.0

Changed
- Updated with upstream Wappalyzer icon and pattern changes.


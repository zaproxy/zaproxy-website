---
title: "How can you speed up scans?"
type: faq
category: Scanning
weight: 3
---

ZAP finds vulnerabilities by sending lots of potentially malicious payloads at a target app and then trying to work out if
the app is vulnerable to them. 
In order to find a wide range of vulnerabilities it has to send a lot of requests.
This sort of scanning is going to take time.

There are however some things you can do to speed up ZAP scans.

### Technology

If you know the technology that your app uses then tell ZAP.
ZAP will then not use any attacks which target technologies that your app does not use.
This will speed up the scan and reduce the potential for false positives. 
There is no downside to this option unless you remove a technology that is used by your app.

You can do this via:

* Desktop [Session Context / Technology](/docs/desktop/ui/dialogs/session/contexts/#technology) screen
* Desktop [Active Scan / Technology](/docs/desktop/ui/dialogs/advascan/#technology) tab
* Automation Framework [Environment](/docs/desktop/addons/automation-framework/environment/)
* API
  * [context / excludeContextTechnologies](/docs/api/#contextactionexcludecontexttechnologies) action
  * [context / includeContextTechnologies](/docs/api/#contextactionincludecontexttechnologies) action

### Thread / Browser Counts

A significant amount of the scan time is caused by network requests.
Increasing the number of threads and browsers launched will speed up the scans as ZAP is able to launch more requests while
it is waiting for the responses. 
There are limits however - using too many threads / browsers may cause problems with either the computer running ZAP or
the target app.

All of the ZAP scanners allow you to tune the resources they use via their desktop screens, Automation Framework plans, and API endpoints.

### Application Structure

If your application uses [Data Driven Content](/docs/desktop/start/features/ddc/) then ZAP will 
end up attacking far more endpoints than it needs to.
Configuring ZAP to understand your app structure can significantly speed up a scan.

### Only Scan Changes

ZAP does not understand source code and so it cannot know what has changed in a PR or since the last time you scanned your app.
If __you__ can work out what has changed (by comparing API endpoint definitions, source code analysis, etc) then you can 
configure ZAP to only attack the endpoints that you know have changed. 
This can dramatically speed up a scan, but it does require input from other sources.

### Get ZAP to do Less

If you have done all of the above (or are unable to do some of them) then your only option to reduce scan times is to get ZAP to do less.

Active Scanning will typically take the longest time.

You can see which Active Scan rules take the most amount of time via:

* Desktop [Scan Progress Dialog](/docs/desktop/ui/dialogs/scanprogress/)
* API [ascan / scanProgress](/docs/api/#ascanviewscanprogress) view

#### Disable Unnecessary Rules

ZAP is used by a wide variety of people, from people new to appsec right up to hard core pentesters.
We try to configure ZAP with sensible defaults but we cannot keep everyone happy.

Look at the Active Scan rules you are using and disable any you are really not interested in. This will speed up the scan
and make your scan results more useful.

#### Reduce the Attack Strength

Most Active Scan rules support multiple [strengths](/docs/desktop/ui/dialogs/scanpolicy/#strength).
Reducing the strengths will speed up a scan, but it will also mean there are more chances of false negatives.

### More Background

For more background see this post on the [Mozilla Security Blog](https://blog.mozilla.org/security/2013/07/10/how-to-speed-up-owasp-zap-scans/).

Note that it was written many years ago and therefore does not include many of the newer options above.

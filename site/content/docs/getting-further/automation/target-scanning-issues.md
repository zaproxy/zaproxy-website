---
title: "Automation Guide - Target Scanning Issues"
tags: 
- automation
- guide
type: page
---

It is not unusual for target systems to struggle or even fail when being scanned by ZAP.

This page explains what can go wrong, how to detect these problems and what can be done about them.

### Cannot Connect

If ZAP cannot connect to the target app then it will typically fail very quickly.
Solving connection problems will depend on the underlying cause, which ZAP will not be able to detect.

To confirm whether this is just a ZAP problem or something unrelated to ZAP then use another tool like [curl](https://curl.se/) to access the target from 
exactly the same environment that ZAP is running in. 
For example, if ZAP is running in a container then run the other tool in the same container.

#### Detection
In this case detection is typically straightforward - exploring will fail.

#### Target is Down
This is nice and easy - start the target app!

#### ZAP Blocked by Firewall
This could be a host firewall on the system running ZAP, a host firewall on the target, or an infrastructure firewall between ZAP and the target.

In all cases the firewall needs to be configured to give ZAP access.

This can be done via:
* IP address range
* A [Custom HTTP header](#custom-http-header)

#### No Network Route
You’ll need to sort out your networking.

### Connection Fails Mid-scan
If ZAP cannot connect to the target “mid scan” then the scan could carry on for a significant length of time.
For example, if ZAP has completed the exploration phase then it will already know about all of the target endpoints.
It will currently carry on trying to attack them even if all of the connections fail.

#### Detection
To detect connection failures monitor the global statistic:
* `stats.network.send.failure`

This is a count of all of the times ZAP has failed to send an HTTP message.
Depending on your environment you may get some occasional failures, so it might not be a good idea to fail if you just see a few failures. If the connection to the target is lost during a scan then the number of failures will increase rapidly.

There is a corresponding statistic which counts the successful sends:
* `stats.network.send.success`

Note that these are new statistics which are currently only available in the Nightly and Weekly releases!

#### Target Crashes
This is not uncommon as ZAP can put a very heavy load on the target app.

Ideally you should fix the target so that it doesn't crash!
As a work around you can use ZAP [Rate Limiting](#rate-limiting).

#### Firewall Blocks ZAP
See [ZAP blocked by Firewall](#zap-blocked-by-firewall) and [Rate Limiting](#rate-limiting).

#### Network Route Fails
You’ll need to sort out your networking.

### Target Misbehaves
An app can start to fail when being scanned by ZAP, but not actually crash or take much longer to respond.

#### Detection
This can be hard to detect unless you have a baseline of how the app usually responds: ZAP will make lots of “bad” requests which we would expect most apps to reject in some way.
The following [statistics](/docs/internal-statistics/) can help:
* `stats.code.<response-code>` :	The number of messages which include the given response code.

A significant number of 3xx, 4xx or 5xx error codes could indicate that the target is misbehaving.

### Requests Take a Long Time

#### Detection
This can be hard to detect unless you have a good idea of how long the target usually takes to respond.
If you do know that then you can monitor the following set of [statistics](/docs/internal-statistics/):
* `stats.responseTime.<time-slice>`

These stats show the number of messages with response times in milliseconds the given (logarithmic) time slice (1, 2, 4, 8 etc).
Once you have a baseline for the time your target typically takes to respond you can monitor these stats and take action if you start to see lots of requests taking significantly longer than expected.

#### Target Performance Issues
This is all too common.

Ideally fix the app or use [Rate Limiting](#rate-limiting) as a workaround.

#### Firewall Rate Limiting
See [ZAP Blocked by Firewall](#zap-blocked-by-firewall).

### Spider Loops
We know that both the traditional and AJAX spiders can sometimes get into “infinite” loops.
This can occur when a target app responds with the home page for an “unknown” path and then uses relative links.
Forms with dynamic input names/values can also cause problems.

If it is possible to recreate this problem with a publicly accessible app then please report it as an issue so that we can investigate possible solutions.

#### Detection
The spiders will never complete.

The spiders and active scanner all support a set of limits - see [Scan Limits](#scan-limits).
In a SaaS environment where you are dealing with a large number of apps we recommend setting a suitable time limit on both spiders.

### Authentication Failures
Authentication failures can happen for a variety of reasons:

* Misconfiguration
* Change of credentials
* Change of authentication mechanism
* Session timeout (and failure to re-authenticate)
* Lockout (due to scanning)

These failures are particularly insidious - they may not impact the time taken and can therefore happen “silently”, giving very little indication that anything is wrong.

In order to detect authentication failures we strongly recommend that you configure a suitable Authentication Verification Strategy. 
If you choose not to do that then you are on your own!

If you have configured a suitable Verification Strategy and are performing an authenticated scan then ZAP will maintain the following [statistics](/docs/internal-statistics/):
* `stats.auth.failure` 				: The number of authentication failures
* `stats.auth.state.assumedin` 		: The number of messages between successful polls that are assumed to be logged in
* `stats.auth.state.loggedin` 		: The number of messages that include the logged-in indicator
* `stats.auth.state.loggedout` 		: The number of messages that include the logged-out indicator
* `stats.auth.state.noindicator` 	: The number of messages where no logged in or out indicators have been set in the context
* `stats.auth.state.unknown`	 	: The number of messages which don't contain either logged in or out indicators
* `stats.auth.success`		 		: The number of authentication successes

Note that ZAP maintains a lot more authentication related statistics - search for “stats.auth” on 
[ZAP Internal Statistics](/docs/internal-statistics/).

You will almost certainly see some authentication failures, so you should only check for a high number of:
* `stats.auth.failure`
* `stats.auth.state.loggedout`
* `stats.auth.state.noindicator`
* `stats.auth.state.unknown`

### ZAP Solutions

#### Custom HTTP Header
A custom HTTP header can be used to configure firewalls to allow and not rate limit requests from ZAP.
These can be set up as per [Handling Authentication Yourself in Automation](/docs/getting-further/authentication/handling-auth-yourself/).

#### Rate Limiting
ZAP [Rate Limiting](/docs/desktop/addons/network/options/ratelimit/) can be used to slow down the requests from ZAP.
This can prevent ZAP from overloading the target or from triggering firewall rules.
This will, of course, increase the length of time a ZAP scan will take.

#### Statistics Monitoring
ZAP provides a significant number of [statistics](/docs/internal-statistics/) which can be used to work out what is going on.

The Automation Framework provides [Monitor Job Tests](/docs/desktop/addons/automation-framework/test-monitor/) 
which can stop long running scans early if specified statistic thresholds are exceeded.

If ZAP is being controlled via the API then the required statistics can be accessed via the API and the equivalent functionality implemented in whatever is controlling the API.

Also see the [Scan Monitor Script](#scan-monitor-script) which will work however you run ZAP.

#### Scan Limits
The ZAP spiders and active scanner all support a set of limits that can be used to limit how long they run.
These can typically be configured via the GUI, API and Automation Framework.

* Traditional Spider
  * Maximum duration
  * Maximum children to crawl
  * Maximum depth to crawl
* AJAX Spider
  * Maximum duration
  * Maximum crawl depth
* Active Scanner
  * Maximum scan duration
  * Maximum rule duration

#### Scan Monitor Script

The [ScanMonitor.js](https://github.com/zaproxy/community-scripts/blob/main/extender/ScanMonitor.js) extender script 
monitors active scans and stops them if specific conditions are detected.

The conditions detected are deliberately very limited as many indication of target issues are very application specific.

As it is a script you can easily change it to match how your target systems tend to fail.

Feedback via the [User Group](https://groups.google.com/group/zaproxy-users) on how this script performs, and how we can make it better, is appreciated. 

{{<prevnext prevUrl="../exploring-your-app/" prevTitle="Exploring Your App" nextUrl="" nextTitle="Authentication (coming soon)">}}

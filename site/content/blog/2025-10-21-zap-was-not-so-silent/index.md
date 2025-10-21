---
title: "SHH! ZAP Was Not So Silent"
summary: >
  A new ZAP scan rule unintentionally caused a Check for Updates call even when "silent" mode was used.
type: post
tags:
- blog
date: "2025-10-21"
authors:
- simon
---
We messed up ☹️

ZAP has a `-silent` [command line option](/docs/desktop/cmdline/) which __should__ stop 
ZAP from [calling home](/faq/what-calls-home-does-zap-make/) unless you explicitly ask it to.

Unfortunately the [new 'ZAP is Out of Date' rule](/blog/2025-07-25-the-new-zap-is-out-of-date-rule/)
had the unintended side-effect of triggering a Check For Updates call even when the silent mode was used.

This was spotted by a ZAP user and reported via Issue [#9096](https://github.com/zaproxy/zaproxy/issues/9096) -
thanks Owen Fairholm!

It has been fixed via the PR [#6838](https://github.com/zaproxy/zap-extensions/pull/6838).

We have published an updated [Passive scanner rules](/docs/desktop/addons/passive-scan-rules/) add-on, a new weekly release, and updated the Docker stable image.

This bug may well explain why the Check For Update calls have 
[significantly increased](/docs/statistics/bar-charts/#check-for-updates) 
in the last couple of months.

While we understand that some of you will want to use the `-silent` option (and will continue to maintain it) we do encourage you not to use it unless you really need to.

Allowing the calls home means that you will get alerted to updated add-ons, and have the option to automatically install them.

The telemetry we collect is [specific to how ZAP operates](/blog/2021-10-25-zap-telemetry-plans/) 
and does not identify you, your services, or give us any details of the alerts that ZAP raises. 

We get very little feedback from people who use ZAP, so the telemetry is an important set of information that we 
use to help us plan what we're going to focus on.

If you just want to opt-out of telemetry but still check for updates then there is the `-notel` 
[command line option](/docs/desktop/addons/call-home/#command-line-option--notel).

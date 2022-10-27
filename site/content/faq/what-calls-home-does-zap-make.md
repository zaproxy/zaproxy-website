---
title: "What 'calls home' does ZAP make?"
type: faq
category: General Questions
weight: 2
---

From 2.12.0 all ZAP 'calls home' are made to the zaproxy.org domain.

###  Check for Updates

ZAP makes one request to https://cfu.zaproxy.org to see if ZAP or any of the add-ons are up to date.

The update data is retrieved from the relevant version file in the zap-admin github
repo, e.g. [ZapVersions-2.12.xml](https://github.com/zaproxy/zap-admin/blob/master/ZapVersions-2.12.xml)

This check is done at most once per day and can be disabled via the
Desktop UI [Check for Updates Options](/docs/desktop/ui/dialogs/options/checkforupdates/) screen.

The following information is supplied:

* ZAP version
* ZAP runtime type (commandline, daemon or desktop)
* OS name and version
* Java version
* If ZAP is running in a known container (such as docker)

The IP addresses of requests is recorded but the least significant part is zeroed to maintain anonymity.

###  ZAP News

The Quick Start add-on makes one request to https://news.zaproxy.org to see if there is any new ZAP news.

The data is retrieved from the relevant quick start file in the zap-admin
GitHub repo, e.g. [2.12.xml](https://github.com/zaproxy/zap-admin/blob/master/files/news/2_12.xml)

### Telemetry

The [Call Home](/docs/desktop/addons/call-home/) add-on by default sends data to the Telemetry Service as per the [ZAP Telemetry Plans](/blog/2021-10-25-zap-telemetry-plans/) blog post.

One call will is made when ZAP starts up, reporting environmental data and the add-ons installed, and then one call is be made when the 
ZAP session changes, reporting selected statistics.

The last set of data sent is shown in the [Call Home](/docs/desktop/addons/call-home/) Options panel.

The telemetry calls can be disabled via the [Call Home](/docs/desktop/addons/call-home/) Options panel or by using the `-silent` 
[command line option](/docs/desktop/cmdline/) also detailed below.

###  Bit.ly Calls - Discontinued

Historically ZAP made a limited set of 'calls home' via bitly.com URLs.

These were all discontinued from ZAP 2.12.0.

##  Silent Mode

The `-silent` command line option can be used to prevent ZAP from making any 'calls home'.
If you explicitly ask ZAP to check for updates then it will still call the Check for Updates service.

Note that some third party add-ons may not obey the `-silent` option.

This FAQ will be updated to detail any of the add-ons in the [ZAP Marketplace](/addons/)
that fall into this category.

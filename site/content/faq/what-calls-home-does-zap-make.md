---
title: "What 'calls home' does ZAP make?"
type: faq
category: General Questions
weight: 2
---

ZAP makes a limited set of 'calls home', historically via bitly.com URLs.

Bitly was used so that we could get a very limited form of telemetry data without
getting access to any sensitive data such as your IP address.

ZAP can be freely downloaded and we get very little feedback from most users -
this at least tells us if ZAP is getting more or less popular :)

From late 2021 and finishing in 2.12.0 we will migrate from bitly to our own services using the zaproxy.org domain.

###  Check for Updates

ZAP makes one request to see if ZAP or any of the add-ons are up to date.

The Bitly URL resolves to the relevant version file in the zap-admin github
repo, e.g. [ZapVersions-2.8.xml](https://github.com/zaproxy/zap-admin/blob/master/ZapVersions-2.8.xml)

This check will be done at most once per day and can be disabled via the
Desktop UI [Check for Updates Options](/docs/desktop/ui/dialogs/options/checkforupdates/) screen.

Since ZAP 2.9.0 the check for updates is also done when running in daemon mode.

From 2.12.0 (and in development) this request will be made to https://cfu.zaproxy.org

The following information will be supplied:

* ZAP version
* ZAP runtime type (commandline, daemon or desktop)
* OS name and version
* Java version
* If ZAP is running in a known container (such as docker)

The IP addresses of requests will be recorded but the least significant part will be zeroed to maintain anonymity.

###  ZAP News

Starting from ZAP 2.8.0 the Quick Start add-on makes one request to see if
there is any new ZAP news.

The Bitly URL resolves to the relevant quick start file in the zap-admin
GitHub repo, e.g. [2.8.xml](https://github.com/zaproxy/zap-admin/blob/master/files/news/2_8.xml)

From late 2021 (for those users who update add-ons) this request is made to https://news.zaproxy.org - the same information will be supplied as
for the Check for Updates service.

### Telemetry

From late 2021 (for those users who update add-ons) the [Call Home](/docs/desktop/addons/call-home/) add-on will by default send data to the Telemetry Service as per the [ZAP Telemetry Plans](/blog/2021-10-25-zap-telemetry-plans/) blog post.

One call will be made when ZAP starts up, reporting environmental data and the add-ons installed, and then one call will be made when the 
ZAP session changes, reporting selected statistics.

The last set of data sent is shown in the [Call Home](/docs/desktop/addons/call-home/) Options panel.

The telemetry calls can be disabled via the [Call Home](/docs/desktop/addons/call-home/) Options panel or by using the `-silent` 
[command line option](/docs/desktop/cmdline/) also detailed below.

###  Browser Launch Start Page - Discontinued

By default the Quick Start add-on makes one request to see if there is a new
Quick Start page - this is the HTML shown by default when a browser is
launched from ZAP.

The Bitly URL resolves to the relevant quick start file in the zap-admin
GitHub repo, e.g. [2.7.html](https://github.com/zaproxy/zap-admin/blob/master/files/launch/2.7.html)

This was discontinued from ZAP 2.8.0

##  Silent Mode

Starting from ZAP 2.8.0 the `-silent` command line option can be used to prevent ZAP from making any 'calls home'.
If you explicitly ask ZAP to check for updates then it will still call the Check for Updates service.

Note that some third party add-ons may not obey the `-silent` option.

This FAQ will be updated to detail any of the add-ons in the [ZAP Marketplace](/addons/)
that fall into this category.

---
title: "What 'calls home' does ZAP make?"
type: faq
category: General Questions
weight: 2
---

ZAP makes a limited set of 'calls home', typically via bitly.com URLs.

Bitly is used so that we get a very limited form of telemetry data without
getting access to any sensitive data such as your IP address.

ZAP can be freely downloaded and we get very little feedback from most users -
this at least tells us if ZAP is getting more or less popular :)

###  Check for Updates

ZAP makes one request to see if ZAP or any of the add-ons are up to date.

The Bitly URL resolves to the relevant version file in the zap-admin github
repo, e.g. [ZapVersions-2.8.xml](https://github.com/zaproxy/zap-admin/blob/master/ZapVersions-2.8.xml)

This check will be done at most once per day and can be disabled via the
Desktop UI [Check for Updates Options](/docs/desktop/ui/dialogs/options/checkforupdates/) screen.

Since ZAP 2.9.0 the check for updates is also done when running in daemon mode.

###  Browser Launch Start Page

By default the Quick Start add-on makes one request to see if there is a new
Quick Start page - this is the HTML shown by default when a browser is
launched from ZAP.

The Bitly URL resolves to the relevant quick start file in the zap-admin
GitHub repo, e.g. [2.7.html](https://github.com/zaproxy/zap-admin/blob/master/files/launch/2.7.html)

This will be discontinued from ZAP 2.8.0

###  ZAP News

Starting from ZAP 2.8.0 the Quick Start add-on makes one request to see if
there is any new ZAP news.

The Bitly URL resolves to the relevant quick start file in the zap-admin
GitHub repo, e.g. [2.8.xml](https://github.com/zaproxy/zap-admin/blob/master/files/news/2_8.xml)

##  Silent Mode

Starting from ZAP 2.8.0 the '-silent' command line option can be used to prevent ZAP from making any 'calls home'.

Note that some third party add-ons may not obey the '-silent' option.

This FAQ will be updated to detail any of the add-ons in the [ZAP Marketplace](/addons/)
that fall into this category.

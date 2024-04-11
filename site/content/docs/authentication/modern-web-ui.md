---
title: "Auth: Modern Web UI"
type: page
layout: decision-action
action: Create a Selenium Authentication script
---

Your app is "modern" i.e. it makes heavy use of JavaScript.

In order to explore your app in automation you will need to use the [AJAX Spider](/docs/desktop/addons/ajax-spider/) - this launches browsers in order to explore your app.

Injecting session state into a browser is not always possible, and where it is, it is always application specific.

A much better solution is to get the browser's launched by the AJAX Spider to login via the login page. ZAP can handle many login pages automatically, but you have got to this page because that did not work for you.

Creating a Selenium Authentication Script is beyond the scope of this guide, but more details are available via:

* Blog: [Authenticating Using Selenium](/blog/2023-02-01-authenticating-using-selenium/)
* Video: [Automation Auth Scripts](https://play.vidyard.com/gYz7LxioR54i2gY9Ze7c4F)
* Video: [Automation SSO with Juice Shop](https://play.vidyard.com/TMcBcuhyPt57sUqPcJUtpv)

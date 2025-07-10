---
title: "Edge Support"
summary: >
  ZAP now has "tier 1" support for Microsoft Edge, including exploring, crawling, and attacking.
images:
- https://www.zaproxy.org/blog/2025-07-10-edge-support/images/blog-edge.png
type: post
tags:
- blog
- browser
date: "2025-07-10"
authors:
- simon
---

ZAP now supports Microsoft Edge as a "tier 1" browser!

![ZAPbot with Edge browser icon](images/blog-edge.png)

This means you can use it for:

* [Browser Launch](/docs/desktop/addons/quick-start/#manual-explore) (launching fully configured Edge browsers from the ZAP desktop)
* [AJAX Spider](/docs/desktop/addons/ajax-spider/)
* [Client Spider](/docs/desktop/addons/client-side-integration/spider/)
* [DOM XSS Scan Rule](/docs/desktop/addons/dom-xss-active-scan-rule/)

Edge browsers launched by ZAP will include the [ZAP Browser Extension](https://github.com/zaproxy/browser-extension?tab=readme-ov-file#zap-browser-extensions). Note that is turned off by default with the AJAX Spider.

As per the other browsers, you will need to have Edge installed.

Unlike the other browsers you will also need to either have Internet access, or install the 
[Edge WebDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) 
[manually](/docs/desktop/addons/selenium/options/#webdrivers).
We are looking at adding a new Edge webdriver add-on, which would remove this restriction.

Also note that the ZAP [Docker](/docs/docker/) images only have Firefox installed by default.

We have a FAQ: [How do I use Chrome with ZAP in Docker?](/faq/how-do-i-use-chrome-with-zap-in-docker/) and we'll look at adding one for Edge at some point. Feel free to submit a pull request to the 
[zaproxy-website](https://github.com/zaproxy/zaproxy-website/tree/main/site/content/faq) repo if you beat us to it!
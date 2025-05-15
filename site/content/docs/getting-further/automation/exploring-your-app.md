---
title: "Automation Guide - Exploring Your App"
tags: 
- automation
- guide
type: page
---

ZAP cannot attack parts of the target app if it does not know about them.
Exploring the app is key - the more effectively that is done the more effectively ZAP will be able to attack it.
This is why ZAP has so many options for exploring apps.

### Manual Exploring

Exploring an app manually is always going to be an effective way of exploring web apps (as opposed to APIs) but this is not
practical in automation.

Reusing a ZAP session where you manually explored you app is not recommended.
Apps change over time and your manual session will gradually get more and more out of date.

### Proxying Integration Tests

On the other hand proxying integration tests through ZAP is a very good option, if you have suitable tests.
The more complete your tests then the better ZAP will understand your app.
It is still recommended that you use any of the other exploring options that are suitable rather than just relying on your tests.

### The Traditional Spider

The traditional [Spider](/docs/desktop/addons/spider/) is a standard web crawler - it makes HTTP(S) requests and then analyses the responses for links.
It is fast an effective for traditional apps, but does not work very well with modern web apps which make heavy use of JavaScript.
The traditional spider may still find URLs of interest, but for modern apps you should also use the AJAX Spider.

### The AJAX Spider

The [AJAX Spider](/docs/desktop/addons/ajax-spider/) crawls apps by launching browsers, clicking on links, and filling in forms.
It is an effective way of exploring modern web apps but will take longer than the traditional spider.
By default it will only click on “a”, “button” and “input” elements, so if your target app uses other elements for 
navigation then you may need to enable additional elements in the [AJAX Spider Options](/docs/desktop/addons/ajax-spider/options/)

### The Client Spider

The [Client Spider](/docs/desktop/addons/client-side-integration/spider/) works in a very similar way to the AJAX Spider.
However, it can also access the DOM using the ZAP [Browser Extension](https://github.com/zaproxy/browser-extension?tab=readme-ov-file#the-full-extension)
which can make it more effective than the AJAX Spider in some cases.

### Importing API Definitions

If your app has an API definition then you are strongly recommended to import that, in addition to any of the other options that apply.

ZAP supports:

* [GraphQL](/docs/desktop/addons/graphql-support/)
* [OpenAPI](/docs/desktop/addons/openapi-support/)
* [Postman](/docs/desktop/addons/postman-support/)
* [SOAP](/docs/desktop/addons/soap-support/)

### Importing URLs

If you need to configure ZAP to know about arbitrary requests that the other options do not find then the 
[Export / Import](/docs/desktop/addons/import-export/) add-on allows you to import URLs and requests via:

* HTTP Archive (HAR) Files
* Modsecurity Log Files
* ZAP Log Files
* URL Files

{{<prevnext prevUrl="../automation-options/" prevTitle="Automation Options" nextUrl="../target-scanning-issues/" nextTitle="Target Scanning Issues">}}

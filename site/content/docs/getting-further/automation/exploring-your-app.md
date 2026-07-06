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
The traditional spider may still find URLs of interest, but for modern apps you should also use the Client Spider.

### The Client Spider

The [Client Spider](/docs/desktop/addons/client-side-integration/spider/) crawls apps by launching browsers, clicking on links, and filling in forms.
It is the recommended option for exploring modern web apps but will take longer than the traditional spider.

Used in conjunction with the Traditional Spider it can provide good coverage for most modern apps.

### The AJAX Spider

The [AJAX Spider](/docs/desktop/addons/ajax-spider/) is an older tool for crawling modern web apps, but 
it is no longer the recommended option. Instead you should use the Client Spider.

### Importing API Definitions

If your app has an API definition then you are strongly recommended to import that, in addition to any of the other options that apply.

ZAP supports:

* [GraphQL](/docs/desktop/addons/graphql-support/)
* [MCP](/docs/desktop/addons/mcp-integration/)
* [OpenAPI](/docs/desktop/addons/openapi-support/)
* [Postman](/docs/desktop/addons/postman-support/)
* [SOAP](/docs/desktop/addons/soap-support/)

### Replaying Recordings

Recordings are a good way to capture business flows that the ZAP crawlers will not be able to automatically follow.

ZAP supports the [Zest](/docs/desktop/addons/zest/) scripting language which supports both client side and server side scripts.

Both types of scripts can be recorded via the ZAP Desktop [Recorder](/docs/desktop/addons/zest/#record-a-new-zest-script-button), 
and client side scripts can also be recorded via the ZAP [browser extensions](https://github.com/zaproxy/browser-extension#zap-browser-extensions) which can be installed and used in browsers even if ZAP is not available.

Note that recordings can break when applications change, but ZAP provides comprehensive diagnostics 
to help resolve such problems.

### Importing URLs

If you need to configure ZAP to know about arbitrary requests that the other options do not find then the 
[Export / Import](/docs/desktop/addons/import-export/) add-on allows you to import URLs and requests via:

* HTTP Archive (HAR) Files
* Modsecurity Log Files
* ZAP Log Files
* URL Files

{{<prevnext prevUrl="../automation-options/" prevTitle="Automation Options" nextUrl="../target-scanning-issues/" nextTitle="Target Scanning Issues">}}

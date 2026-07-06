---
title: "Use the Client Spider for Modern Web Apps"
summary: >
  We now recommend the Client Spider over the AJAX Spider for crawling modern web applications.
  It finds more endpoints, scales much better vs large apps, and unlocks PTK's passive coverage for free.
type: post
images:
- https://www.zaproxy.org/blog/2026-07-06-client-spider-now-recommended/images/blog-client-spider.png
tags:
- blog
- client-spider
- ajax-spider
date: "2026-07-06"
authors:
    - simon
---

When the [Client Spider](/docs/desktop/addons/client-side-integration/spider/) launched in ZAP 2.16.0 we asked for your feedback and kept the [AJAX Spider](/docs/desktop/addons/ajax-spider/) as the default recommendation while we gathered it.

That changes today.

> [!IMPORTANT]
> **We now recommend everyone use the Client Spider when crawling modern web applications.**

Here is why.

## It Finds More

Both spiders launch real browsers and interact with the application - clicking links, filling forms, navigating JavaScript-heavy pages. The difference is in how they track what they have found.

The [AJAX Spider](/docs/desktop/addons/ajax-spider/) is built on [Crawljax](https://github.com/crawljax/crawljax), a third-party project that is only updated sporadically. ZAP has limited visibility into Crawljax's internal state, which means the spider can revisit the same paths repeatedly and miss others entirely. Because it is a third-party dependency we cannot easily fix issues or add the features we need.

By default the AJAX Spider will only click on `a`, `button`, and `input` HTML elements. You can configure it to click on any elements you like, but then it will click on all instances of those elements.
Many modern web apps use `div` elements for navigation, but clicking on all `div`s significantly increases the scan time.

The [Client Spider](/docs/desktop/addons/client-side-integration/spider/) is maintained by the ZAP team and uses the [ZAP Browser Extension](https://github.com/zaproxy/browser-extension/) - the same extension that powers [Client Side Integration](/docs/desktop/addons/client-side-integration/). The extension is injected into every browser the spider launches and streams selected DOM events back to ZAP in real time. ZAP uses those events to build and maintain the [Client Map](/docs/desktop/addons/client-side-integration/), a live representation of the application's structure. Because ZAP owns that map, the spider always knows exactly what has been discovered and what still needs to be visited. In practice this means it finds more unique endpoints, and wastes less time revisiting pages it has already seen.

The Client Spider has full access to the DOM, which means it can be more intelligent about which elements it clicks.
It checks the state and styles of elements, which we have found to be a much more effective and efficient approach.

We run both spiders regularly against 2 test sites and publish the results:

* [Crawlground](https://github.com/zaproxy/crawlground) : [ZAP vs Crawlground](/docs/scans/crawlground/)
* [Google Crawlmaze](https://github.com/google/security-crawl-maze) : [ZAP vs Security Crawl Maze](/docs/scans/crawlmaze/)

The Client Spider consistently scores higher across both benchmarks.

## It Navigates Modern Apps More Effectively

The AJAX Spider starts navigating from the "root" URL, and always opens the root URL before starting a new
"flow". If an application takes a while to initialise then this will significantly slow down the crawling
as the app which keep on reinitialising.
We have also seen apps which log you out if you perform a browser refresh. These apps cannot be crawled effectively
by the AJAX Spider.

The Client Spider take a more direct route from state to state, and will not refresh the root URL.
This mirrors how user will use the app, and will not cause it to log the user out.

The [Client Spider / Tasks](/docs/desktop/addons/client-side-integration/spider/#tasks) panel show you all of the tasks
it performs, which will allow you to understand exactly what the Client Spider is doing.

## It Scales Better

On small applications the difference in performance is modest. On larger applications it becomes significant.

The AJAX Spider's performance degrades rapidly as the target grows. It was not designed with very large applications in mind, and as the number of pages increases the spider spends a disproportionate amount of time revisiting paths.

The Client Spider's workload scales linearly. New URLs are only followed if they have not been explored before,
and this makes a huge difference.

For large modern applications this difference matters. The Client Spider finishes in a predictable, consistent time; the AJAX Spider takes exponentially longer.

## It Unlocks PTK Passive Coverage

If you use [OWASP PTK](/docs/desktop/addons/owasp-ptk/) - and [you should](/blog/2026-01-19-owasp-ptk-add-on/) - the Client Spider gives you something the AJAX Spider cannot: PTK's SAST and IAST engines run automatically as the spider explores your application.

SAST analyses JavaScript statically as each page loads. IAST instruments the browser at runtime, tracking taint flows through the application. Neither makes additional requests. In ZAP terms they are passive - they observe and analyse what the spider is already doing. You get that coverage for free, as a side effect of crawling.

With the AJAX Spider you do not get this.

This was [covered in detail](/blog/2026-06-29-even-more-owasp-ptk-integration-with-zap/) in the PTK 0.7.0 release post. The short version: if you run the Client Spider, PTK's SAST and IAST coverage comes along with it at no extra cost.

## It Facilitates PTK Active Coverage

Using the Client Spider also unlocks the OWASP PTK DAST rules, which can be run via the PTK active scan rule.
Most of the ZAP active scan rules work off the [Site Tree](/docs/desktop/start/features/sitestree/). 
The PTK DAST rules are different - they run off the [Client Map](/docs/desktop/addons/client-side-integration/#client-map) which is only populated by browsers with the ZAP extension installed. 
This is the case for browsers launched via ZAP for manual exploring, and for the Client spider.

To recap - to run the PTK DAST rules you will need to have explored the target with the Client spider or 
by manual exploration (with the ZAP browser extension), and will then need to run the ZAP active scanner with 
the PTK active rule enabled.

## What to Do

If you are using the AJAX Spider today, switch to the Client Spider. 
Exactly how to do that will depend on how you are using ZAP.

Authentication works in exactly the same way - if you have configured authentication to work with the 
AJAX Spider then it should still work for the Client Spider.

Note that we recommend using the traditional spider when crawling apps, even if they are modern.
The traditional spider will often find a very different set of endpoints, so for best results use it in combination
with the Client Spider.

The AJAX Spider is not going away immediately. But it is no longer the recommended tool for exploring modern web applications.

### Desktop

The [Quick Start / Automated Scan](/docs/desktop/addons/quick-start/#use-modern-spider) tab has already been updated to use the Client Spider by default.

You can also run the Client Spider on its own via  **Tools → Client Spider** (or the context menu).

### Automation framework

In the Automation Framework: replace the [spiderAjax](/docs/desktop/addons/ajax-spider/automation/) job with [spiderClient](/docs/desktop/addons/client-side-integration/automation/#job-spiderclient).

Note while some of the `spiderClient` job parameters are the same, some are different. 
We recommend that you start off with the default settings unless you have a reason to change them. 

### Packaged Scans

If you are running the [Baseline](/docs/docker/baseline-scan/) or [Full Scan](/docs/docker/full-scan/) packaged Docker scans, both now have an option to use the Client Spider - use the `-j` flag to enable the 'default modern 
spider', and `--client-spider` to always use the Client Spider.

We have changed the packaged scans in the nightly releases to use the Client Spider by default, and 
plan to do the same for the next weekly release. The stable release will be changed as well before too long.

There is also a `--ajax-spider` option if for any reason you decide to keep using the AJAX Spider.
But if you need to use this then do [let us know why](https://groups.google.com/group/zaproxy-users)!

### API

The Client Spider has its own set of API endpoints under [clientSpider](/docs/api/#zap-api-clientspider).

The main endpoints are very similar, but some of the option endpoints will be different.

## Handling Problems

The Client Spider is a big step up from the AJAX Spider, but no spider is perfect - here's what to do if you hit issues.

Although we know that the Client Spider is much better at exploring modern web apps than the AJAX Spider, 
it will not necessarily be able to explore _your_ application.

The most likely reason for this is that your application may need more knowledge about how to drive them.
A good way to solve this problem is via [recorded scripts](/docs/getting-further/automation/exploring-your-app/#replaying-recordings).

However if you do find examples where the Client Spider fails to explore your apps effectively then please let us know about them.
We will need enough information to reproduce the problem - pull requests to the 
[Crawlground](https://github.com/zaproxy/crawlground) test app (which we maintain) are ideal :grin:

You may find that the Client Spider takes longer that the AJAX Spider for some specific apps.
We have seen this where the Client Spider is finding significantly more content than the AJAX Spider is able to.

In some specific cases (for example auto generated API interfaces) you may find is best to exclude these from the 
Client Spider. 
That is recommended for test sites like [Broken Crystals](https://brokencrystals.com/):
* https://brokencrystals.com/swagger
* https://brokencrystals.com/graphiql

## Links

- [Client Spider docs](/docs/desktop/addons/client-side-integration/spider/)
- [The Client Spider - introductory blog post](/blog/2025-01-31-client-spider/)
- [ZAP vs Security Crawl Maze results](/docs/scans/crawlmaze/)
- [ZAP vs Crawlground results](/docs/scans/crawlground/)
- [OWASP PTK integration](/blog/2026-06-29-even-more-owasp-ptk-integration-with-zap/)
- [AJAX Spider docs](/docs/desktop/addons/ajax-spider/)

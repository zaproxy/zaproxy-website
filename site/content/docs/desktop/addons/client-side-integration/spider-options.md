---
# This page was generated from the add-on.
title: Client Side Integration - Client Spider Options
type: userguide
weight: 5
---

# Client Side Integration - Client Spider Options

The Client Spider Options panel (available under Options / Client Integration / Client Spider) allows you to configure the default settings used by the [Client Spider](/docs/desktop/addons/client-side-integration/spider/).


These defaults are used when starting a new spider scan and are also pre-populated in the [Client Spider dialog](/docs/desktop/addons/client-side-integration/spider/).

## Options

* **Browser** - The browser the spider uses to crawl the target application.
* **Number of Browser Windows to Open** - The number of browser windows the spider uses in parallel. More windows increases speed but uses more memory.
* **Maximum Crawl Depth** - The maximum depth the spider will crawl to. 0 means unlimited.
* **Maximum Children** - The maximum number of child nodes to add under any single node in the tree. 0 means unlimited.
* **Initial Page Load Time** - The number of seconds to wait after the initial URL is loaded. Default: 5.
* **Page Load Time** - The number of seconds to wait after each subsequent URL is loaded. Default: 1.
* **Action Wait Time** - The number of seconds to wait after performing an action on the browser (e.g. opening a URL, clicking a button, submitting a form). Default: 0.
* **Shutdown Time** - The number of seconds to wait for new events after the last action before the spider shuts down. Default: 5.
* **Maximum Duration** - The maximum number of minutes the spider is allowed to run. 0 means unlimited.
* **Scope Check** - Controls how the spider handles requests to out-of-scope resources:
    * **Flexible** - Allows out-of-scope resources (e.g. third-party scripts and stylesheets) to pass through the proxy so the browser can load them, but does not crawl them. This is the default.
    * **Strict** - Blocks all out-of-scope resources at the proxy. The browser will only be able to load resources that are in scope.
* **Logout Avoidance** - When enabled, the spider will avoid clicking elements that are likely to log the user out.

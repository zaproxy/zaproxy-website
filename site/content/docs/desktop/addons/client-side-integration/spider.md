---
# This page was generated from the add-on.
title: Client Side Integration - Client Spider
type: userguide
weight: 3
---

# Client Side Integration - Client Spider

This [add-on](/docs/desktop/addons/client-side-integration/) adds a Client Spider which is designed to explore modern web apps more effectively.


The Client Spider works in a similar way to the AJAX Spider but it has access to the DOM via the ZAP Browser Extension
which means that it can find content which the AJAX Spider cannot find.


The Client Spider supports all of the authentication options supported by ZAP, and will run any enabled Selenium scripts in the browsers that it launches.


While it is still at an early stage we believe it is a more effective approach than the AJAX Spider.


We will be focussing on improving the Client Spider and the current plan is for it to supersede the AJAX Spider
as the recommended way of crawling modern web apps.


We would appreciate feedback via the [ZAP User Group](https://groups.google.com/group/zaproxy-users)
to let us know how effectively it works for you, especially in comparison with the AJAX Spider.


The spider can be invoked via:

* Context specific "Attack" menu
* "Tools / Client Spider" menu item
* Automation Framework [spiderClient](/docs/desktop/addons/client-side-integration/automation/) job

### Client Spider dialog

The dialog for starting the Client Spider provides 2 sub tabs:

#### Scope

This tab allows you to define what the spider will attempt to explore.


The Scope Check can be either:

* `Strict` - enforces that all requests need to be in scope to be accessed.
* `Flexible` - allows all requests to be accessed. This scope check has the side effect of allowing out of scope domains to be accessed, but not crawled.

#### Options

This tab allows you to define the options that control how the spider works.

### Client Spider tab

The Client Spider tab allows you start and monitor the Client Spider. It provides 3 sub tabs:

#### Added Nodes

These are the nodes that have been added to the Client Map.

#### Tasks

These are the tasks that spider uses to crawl the application. The tasks are updated when they are added to the task list, when they start running, and when they complete. This allows you to understand what the Client Spider is actually doing much more clearly.

#### Messages

These are the HTTP(S) messages sent from the browsers that the client uses.

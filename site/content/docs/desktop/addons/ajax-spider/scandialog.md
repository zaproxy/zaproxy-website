---
# This page was generated from the add-on.
title: AJAX Spider dialog
type: userguide
weight: 3
---

# AJAX Spider dialog

This dialog launches the AJAX Spider.

## Scope

The first tab allows you to change key features like:

### Starting Point

The URL which the AJAX spider will start crawling from, or a context (in which case it will be used one of the URLs that are in context as starting point).

### Context

Allows to select the Context to be spidered.

### User

Allows to select one of the users available from the selected context, to perform the spider scan as a user (ZAP will (re)authenticate as that user whenever necessary).

### Just In Scope

If set then any URLs which are out of scope will be ignored.


**Note:** The option `Just In Scope` is mutually exclusive with `Context` option, if one is used the other is ignored.

### Spider Subtree Only

If set then the spider will only access resources that are under the starting point (URI). When evaluating if a resource is found within the specified subtree, the spider considers only the scheme, host, port, and path components of the URI.

### Browser

The type of browser to use.  
Browsers will only be shown if ZAP has sufficient configuration to run them.  
They may still fail to run if the browsers cannot be found or if the configuration information is incorrect.

### Show Advanced Options

If selected then the Options tab will be shown.

## Options

This tab allows you to change options including:

### Number of Browser Windows to Open

You can configure the number of windows to be used by AJAX Spider.  
The more windows, the faster the process will be.

### Maximum Crawl Depth

The maximum depth that the crawler can reach. Zero means unlimited depth.

### Maximum Crawl States

The maximum number of states that the crawler should crawl. Zero means unlimited crawl states.

### Maximum Duration

The maximum time that the crawler is allowed to run. Zero means unlimited running time.

### Event Wait Time

The time to wait after a client side event is fired.

### Reload Wait Time

The time to wait after URL is loaded.

### Scope Check

How the scope is checked, for more information refer to the Options AJAX Spider screen.

### Allowed Resources

The list of allowed resources. The allowed resources are always fetched even if out of scope, allowing to include necessary resources (e.g. scripts) from 3rd-parties.

## See also

|   |                                                                         |                                            |
|---|-------------------------------------------------------------------------|--------------------------------------------|
|   | [AJAX Spider](/docs/desktop/addons/ajax-spider/)                        | for an overview of the AJAX Spider         |
|   | [AJAX Spider tab](/docs/desktop/addons/ajax-spider/tab/)                | for an overview of the AJAX Spider Tab     |
|   | [Options AJAX Spider screen](/docs/desktop/addons/ajax-spider/options/) | for an overview of the AJAX Spider Options |

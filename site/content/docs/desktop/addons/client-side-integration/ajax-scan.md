---
# This page was generated from the add-on.
title: Client Side Integration - AJAX Spider Enhancement
type: userguide
weight: 6
---

# Client Side Integration - AJAX Spider Enhancement

This add-on now adds a [Client Spider](/docs/desktop/addons/client-side-integration/spider/) which is designed to explore modern web apps more effectively. You are recommended to try this out as it is likely to be more effective that the AJAX Spider Enhancement detailed here.


Also note that from ZAP 2.16.0 the AJAX Spider has an option to enable browser extensions, and that option is turned off by default.
You will need to turn it on in order for this integration to work.


The AJAX Spider works by launching browsers, clicking links, and filling in fields.
It is an effective way to crawl modern web apps but it is not able to directly access the DOM.


The browser extensions included in this add-on can access the DOM and stream specific events back to ZAP.


This add-on listens for AJAX Spider events and when the spider has finished it then examines the Client Map
to see if it can find any URLs which were referenced by the DOM but which have not been accessed by ZAP.


If it finds any 'missed' URLs that were part of the AJAX Spider scan scope then it makes direct requests to these URLs.
You will be able to see these requests in the History, Sites Tree, and Output tabs.

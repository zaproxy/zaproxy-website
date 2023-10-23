---
# This page was generated from the add-on.
title: Client Side Integration
type: userguide
weight: 1
cascade:
  addon:
    id: client
    version: 0.3.0
---

# Client Side Integration

This add-on adds a ZAP browser extension to both Firefox and Chrome when they are launched from ZAP.

The extensions stream significant browser based events back to ZAP, giving ZAP an insight into what is going on in the browser.

If you do not launch your browser(s) from ZAP then you can still install these extensions directly from the relevant stores:

* Firefox [ZAP Browser Extension](https://addons.mozilla.org/en-GB/firefox/addon/zap-browser-extension)
* Chrome [ZAP Browser Extension](https://chrome.google.com/webstore/detail/zap-browser-extension/cnmficmodhagepcmhogkbdakncebckho)

Note that you may need to configure the extensions via their options pages to update the host and API key.

## User Interface

The add-on adds 3 new tabs to ZAP:

### Client Map

The Client Map is a hierarchical representation of the sites visited, and is similar in some ways to the Sites Tree. It includes nodes which represent URLs and ones which represent browser based storage.

Unlike the Sites Tree it includes [URI fragments](https://en.wikipedia.org/wiki/URI_fragment) which ZAP cannot otherwise see.
This means that the Client Map looks very different to the Sites tree for modern web apps, and may give you a better understanding of the
client side structure of the sites.

Any leaf nodes in the Map with a small red 'minus' sign represent URLs which have been found in the DOM but which have not been directly accessed by ZAP.

Selecting a node that has been visited by ZAP will display details about that node in the Client Details tab.

### Client Details

The Client Details tab shows details about Client Map nodes.

The types of data displayed include:

* Button: Buttons detected in the DOM
* Cookies: Cookies set in the browser
* FORM: Forms detected in the DOM
* Input: Input elements detected in the DOM
* Link: Links detected in the DOM

### Client History

The Client History tab shows all of the client side events sent from the browser extension to ZAP.

In addition to the data displayed in the Client Details tab it also includes:

* DOM Mutation: Browser [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) event
* Node Added: A DOM node added to the specified URL
* Page Load: Browser [load](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) event
* Page Unload: Browser [unload](https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event) event

## AJAX Spider Enhancement

This add-on provides an [AJAX Spider Enhancement](/docs/desktop/addons/client-side-integration/ajax-scan/) which can detect URLs referenced in the DOM which were not be accessed by the spider.

## Firefox Profile

It also creates a [Firefox profile](/docs/desktop/addons/client-side-integration/firefox-profile/) and sets it as the default profile that ZAP will use.

For more details on how the add-on works see the [internals](/docs/desktop/addons/client-side-integration/internals/) page.

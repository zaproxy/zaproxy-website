---
# This page was generated from the add-on.
title: Client Side Integration
type: userguide
weight: 1
cascade:
  addon:
    id: client
    version: 0.18.0
---

# Client Side Integration

This add-on adds the following features to ZAP.

## Client Spider

This add-on adds a [Client Spider](/docs/desktop/addons/client-side-integration/spider/) which is designed to explore modern web apps more effectively.

## Browser Extensions

This add-on adds a ZAP browser extension to both Firefox and Chrome when they are launched from ZAP.


The extensions stream significant browser based events back to ZAP, giving ZAP an insight into what is going on in the browser.


They also allow you to [Record Client Side Scripts](/docs/desktop/addons/client-side-integration/record/), for example for authentication.


If you do not launch your browser(s) from ZAP then you can still install these extensions directly from the relevant stores:

* Firefox [ZAP by Checkmarx Browser Extension](https://addons.mozilla.org/en-GB/firefox/addon/zap-browser-extension)
* Chrome [ZAP by Checkmarx Browser Extension](https://chromewebstore.google.com/detail/zap-by-checkmarx-browser/cgkggmillbmmpokepnicllalaohphffo)

Note that you may need to configure the extensions via their options pages to update the host and API key.

## Passive Scanning

This add-on provides a [Passive Scanner](/docs/desktop/addons/client-side-integration/pscan/) which passively scans all of the data received from the browser.

## User Interface

The add-on adds 4 new tabs to ZAP:

### Client Map

The Client Map is a hierarchical representation of the sites visited, and is similar in some ways to the Sites Tree. It includes nodes which represent URLs and ones which represent browser based storage.


Unlike the Sites Tree it includes [URI fragments](https://en.wikipedia.org/wiki/URI_fragment) which ZAP cannot otherwise see.
This means that the Client Map looks very different to the Sites tree for modern web apps, and may give you a better understanding of the
client side structure of the sites.


The following icons are used for leaf nodes so that you can easily tell their status:

|                                                                                  |                                                                                              |
|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| ![](/docs/desktop/addons/client-side-integration/images/node-standard.png)       | A URL which will be present in both the Site Tree and the Client Map                         |
| ![](/docs/desktop/addons/client-side-integration/images/node-fragment.png)       | A URL which will only be present in Client Map as the URL contains a fragment                |
| ![](/docs/desktop/addons/client-side-integration/images/node-minus.png)          | A URL which was found in the DOM but which has not been accessed yet                         |
| ![](/docs/desktop/addons/client-side-integration/images/node-redirect.png)       | A URL which redirects to another URL                                                         |
| ![](/docs/desktop/addons/client-side-integration/images/node-content-loaded.png) | A URL which was loaded as content by the browser (e.g. JavaScript files) rather than as HTML |


Selecting a node that has been visited by ZAP will display details about that node in the Client Details tab.


The following context menu items are supported:

#### Export Client Map

Allows users to export a representation of the Client Map in YAML format. Including all children and the associated component details of each node.

#### Copy URLs

Copies the URLs of the selected nodes into the clipboard, separated by newlines.

#### Delete

Deletes the selected nodes.

#### Open in Browser

Opens the selected node in the chosen browser. This menu item is disabled if multiple nodes are selected. If the URL contains a fragment then this will be passed to the browser.

#### Show in Sites Tree

Opens the selected node in the Sites Tree. The message in the Sites Tree does not necessarily match the same message which created the Site Node. This menu item is disabled if multiple nodes are selected or if the URL has not yet been visited. If the URL contains a fragment then this will be ignored.

### Client Details

The Client Details tab shows details about Client Map nodes.


The types of data displayed include:

* Button: Buttons detected in the DOM
* Cookies: Cookies set in the browser
* FORM: Forms detected in the DOM
* Input: Input elements detected in the DOM
* Link: Links detected in the DOM

The following context menu items are supported:

#### Copy HREFs

Copies the HREFs of the selected entries into the clipboard, separated by newlines.

#### Copy IDs

Copies the IDs of the selected entries into the clipboard, separated by newlines.

#### Copy Texts

Copies the Texts of the selected entries into the clipboard, separated by newlines.

### Client History

The Client History tab shows all of the client side events sent from the browser extension to ZAP.


In addition to the data displayed in the Client Details tab it also includes:

* DOM Mutation: Browser [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) event
* Node Added: A DOM node added to the specified URL
* Page Load: Browser [load](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) event
* Page Unload: Browser [unload](https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event) event

The following context menu items are supported:

#### Copy Node IDs

Copies the Node IDs of the selected entries into the clipboard, separated by newlines.

#### Copy Node Names

Copies the Node Names of the selected entries into the clipboard, separated by newlines.

#### Copy Source URLs

Copies the Source URLs of the selected entries into the clipboard, separated by newlines.

#### Copy Texts

Copies the Texts of the selected entries into the clipboard, separated by newlines.

#### Copy Types

Copies the Types of the selected entries into the clipboard, separated by newlines.

### Client Spider

This is detailed in the [Client Spider](/docs/desktop/addons/client-side-integration/spider/) help page.

## AJAX Spider Enhancement

This add-on provides an [AJAX Spider Enhancement](/docs/desktop/addons/client-side-integration/ajax-scan/) which can detect URLs referenced in the DOM which were not be accessed by the spider.

## Firefox Profile

It also creates a [Firefox profile](/docs/desktop/addons/client-side-integration/firefox-profile/) and sets it as the default profile that ZAP will use.


For more details on how the add-on works see the [internals](/docs/desktop/addons/client-side-integration/internals/) page.

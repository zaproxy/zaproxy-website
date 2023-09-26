---
# This page was generated from the add-on.
title: Client Side Integration
type: userguide
weight: 1
cascade:
  addon:
    id: client
    version: 0.2.0
---

# Client Side Integration

This add-on adds a ZAP browser extension to both Firefox and Chrome when they are launched from ZAP.

If you do not launch your browser(s) from ZAP then you can still install these extensions directly from the relevant stores:

* Firefox [ZAP Browser Extension](https://addons.mozilla.org/en-GB/firefox/addon/zap-browser-extension)
* Chrome [ZAP Browser Extension](https://chrome.google.com/webstore/detail/zap-browser-extension/cnmficmodhagepcmhogkbdakncebckho)

Note that you may need to configure the extensions via their options pages to update the host and API key.

It also creates a [Firefox profile](/docs/desktop/addons/client-side-integration/firefox-profile/) and sets it as the default profile that ZAP will use.

For more details on how the add-on works see the [internals](/docs/desktop/addons/client-side-integration/internals/) page.

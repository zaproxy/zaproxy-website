---
title: "What does ZAP test for?"
type: faq
category: General Questions
weight: 2
---

ZAP supports:
 - HTTP [active](/docs/desktop/start/features/ascan/) and [passive](/docs/desktop/start/features/pscan/) scanning.
 - WebSockets [passive](/docs/desktop/addons/websockets/pscanrules/) scanning.

For a full list of the HTTP active and passive scan rules see the [Alert Details](/docs/alerts/) page.

By default ZAP comes with the following (HTTP) 'release' quality rules:

  * [Release Active Scan Rules](/docs/desktop/addons/active-scan-rules/)
  * [Release Passive Scan Rules](/docs/desktop/addons/passive-scan-rules/)

But you can also download and install:

  * [Beta Active Scan Rules](/docs/desktop/addons/active-scan-rules-beta/)
  * [Beta Passive Scan Rules](/docs/desktop/addons/passive-scan-rules-beta/)
  * [Alpha Active Scan Rules](/docs/desktop/addons/active-scan-rules-alpha/)
  * [Alpha Passive Scan Rules](/docs/desktop/addons/passive-scan-rules-alpha/)
  * [Advanced SQLInjection Active Scan Rule](/docs/desktop/addons/advanced-sqlinjection-scanner/)
  * [DOM XSS Active Scan Rule](/docs/desktop/addons/dom-xss-active-scan-rule/)
  * [Image Location and Privacy Scanner](/docs/desktop/addons/image-location-and-privacy-scanner/)

from the [ZAP Marketplace](/addons/).

And there are also these scripts in the [community
scripts](https://github.com/zaproxy/community-scripts) repo:

  * [Active scripts](https://github.com/zaproxy/community-scripts/tree/master/active)
  * [Passive scripts](https://github.com/zaproxy/community-scripts/tree/master/passive)

The full list of reserved scan ids is maintained in
[scanners.md](https://github.com/zaproxy/zaproxy/blob/main/docs/scanners.md)

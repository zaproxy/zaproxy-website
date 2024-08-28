---
# This page was generated from the add-on.
title: Options Tech Detection screen
type: userguide
weight: 2
---

# Options Tech Detection screen

This screen allows you to configure the [Tech Detection](/docs/desktop/addons/technology-detection/) options:

### Mode

The Mode which controls the behavior of the technology detection passive scan rule. This Mode is persisted between ZAP sessions.

* Quick \> Return on first match; which may mean missing version information, but should be slightly more performant. (This is the default.)
* Exhaustive \> Keep matching and don't return early; likely slightly less performant.

### Alerts {#10004}

Allows the user to select whether or not the technology detection passive scan rule should raise alerts as technologies are identified (Enabled by default). Alerts are Informational and include the Tech Name, a Description of the tech if available, Other Info may include CPE or version details, and References may contain Tech specific URLs.

Latest code: [TechPassiveScanner.java](https://github.com/zaproxy/zap-extensions/blob/main/addOns/wappalyzer/src/main/java/org/zaproxy/zap/extension/wappalyzer/TechPassiveScanner.java)

Alert ID: [10004](/docs/alerts/10004/)
